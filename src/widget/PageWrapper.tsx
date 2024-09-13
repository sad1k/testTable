import { ReactNode, SyntheticEvent, useEffect, useRef, useState } from "react";
import { InputUI } from "../components/SearchBar/InputUI";
import { ModalUI } from "../components/Modal/ModalUI";
import { EditFormUI } from "../components/EditForm/EditForm";
import { flattenObject } from "../utils/getPlainObject";
import { FlattenedWithId } from "../types/types";
import { mapArray } from "../utils/mapArray";
import search from "../assets/search.svg";

interface PageWrapper<T> {
  Page: (props: PageProps<FlattenedWithId<T>>) => ReactNode;
  filterField: keyof T;
  rawData: T[];
}

export interface PageProps<T extends FlattenedWithId<object>> {
  setActive: (value: boolean) => void;
  data: T[];
  setEditData: (
    e: SyntheticEvent<HTMLButtonElement, MouseEvent>,
    data: T
  ) => void;
}

export const PageWrapper = <T extends object>({
  Page,
  filterField,
  rawData,
}: PageWrapper<T>) => {
  const [data, setData] = useState<FlattenedWithId<T>[]>(() => {
    return rawData.map((product) => {
      return flattenObject(product) as FlattenedWithId<T>;
    });
  });

  const [editData, setEditData] = useState<FlattenedWithId<T>>(
    {} as FlattenedWithId<T>
  );

  const [filteredData, setFilterData] = useState(() => data);

  const [value, setValue] = useState("");

  useEffect(() => {
    setFilterData(() => {
      return data.filter((val) => {
        const field = val[filterField as keyof T];
        if (typeof field === "string") {
          return field.includes(value);
        }
      });
    });
  }, [value, filterField]);

  const formRef = useRef<HTMLFormElement | null>(null);

  const [active, setActive] = useState(false);

  const handleEdit = (
    _: SyntheticEvent<HTMLButtonElement, MouseEvent>,
    data: FlattenedWithId<T>
  ) => {
    setEditData(data);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    setActive(false);
    if (e) {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const newData = mapArray(data, editData, formData);
      setData(newData);
      setFilterData((filter) => mapArray(filter, editData, formData));
      form.reset();
    }
  };

  return (
    <div>
      <InputUI
        altIcon="search"
        rightIcon={search}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Page
        data={filteredData}
        setEditData={handleEdit}
        setActive={setActive}
      />
      {active ? (
        <ModalUI
          onClose={() => {
            formRef.current?.reset();
            setActive(false);
          }}
          active={active}
        >
          <EditFormUI ref={formRef} onSubmit={handleSubmit} data={editData} />
        </ModalUI>
      ) : (
        ""
      )}
    </div>
  );
};
