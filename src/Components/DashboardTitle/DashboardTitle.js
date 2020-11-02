import React from 'react';
import * as Styled from './DashboardTitle.style';

const DashboardTitle = ({children}) => {
    return (
      <Styled.DashboardTitle>{children}</Styled.DashboardTitle>
    );
};

export default DashboardTitle;
