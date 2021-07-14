import React from 'react';
import * as S from './styled';

function App() {
  return (
    <S.content>
      <S.landingSection>
        <h1 style={{color: '#fff'}}>landingSection</h1>
      </S.landingSection>
      <S.productsSection>
        <h1>productsSection</h1>
      </S.productsSection>
      <S.footerSection>
        <h1 style={{color: '#fff'}}>footerSection</h1>
      </S.footerSection>
      <S.creditSection>
        <span>Desenvolvido por <S.link href='https://github.com/andreLTMoraes/' target='_blank' rel='noreferrer'>André Moraes</S.link></span>
      </S.creditSection>
    </S.content>
  );
}

export default App;
