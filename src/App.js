import React from 'react';
import * as S from './styled';
import LandingForm from './components/landingForm/landingForm';
import ProductCard from './components/productCard/productCard';
import Button from './components/Button';
import {products} from './products';

import logo from './assets/logoLanding.png';
import productImg from './assets/product.png'

function App() {
  return (
    <S.Content>
      <S.LandingSection id='landing'>
        <S.LandingBox>
          <S.Img src={logo}/>
          <S.P>Peças, serviços e restauração de carros antigos com design e tecnologias atuais, sem abrir mão do clássico.</S.P>
          <S.P>Deixe seu email e fique por dentro de nossos lançamentos e produtos.</S.P>
          <LandingForm />
          <Button text='Cadastrar'/>
        </S.LandingBox>
      </S.LandingSection>
      <S.ProductsSection id='products'>
        <S.Track/>
        {products.map((product) => (
          <ProductCard
            image={productImg}
            title={product.name}
            price={product.price}
          />
        ))}
      </S.ProductsSection>
      <S.FooterSection id='footer'>
        <S.CTA>
          <S.P>Não fique pra trás, comendo poeira!</S.P>
          <S.P>Saia na frente e receba tudo em primeira mão.</S.P>
          <LandingForm/>
          <Button text='Cadastrar agora'/>
        </S.CTA>
        <S.Socials>
          <S.Img src={logo}/>
          <S.P>Acompanhe nossas redes</S.P>
          <S.SocialIconsContainer>
            <S.IconSocial url='https://github.com/andreLTMoraes/garagem1973' bgColor='#222'/>
            <S.IconSocial url='https://www.linkedin.com/in/andretmoraes/' bgColor='#222'/>
          </S.SocialIconsContainer>
        </S.Socials>
      </S.FooterSection>
      <S.CreditSection id='credits'>
        <span>Desenvolvido por <S.Link href='https://github.com/andreLTMoraes/' target='_blank' rel='noreferrer'>André Moraes</S.Link></span>
      </S.CreditSection>
    </S.Content>
  );
}

export default App;
