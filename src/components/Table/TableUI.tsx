import { ReactNode, TableHTMLAttributes } from "react";
import { getObjectKeys } from "../../utils/getObjectKeys";


interface TableProps<DataType> extends TableHTMLAttributes<HTMLTableElement> {
  columns?: string[];
  header?: ReactNode;
  data: DataType[];
  onEdit: () => void
}

export const TableUI = <DataType extends { [key: string]: unknown },>({columns, header, data, onEdit , ...props}: TableProps<DataType>) => {

  if(!data.length){
    return <div>No Data</div>
  }

  let keys = columns

  if(!columns){
    keys = getObjectKeys(data[0])
  }
  
  return (
    <table {...props}>
      <thead>
        {header ? header : keys?.map((key: string) => <th key={key}>{key}</th>)}
      </thead>
      <tbody>
        {data.map((row) => {
          return <tr>
            {keys?.map((key: string) => {
              console.log(row)
              return <td key={key}>{`${row[key]}`}</td>
              })}
              <td>
                <button onClick={onEdit}>Edit</button>
              </td>
          </tr>
        })}
      </tbody>
    </table>
  );
};
