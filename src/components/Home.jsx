import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../store/actions';
import ErrorMessage from './ErrorMessage';
import Items from './Items';
import Loader from './Loader';

const Home = () => {
   const items = useSelector(state => state.items.items);
   const loading = useSelector(state => state.loader.loading);
   const error = useSelector(state => state.loader.error);
   const dispatch = useDispatch();

   useEffect(() => {
      getItems();
   }, []);

   const getItems = () => {
      dispatch(fetchItems());
   }

   if (error) {
      return <ErrorMessage getItems={getItems}/>;
   }

   return (
      <>
         {loading
            ? <Loader />
            : <Items items={items} />
         }
      </>
   );
}

export default Home;