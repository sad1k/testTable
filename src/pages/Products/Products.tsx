import { useState } from "react";
import { SearchBarUI } from "../../components/SearchBar/SearchBarUI";
import { TableUI } from "../../components/Table/TableUI";
import rawData from '../../data/products.json';
import { flattenObject, Flattened } from "../../utils/getPlainObject";
import styles from './Products.module.css';


export const Products = () => {
  const data: Flattened<typeof rawData[0]>[] = rawData.map((product) => {
    return flattenObject(product);
  });

  const [value, setValue] = useState('')

  const filteredData = data.filter((product) => {
    return product.name.includes(value);
  })

  const handleEdit = () => {
    
  }

  return (
    <>
    <SearchBarUI value={value} onChange={(e) => setValue(e.target.value)} />
    <TableUI onEdit={handleEdit} className={styles.productsTable} data={filteredData} />
    </>
  );
};
