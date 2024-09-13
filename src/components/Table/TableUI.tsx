import { ReactNode, SyntheticEvent, TableHTMLAttributes } from "react";
import { getObjectKeys } from "../../utils/getObjectKeys";
import { TableRow } from "../TableRow/TableRow";
import { FlattenedWithId } from "../../types/types";

interface TableProps<T extends FlattenedWithId<object>> extends TableHTMLAttributes<HTMLTableElement> {
  columns?: string[];
  header?: ReactNode;
  data: T[];
  onEdit: (e: SyntheticEvent<HTMLButtonElement, MouseEvent>, _data: T) => void;
}

export const TableUI = <T extends FlattenedWithId<object> ,>({
  columns,
  header,
  data,
  onEdit,
  ...props
}: TableProps<T>) => {
  if (!data.length) {
    return <div>No Data</div>;
  }

  const keys = columns ||  getObjectKeys(data[0]);  

  return (
    <table {...props}>
      <thead>
        {header ? header : keys?.map((key: string) => <th key={key}>{key}</th>)}
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <TableRow keys={keys || []} onEdit={onEdit} row={row} key={row.id}  />
          );
        })}
      </tbody>
    </table>
  );
};
