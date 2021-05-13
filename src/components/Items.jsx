import React from 'react';

const Items = ({ items }) => {
   return (
      <div className="list-group">
         {items.map(({ name, id }) => {
            return (
               <button type="button" className="list-group-item list-group-item-action" aria-current="true" key={id}>
                  {name}
               </button>
            )
         })}
      </div>
   )
}

export default Items;