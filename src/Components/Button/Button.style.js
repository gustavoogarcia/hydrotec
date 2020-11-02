import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const primary = css`
  padding: ${({theme: {spacing: {spacingSquishXS}}}) => spacingSquishXS};
  box-shadow: ${({theme: {boxShadow: {boxShadowMD}}}) => boxShadowMD};
  border-radius: ${({theme: {borderRadius: {borderRadiusPill}}}) => borderRadiusPill};
  background: ${({ theme: { color: { brandGradient }}}) => brandGradient };
  font-size: ${({theme: {fontSize: {fontSizeXXS}}}) => fontSizeXXS};
  color: ${({ theme: { color: { white }}}) => white };

  &:hover {
    background: ${({theme: {color: {brand}}}) => brand};
    color: ${({ theme: { color: { white }}}) => white };
  }

  &:active, &:focus {
    background: ${({theme: {color: {brandDark}}}) => brandDark};
  }

  &:visited {
    color: ${({theme: {color: {white}}}) => white};
  }

  &:disabled {
    opacity: .3;
    cursor: not-allowed;
  }
`

const secondary = css`
  padding: ${({theme: {spacing: {spacingSquishXS}}}) => spacingSquishXS};
  box-shadow: ${({theme: {boxShadow: {boxShadowMD}}}) => boxShadowMD};
  background: ${({ theme: { color: { white }}}) => white };
  border-radius: ${({theme: {borderRadius: {borderRadiusPill}}}) => borderRadiusPill};
  border: 2px solid ${({ theme: { color: { brand }}}) => brand };
  font-size: ${({theme: {fontSize: {fontSizeXXS}}}) => fontSizeXXS};
  color: ${({ theme: { color: { brandDark }}}) => brandDark };

  &:hover {
    background: ${({theme: {color: {brand}}}) => brand};
    color: ${({ theme: { color: { white }}}) => white };
    border: 2px solid ${({ theme: { color: { brand }}}) => brand };
  }

  &:active, &:focus {
    background: ${({theme: {color: {brandDark}}}) => brandDark};
    color: ${({ theme: { color: { white }}}) => white };
    border: 2px solid ${({ theme: { color: { brandDark }}}) => brandDark };
  }

  &:visited {
    color: ${({theme: {color: {brandDark}}}) => brandDark};

    &:hover {
      color: ${({ theme: { color: { white }}}) => white };
    }

    &:active, &:focus {
      color: ${({ theme: { color: { white }}}) => white };
    }
  }

  &:disabled {
    background: ${({theme: {color: {brandLight}}}) => brandLight};
    border: 2px solid ${({ theme: { color: { brandLight }}}) => brandLight };
    cursor: not-allowed;
  }
`

const danger = css`
  background: ${({ theme: { color: { error }}}) => error };
  min-height: 52px;
  width: 100%;
  padding: ${({theme: {spacing: {spacingSquishXS}}}) => spacingSquishXS};
  color: ${({ theme: { color: { white }}}) => white };

  svg {
    margin: -4px 0;
  }

  &:hover {
    background: ${({theme: {color: {errorMedium}}}) => errorMedium};
  }

  &:active, &:focus {
    background: ${({theme: {color: {errorDark}}}) => errorDark};
  }
`

const transparentBigIcon = css`
  display: flex;
    width: 30px;
    flex-direction: column;
    align-items: center;
    font-size: ${({ theme: { fontSize: { fontSizeUS }}}) => fontSizeUS };
    color: ${({ theme: { color: { black }}}) => black };
    white-space: nowrap;
    transition: color .3s ease;

    &:hover {
      color: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };

      svg {
        path {
          transition: stroke .3s ease;
          stroke: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };
        }
      }
    }

    &:active, &:focus {
      color: ${({ theme: { color: { brandComplementarDark }}}) => brandComplementarDark };

      svg {
        path {
          transition: stroke .3s ease;
          stroke: ${({ theme: { color: { brandComplementarDark }}}) => brandComplementarDark };
        }
      }

      &:hover {
        color: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };

        svg {
          path {
            transition: stroke .3s ease;
            stroke: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };
          }
        }
      }
    }

    &:disabled {
      opacity: .3;
      cursor: not-allowed;

      &:hover {
        color: ${({ theme: { color: { black }}}) => black };

      svg {
        path {
          stroke: ${({ theme: { color: { black }}}) => black };
        }
      }
    }
  }
`

