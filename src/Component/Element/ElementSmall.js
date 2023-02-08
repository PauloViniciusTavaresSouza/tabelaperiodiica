import React from 'react';
import styled from './ElementSmall.module.css';

export const ElementSmall = ({ item }) => {
  console.log(item);
  return (
    <div className={styled.containerPrincipal}>
      <div className={styled.containerElement}>
        <div className={styled.na}>
          <p>{item.numeroAtomico}</p>
        </div>
        <div className={styled.simbolo}> {item.simbolo}</div>
        <div className={styled.name}> {item.elemento}</div>
      </div>
    </div>
  );
};
