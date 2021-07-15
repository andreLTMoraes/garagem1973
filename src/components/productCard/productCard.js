import React from 'react';
import * as S from './styled';
import Button from '../Button';

export default function ProductCard(
    {
        image,
        title,
        price
    }
) {
    return(
        <S.Card>
            <S.Header>
                <S.Img src={image}/>
                <h1>{title}</h1>
            </S.Header>
            <S.Footer>
                <h3>{`R$ ${price},00`}</h3>
                <Button text='Avise-me'/>
            </S.Footer>
        </S.Card>
    )
}