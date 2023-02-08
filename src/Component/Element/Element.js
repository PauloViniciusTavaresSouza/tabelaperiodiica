import React from 'react';
import styled from './Element.module.css';
import { tabela } from '../../Database/database';

export const Element = ({ value }) => {
  console.log(value);

  return tabela.map((item) => {
    return (
      <div className={styled.containerPrincipal}>
        {item.numeroAtomico === value ? (
          <div className={styled.containerElement}>
            <div className={styled.na}>
              <p>{item.numeroAtomico}</p>
            </div>
            <div className={styled.simbolo}> {item.simbolo}</div>
            <div className={styled.name}> {item.elemento}</div>
            <div className={styled.ma}> {item.massaAtomico}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  });
};
