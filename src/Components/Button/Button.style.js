import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { lighten, darken } from 'polished';

const primary = css`
  background: ${({ theme: { color: { brand }}}) => brand };
  color: ${({ theme: { color: { white }}}) => white };

  svg {
    path {
      stroke: ${({ theme: { color: { white }}}) => white };
    }
  }

  &:hover {
    background: ${({theme: {color: { brand }}}) => darken('.05', brand) };
  }

  &:active, &:focus {
    background: ${({theme: {color: { brand }}}) => darken('.1', brand) };
  }
  
`

const secondary = css`
  background: ${({ theme: { color: { white }}}) => white };
  color: ${({ theme: { color: { black }}}) => black };

  &:hover {
    background: ${({theme: {color: { brand }}}) => lighten('.4', brand) };
  }

  &:active, &:focus {
    background: ${({theme: {color: { brand }}}) => lighten('.2', brand) };
  }
`

const danger = css`
  background: ${({ theme: { color: { danger }}}) => danger };
  color: ${({ theme: { color: { white }}}) => white };

  &:hover {
    background: ${({theme: {color: { danger }}}) => darken('.05', danger) };
  }

  &:active, &:focus {
    background: ${({theme: {color: { danger }}}) => darken('.1', danger) };
  }

  svg {
    path {
      stroke: ${({ theme: { color: { white }}}) => white };
    }
  }
`

const warning = css`
  background: ${({ theme: { color: { warning }}}) => warning };
  color: ${({ theme: { color: { black }}}) => black };

  &:hover {
    background: ${({theme: {color: { warning }}}) => darken('.05', warning) };
  }

  &:active, &:focus {
    background: ${({theme: {color: { warning }}}) => darken('.1', warning) };
  }
`

const bigIcon = css`
  padding: 0;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`

const button = css`
  grid-area: ${({name}) => name};
  text-transform: uppercase;
  text-align: center;
  font-weight: ${({theme: {fontWeight: {fontWeightBold}}}) => fontWeightBold};
  padding: 8px 32px;
  border-radius: 100px;
  font-size: 12px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  svg {
    margin: -10px 0;
    height: 20px;
    
    path {
      stroke: ${({ theme: { color: { black }}}) => black };
    }
  }

  &.primary {
    ${primary}
  }

  &.secondary {
    ${secondary}
  }

  &.danger {
    ${danger}
  }

  &.warning {
    ${warning}
  }
  
  &.bigIcon {
    ${bigIcon}
  }

  &:disabled {
    background: ${({theme: {color: {brandLight}}}) => brandLight};
    cursor: not-allowed;
  }
`
export const StyledButtonNavLink = styled(NavLink)`
`

export const StyledButtonAction = styled.button`
  ${button}
`

export const StyledButtonLink = styled(Link)`
  ${button}
`
