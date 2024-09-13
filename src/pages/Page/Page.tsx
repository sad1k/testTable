import { SyntheticEvent, useCallback } from "react";
import { TableUI } from "../../components/Table/TableUI";
import styles from "./Products.module.css";
import { PageProps } from "../../widget/PageWrapper";
import { FlattenedWithId } from "../../types/types";

export const Page = <T extends FlattenedWithId<object>>({
  setActive,
  data,
  setEditData,
}: PageProps<T>) => {
  const handleEdit = useCallback(
    (
      _: SyntheticEvent<HTMLButtonElement, MouseEvent>,
      changedData: FlattenedWithId<T>
    ) => {
      setEditData(_, changedData as T);
      setActive(true);
    },
    []
  );

  return (
    <>
      <TableUI
        onEdit={handleEdit}
        className={styles.productsTable}
        data={data}
      />
    </>
  );
};
