import React, { useState } from 'react';
import Hamburger from '../Hamburger';
import SohlLogo from '../../images/SohlLogo'
import UserIcon from '../../images/UserIcon'
import * as S from './Header.style';
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import HeaderListItem from './HeaderListItem';
import { navItems } from './Header.constants';

export default function Header () {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const atualDate = format(new Date(), "dd 'de' LLLL 'de' yyyy", { locale: ptBR });

  return (
    <>
      <S.Header isOpen={menuIsOpen}>
        <Hamburger isOpen={menuIsOpen} toggle={setMenuIsOpen} />
        <SohlLogo />
        <S.HeaderDate>{atualDate}</S.HeaderDate>
        <S.HeaderInfo>
          <S.HeaderInfoUser isOpen={menuIsOpen}>
            <UserIcon />
            <S.HeaderInfoUserValue isOpen={menuIsOpen}>Nome do Usuário</S.HeaderInfoUserValue>
          </S.HeaderInfoUser>
          <S.HeaderInfoLogout isOpen={menuIsOpen}>sair</S.HeaderInfoLogout>
        </S.HeaderInfo>
      </S.Header>
      <S.HeaderNav isOpen={menuIsOpen}>
        <S.HeaderNavLabel>
          <S.HeaderNavLabelButton isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>Menu</S.HeaderNavLabelButton>
        </S.HeaderNavLabel>
        <S.HeaderNavList>
          { navItems.map((listItem) => <HeaderListItem key={listItem.label} { ...listItem } />) }
        </S.HeaderNavList>
      </S.HeaderNav>
    </>
  )
}