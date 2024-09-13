import { ReactNode, SyntheticEvent, useEffect, useMemo, useRef, useState } from "react";
import { InputUI } from "../components/SearchBar/InputUI";
import { ModalUI } from "../components/Modal/ModalUI";
import { EditFormUI } from "../components/EditForm/EditForm";
import { flattenObject } from "../utils/getPlainObject";
import { FlattenedWithId } from "../types/types";

interface PageWrapper<T>{
  Page: (props:  PageProps<FlattenedWithId<T>>) => ReactNode
  filterField: string;
  rawData: T[]
}

export interface PageProps<T extends FlattenedWithId<object>> {
  setActive: (value: boolean) => void
  data: T[],
  setEditData: any;
  // setEditData: (e: SyntheticEvent<HTMLButtonElement, MouseEvent>, _data: T) => void;
}

export const PageWrapper = <T extends object,>({Page, filterField, rawData}: PageWrapper<T>) => {

  const data: FlattenedWithId<T>[] = useMemo(
    () =>
      rawData.map((product) => {
        return flattenObject(product) as FlattenedWithId<T>;
      }),
    []
  );

  const [editData, setEditData] = useState<FlattenedWithId<T>>({} as FlattenedWithId<T>);

  const [filteredData, setFilterData] = useState(() => data);
  
  const [value, setValue] = useState("");
  
    useEffect(() => {
      console.log()
      setFilterData(() => {
        return rawData.filter((val) => {
          const field = val[filterField];
          console.log(field)
          if (typeof field === "string") {
            return field.includes(value);
          }
        });
      });
    }, [value, filterField]);

  const formRef = useRef<HTMLFormElement | null>(null);

  const [active, setActive] = useState(false);

  const handleEdit = (_: SyntheticEvent<HTMLButtonElement, MouseEvent>, data: FlattenedWithId<T>) => {
    setEditData(data)
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    setActive(false);
    if (e) {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const newData = filteredData.map((val) => {

        if (editData.id === val.id) {
          return { ...val, ...Object.fromEntries(formData.entries()) };
        }
        return val;
      });
      setFilterData(newData);
      form.reset();
    }
  };

  return (
    <div>
      <InputUI value={value} onChange={(e) => setValue(e.target.value)} />
      <Page data={filteredData} setEditData={handleEdit} setActive={setActive} />
      <ModalUI
        onClose={() => {
          formRef.current?.reset();
          setActive(false);
        }}
        active={active}
      >
        <EditFormUI ref={formRef} onSubmit={handleSubmit} data={editData} />
      </ModalUI>
    </div>
  );
};
