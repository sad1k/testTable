import { getObjectKeys } from "../../utils/getObjectKeys";
import { getPlainObject } from "../../utils/getPlainObject";

 export const TableUI = ({columnLabel, rowData , ...props}) => {

  const keys = getObjectKeys(rowData[0])

  const data = rowData.map((row) => getPlainObject(row, {}))

  const handleEdit = () => {
    
  }
  
  return (
    <table>
      <thead>
        {columnLabel ? columnLabel : 
          keys.map((key) => <th key={key}>{key}</th>)
        }
      </thead>
      <tbody>
        {rowData.map((row) => {
          return <tr>
            {keys.map((key) => {
              return <td key={key}>{data[key]}</td>
              })}
              <td>
                <button onClick={() => handleEdit()}>Edit</button>
              </td>
          </tr>
        })}
      </tbody>
    </table>
  );
};
