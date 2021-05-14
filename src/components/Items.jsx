import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchItemDetails } from '../store/actions';

const Items = ({ items }) => {
   const dispatch = useDispatch();

   const getDetails = (id) => {
      dispatch(fetchItemDetails(id));
   }

   return (
      <ul className="list-group">
         {items.map(({ name, id }) => {
            return (
               <li className="list-group-item list-group-item-action" key={id}>
                  <Link to={`/${id}/details`} onClick={() => getDetails(id)} >
                     {name}
                  </Link>
               </li>
            )
         })}
      </ul>
   )
}

export default Items;