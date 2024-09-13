import { SyntheticEvent, useCallback } from "react";
import { TableUI } from "../../components/Table/TableUI";
import styles from "./Products.module.css";
import { PageProps } from "../../widget/PageWrapper";

export const Products = <T,>({
  setActive,
  data,
  setEditData,
}: PageProps<T>) => {
  const handleEdit = useCallback(
    (
      _: SyntheticEvent<HTMLButtonElement, MouseEvent>,
      changedData: T
    ) => {
      setEditData(_ ,changedData);
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
