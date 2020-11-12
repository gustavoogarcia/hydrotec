import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { deburr } from "lodash";
import * as S from './Header.style';

export default function HeaderListItem ({ label, icon: Icon, color, path, childs }) {
  const [itemIsOpen, setItemIsOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const isActive = deburr(path).toLowerCase().replace(/\s/g, "-") === `/${location.pathname.split('/')[1]}`;

  return (
    <S.HeaderNavListItem onClick={() => path && history.push(`${path}`)}>
      <S.HeaderNavListItemButton
        isActive={isActive}
        isDashboard={label === 'Dashboard'}
        isOpen={itemIsOpen}
        childs={childs}
        color={color}
        onClick={() => childs && setItemIsOpen(!itemIsOpen)}
      >
        { Icon && <Icon /> }
        {label}
      </S.HeaderNavListItemButton>
      { childs && (
        <S.HeaderNavListItemChilds isOpen={itemIsOpen}>
          { childs.map(({label: childLabel, icon: Icon, path}) => (
            <S.HeaderNavListItem key={childLabel} onClick={() => path && history.push(`${path}`)}>
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