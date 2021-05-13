import React from 'react';

const ErrorMessage = ({ getItems }) => {
   return (
      <div className="card">
         <div className="card-body d-flex justify-content-between">
            <p className="card-text">Произошла ошибка!</p>
            <button type="button" className="btn btn-dark" onClick={() => getItems()}>Повторить запрос</button>
         </div>
      </div>
   )
}

export default ErrorMessage;