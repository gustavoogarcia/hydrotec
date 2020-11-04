import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './Header.style';

export default function HeaderListItem ({ label, icon: Icon, color, path, childs }) {
  const [itemIsOpen, setItemIsOpen] = useState(false);
  const history = useHistory();

  return (
    <S.HeaderNavListItem onClick={() => path && history.push(`${path}`)}>
      <S.HeaderNavListItemButton isOpen={itemIsOpen} childs={childs} color={color} onClick={() => setItemIsOpen(!itemIsOpen)}>
        { Icon && <Icon /> }
        {label}
      </S.HeaderNavListItemButton>
      { childs && (
        <S.HeaderNavListItemChilds isOpen={itemIsOpen}>
          { childs.map(({label: childLabel, icon: Icon}) => (
            <S.HeaderNavListItem key={childLabel}>
              <S.HeaderNavListItemButton isChild color={color} >
                { Icon && <Icon /> }
                { childLabel }
              </S.HeaderNavListItemButton>
            </S.HeaderNavListItem>
          )) }
        </S.HeaderNavListItemChilds>
      ) }
    </S.HeaderNavListItem>
  )
}