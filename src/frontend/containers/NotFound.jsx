import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => {
  return (
    <>
      <div className='wrap'>
        <div className='box'>
          <div className='text animated bounce'>#Error-404</div>
          <div className='text__title'>Pagina no encontrada</div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
