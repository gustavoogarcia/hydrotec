import styled from 'styled-components';

export const Login = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;    

  >section {
    width: 100%;
    max-width: ${({theme: { screen: { screenXS }}}) => screenXS};
    background-color: ${({theme: { color: { brandComplementar }}}) => brandComplementar};

    h1 {
      color: white;
    }

    input {
      background-color: white;
      border: none;
    }
  }
  
`