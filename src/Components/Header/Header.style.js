import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  grid-area: header;
  height: 68px;
  width: 100%;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${({ isOpen, theme: { color: { brandGradient, cream } }}) => isOpen ? cream : brandGradient };

  >svg {
    height: 32px;
    width: 62px;

    @media screen {
      @media (max-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
        path {
          ${({ isOpen, theme: { color: { white } } }) => !isOpen && `fill: ${white}` };
        }
      }
    }
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      background: ${({ theme: { color: { cream } }}) => cream };
      box-shadow: ${({ theme: { boxShadow: { boxShadowLG } }}) => boxShadowLG };
    }
  }
`

export const HeaderDate = styled.p`
  display: none;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      width: 240px;
      padding: 14px;
      text-align: center;
      border-radius: 0 0 40px 40px;
      margin: auto;
      box-shadow: ${({ theme: { boxShadow: { boxShadowMD } }}) => boxShadowMD };
      color: ${({ theme: { color: { white } }}) => white };
      font-weight: 700;
      background: ${({ theme: { color: { brandGradient } }}) => brandGradient };
    }
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
  }
`

export const HeaderInfoUser = styled.div`
  display: flex;
  margin-bottom: 4px;

  >svg {
    height: 16px;
    width: 16px;
    margin-right: 8px;

    path {
      ${({ isOpen, theme: { color: { brandComplementar } } }) => isOpen && `fill: ${brandComplementar}` };
    }
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      margin-bottom: 0;
      margin-right: 20px;

      >svg {
        path {
          fill: ${({ theme: { color: { brandComplementar } }}) => brandComplementar };
        }
      }
    }
  }
`

export const HeaderInfoUserValue = styled.p`
  position: relative;
  top: 2px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ isOpen,  theme: { color: { white, brandComplementar } }}) => isOpen ? brandComplementar : white };

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      color: ${({ theme: { color: { brandComplementar } }}) => brandComplementar };
    }
  }
`

export const HeaderInfoLogout = styled.button`
  font-size: 12px;
  font-weight: 700;
  color: ${({ isOpen, theme: { color: { white, danger } }}) => isOpen ? danger : white };
  display: flex;
  margin-right: 8px;
  text-transform: uppercase;

  &:after {
    content: '';
    display: block;
    position: relative;
    top: 2px;
    border-top: ${({ isOpen, theme: { color: { white, danger } }}) => `1px solid ${isOpen ? danger : white}` };
    border-right: ${({ isOpen, theme: { color: { white, danger } }}) => `1px solid ${isOpen ? danger : white}` };
    transform: rotate(45deg);
    width: 8px;
    height: 8px;
    margin-left: 2px;
  }

  &:hover {
    color: ${({ isOpen, theme: { color: { brandDark, black } }}) => isOpen ? black : brandDark };

    &:after {
      border-top: ${({ isOpen, theme: { color: { brandDark, black } }}) => `1px solid ${isOpen ? black : brandDark}` };
      border-right: ${({ isOpen, theme: { color: { brandDark, black } }}) => `1px solid ${isOpen ? black : brandDark}` };
    }
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      color: ${({ theme: { color: { danger } }}) => danger };

      &:after {
        border-top: ${({  theme: { color: { danger } }}) => `1px solid ${ danger }` };
        border-right: ${({  theme: { color: { danger } }}) => `1px solid ${ danger }` };
      }

      &:hover {
        color: ${({ theme: { color: { black } }}) => black };

        &:after {
          border-top: ${({  theme: { color: { black } }}) => `1px solid ${ black }` };
          border-right: ${({  theme: { color: { black } }}) => `1px solid ${ black }` };
        }
      }
    }
  }
`

export const HeaderNav = styled.nav`
  position: fixed;
  grid-area: headerNav;
  width: 100vw;
  height: calc(100vh - 68px);
  top: 68px;
  left: ${({ isOpen }) => isOpen ? 0 : '-100vw' };
  transition: left 1s ease;
  background: ${({ theme: { color: { white } }}) => white };
  z-index: 60;
  overflow: scroll;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      width: 300px;
      top: 68px;
      left: 0;
    }
  }
`

export const HeaderNavLabel = styled.div`
  background: ${({ theme: { color: { brandGradient } }}) => brandGradient };
  display: flex;
  justify-content: flex-end;
  padding: 16px 32px;
`

export const HeaderNavLabelButton = styled.button`
  text-transform: uppercase;
  color: ${({ theme: { color: { white } }}) => white };
  display: flex;

  &:before {
    content: '';
    display: block;
    position: relative;
    top: 2px;
    border-top: ${({ theme: { color: { white } }}) => `2px solid ${white}` };
    border-left: ${({ theme: { color: { white } }}) => `2px solid ${white}` };
    transform: ${({ isOpen }) => `rotate(${isOpen ? '-45deg' : '135deg'})` };
    transition: transform .3s ease, margin .3s ease;
    width: 10px;
    height: 10px;
    margin-right: ${({ isOpen }) => isOpen ? '12px' : '16px' };
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      &:before {
        display: none;
      }
    }
  }
`

export const HeaderNavList = styled.ul`
`

export const HeaderNavListItem = styled.li`
`

export const HeaderNavListItemButton = styled.button`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  border-bottom: ${({ theme: { color: { brandDark } }}) => `1px solid ${brandDark}` };
  padding: 20px 8px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 200;
  color: ${({ theme: { color: { brandDark } }}) => brandDark };
  padding-left: 70px;
  background: ${({ isChild, theme: { color: { white, cream } }}) => isChild ? cream : white };

  >svg {
    position: absolute;
    height: 30px;
    width: 30px;
    top: 14px;
    left: 20px;

    path {
      fill: ${({ color }) => color };
    }
  }

  &:hover {
    color: ${({ theme: { color: { white } }}) => white };
    background: ${({ theme: { color: { brandDark } }}) => brandDark };

    >svg {
      path {
        fill: ${({ theme: { color: { white } }}) => white };
      }
    }

    &:after {
      border-bottom: ${({ theme: { color: { white } }}) => `1px solid ${white}` };
      border-left: ${({ theme: { color: { white } }}) => `1px solid ${white}` };
    }
  }

  ${({childs, isOpen, theme: { color: { brandDark } }}) => childs && `
    &:after {
      content: '';
      display: block;
      position: relative;
      top: ${isOpen ? '6px' : '-4px'};
      left: -16px;
      border-bottom: 2px solid ${brandDark};
      border-left: 2px solid ${brandDark};
      transform: rotate(${isOpen ? '135deg' : '-45deg'});
      width: 16px;
      height: 16px;
    }
  `}

  ${({ isActive, color, isDashboard, theme: { color: { white, black }} }) => isActive && `
    background: ${color};
    color: ${isDashboard ? black : white};

    >svg {
      path {
        fill: ${isDashboard ? black : white};
      }
    }

    &:after {
      border-color: ${white};
    }
  `}
`

export const HeaderNavListItemChilds = styled.li`
  max-height: ${({ isOpen }) => isOpen ? '720px' : '0' };
  transition: max-height 1s ease;
  overflow: hidden;
`