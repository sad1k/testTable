import { memo, SyntheticEvent } from "react";
import { FlattenedWithId } from "../../types/types";

interface TableRowProps<T extends FlattenedWithId<object> > {
  row: T;
  keys: string[];
  onEdit: (e: SyntheticEvent<HTMLButtonElement, MouseEvent>, _data: FlattenedWithId<object>) => void;
}

export const TableRow = memo(<T extends FlattenedWithId<object>,>({ keys, row, onEdit }: TableRowProps<T>) => {
  return (
    <tr>
      {keys?.map((key: string) => {
        return <td key={key}>{`${row[key as keyof T]}`}</td>;
      })}
      <td>
        <button onClick={(e) => onEdit(e, row)}>Edit</button>
      </td>
    </tr>
  );
}, (prevProps, nextProps) => prevProps.row === nextProps.row);
