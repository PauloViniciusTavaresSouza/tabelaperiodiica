import React from 'react';
import { DivElement } from './TabelaStyled';
import styled from './Tabela.module.css';
import { tabela } from '../Database/database';
import { ElementSmall } from './Element/ElementSmall';

export const Tabela = () => {
  const tabelaFileira1 = tabela.filter(
    (item) => item.numeroAtomico >= 1 && item.numeroAtomico <= 2,
  );

  const tabelaFileira2 = tabela.filter(
    (item) => item.numeroAtomico >= 3 && item.numeroAtomico <= 4,
  );

  console.log(tabelaFileira2);
  return (
    <section className={styled.containerBody}>
      <div className={styled.containerPrincipal}>
        <div className={styled.column1}>
          {tabelaFileira1.map((item) => {
            return (
              <div key={item.numeroAtomico}>
                <ElementSmall item={item} />
              </div>
            );
          })}
        </div>

        <div className={styled.column2}>
          {tabelaFileira2.map((item) => {
            return (
              <div key={item.numeroAtomico}>
                <ElementSmall item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
