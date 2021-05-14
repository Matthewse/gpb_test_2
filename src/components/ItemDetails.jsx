import React from 'react';
import { useSelector } from 'react-redux';

const ItemDetails = () => {
   const { name, price, content } = useSelector(state => state.items.itemDetails);

   return (
      <table className="table">
         <thead>
            <tr>
               <th>Наименование</th>
               <th>Описание</th>
               <th>Цена</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>{name}</td>
               <td>{content}</td>
               <td>{price}</td>
            </tr>
         </tbody>
      </table>
   )
}

export default ItemDetails;