import React, { useState } from 'react';
import * as S from './styled';

import Button from '../Button';

export default function LandingForm ({btnText, btnAction, leads}) {
    const [lead, setLead] = useState({
        name: '',
        email: ''
    })

    function handleLead () {
        if (lead.name !== '' && lead.email !== '') {
            localStorage.setItem('Leads', JSON.stringify([...leads, lead]));
            btnAction([...leads, lead]);
            alert(`Obrigado por se registrar ${lead.name}!`);
            setLead({
                name: '',
                email: ''
            })
        }
    }

    return (
        <>
            <S.Input placeholder='Seu nome' value={lead.name} onChange={e => setLead({...lead, name: e.target.value})}/>
            <S.Input placeholder='Seu melhor email' value={lead.email} onChange={e => setLead({...lead, email: e.target.value})}/>
            <Button text={btnText} handle={handleLead}/>
        </>
    )
} 