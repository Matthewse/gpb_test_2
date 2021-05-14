import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { fetchItems } from '../store/actions';
import ErrorMessage from './ErrorMessage';
import Items from './Items';
import Loader from './Loader';
import ItemDetails from './ItemDetails';

const Home = () => {
   const { itemsList } = useSelector(state => state.items);
   const { id } = useSelector(state => state.items.itemDetails);
   const { loading, error } = useSelector(state => state.loader);
   const dispatch = useDispatch();

   useEffect(() => {
      getItems();
   }, []);

   const getItems = () => {
      dispatch(fetchItems());
   }

   if (error) {
      return <ErrorMessage getItems={getItems} />;
   }

   return (
      <>
         {loading ? <Loader /> :
            <Switch>
               <Route exact path="/">
                  <Items items={itemsList} />
               </Route>
               <Route path={`/${id}/details`}>
                  <ItemDetails />
               </Route>
            </Switch>
         }
      </>
   );
}

export default Home;