const whiteBigIcon = css`
  display: flex;
    width: 30px;
    flex-direction: column;
    align-items: center;
    font-size: ${({ theme: { fontSize: { fontSizeUS }}}) => fontSizeUS };
    color: ${({ theme: { color: { white }}}) => white };
    white-space: nowrap;
    transition: color .3s ease;

    &:hover {
      color: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };

      svg {
        path {
          transition: stroke .3s ease;
          stroke: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };
        }
      }
    }

    &:active, &:focus {
      color: ${({ theme: { color: { brandComplementarDark }}}) => brandComplementarDark };

      svg {
        path {
          transition: stroke .3s ease;
          stroke: ${({ theme: { color: { brandComplementarDark }}}) => brandComplementarDark };
        }
      }

      &:hover {
        color: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };

        svg {
          path {
            transition: stroke .3s ease;
            stroke: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };
          }
        }
      }
    }

    &:disabled {
      opacity: .3;
      cursor: not-allowed;

      &:hover {
        color: ${({ theme: { color: { black }}}) => black };

      svg {
        path {
          stroke: ${({ theme: { color: { black }}}) => black };
        }
      }
    }
  }
`

const secondaryBigIcon = css`
  display: flex;
  min-width: 30px;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme: { fontSize: { fontSizeUS }}}) => fontSizeUS };
  color: ${({ theme: { color: { black }}}) => black };
  white-space: nowrap;
  border: 2px solid ${({ theme: { color: { brand }}}) => brand};
  border-radius: 50%;
  min-width: 54px;
  min-height: 54px;
  padding-top: 5px;
  transition: color .3s ease, background .3s ease;

  svg {
      path {
        transition: stroke .3s ease;
      }
    }

  &:hover {
    background-color: ${({ theme: { color: { brand }}}) => brand };
    color: ${({ theme: { color: { white }}}) => white };

    svg {
      path {
        stroke: ${({ theme: { color: { white }}}) => white };
      }
    }
  }

  &:active, &:focus {
    background-color: ${({ theme: { color: { brandDark }}}) => brandDark };
    color: ${({ theme: { color: { white }}}) => white };
    border-color: ${({ theme: { color: { brandDark }}}) => brandDark};

    svg {
      path {
        stroke: ${({ theme: { color: { white }}}) => white };
      }
    }

    &:hover {
      color: ${({ theme: { color: { white }}}) => white };

      svg {
        path {
          transition: stroke .3s ease;
          stroke: ${({ theme: { color: { white }}}) => white };
        }
      }
    }
  }

  &:disabled {
    opacity: .3;
    cursor: not-allowed;

    &:hover {
      color: ${({ theme: { color: { black }}}) => black };

    svg {
      path {
        stroke: ${({ theme: { color: { black }}}) => black };
      }
    }
  }
}
`

const button = css`
  grid-area: ${({name}) => name};
  text-transform: uppercase;
  text-align: center;
  font-weight: ${({theme: {fontWeight: {fontWeightBold}}}) => fontWeightBold};

  &.primary {
    ${primary}
  }

  &.secondary {
    ${secondary}
  }

  &.danger {
    ${danger}
  }

  &.secondaryBigIcon {
    ${secondaryBigIcon}
  }

  &.whiteBigIcon {
    ${whiteBigIcon}
  }

  &.transparentBigIcon {
    ${transparentBigIcon}
  }
`
// export const StyledButtonBigIcon = styled.button`
//   flex-direction: column;
//   flex-direction: center;
//   align-items: center;
//   text-transform: uppercase;
//   font-weight: 700;
//   font-size: 8px;
//   color: ${({ theme: { color: { white }}}) => white };
//   white-space: nowrap;
//   transition: color .2s ease;

//   &:hover {
//     color: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };

//     svg {
//       path {
//         transition: stroke .3s ease;
//         stroke: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };
//       }
//     }
//   }

//   ${({variation, theme: { color: { brand, brandDark, black, white }}}) => {

//     if(variation === 'secondary') return `
//       background: transparent;
//       border: 2px solid ${brand};
//       color: ${black};
//       border-radius: 50%;
//       min-width: 54px;
//       min-height: 54px;
//       padding-top: 5px;
//       transition: background .3s ease;

//       &:hover {
//         background: ${brand};
//         color: ${white};

//         svg {
//           path {
//             stroke: ${white};
//           }
//         }
//       }

//       &:active {
//         background: ${brandDark};
//         border-color: ${brandDark};
//         color: ${white};

//         svg {
//           path {
//             stroke: ${white};
//           }
//         }
//       }
//     `;
//   }}
// `

export const StyledButtonNavLink = styled(NavLink)`
  display: flex;
  flex-direction: center;
  align-items: center;
  font-weight: 700;
  font-size: ${({ theme: { spacing: { fontSizeXS }}}) => fontSizeXS };
  color: ${({ theme: { color: { white }}}) => white };
  white-space: nowrap;
  transition: color .2s ease;

  &:hover {
    color: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };

    svg {

      path {
        transition: stroke .3s ease;
        stroke: ${({ theme: { color: { brandComplementar }}}) => brandComplementar };
      }
    }
  }

  svg {
    transform: translateY(-3px);
    margin-right: ${({ theme: { spacing: { spacingSM }}}) => spacingSM };
    min-width: 30px;
    height: 30px;
    width: 30px;
  }
`

export const StyledButtonAction = styled.button`
  ${button}
`

export const StyledButtonLink = styled(Link)`
  ${button}
`
