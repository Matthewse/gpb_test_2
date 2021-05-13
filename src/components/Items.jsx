import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../store/actions';

const Items = () => {
   const items = useSelector(state => state.items);
   const dispatch = useDispatch();

   const getItems = () => {
      dispatch(fetchItems());
   }
   console.log(items);

   return (
      <div className="lead">
         <button type="button" className="btn btn-primary" onClick={() => getItems()}>Загрузить список</button>
      </div>
   )
}

export default Items;