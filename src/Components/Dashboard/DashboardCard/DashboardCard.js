import React, {  } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './DashboardCard.style';

const DashboardCard = ({ title, units, icon: Icon, color, link }) => {
    const history = useHistory();

    return (
        <Styled.DashboardCard color={color}>
            <Styled.DashboardCardTitle color={color}>{title}</Styled.DashboardCardTitle>  
            <Styled.DashboardCardCall color={color} onClick={() => history.push(link)}>Ver mais</Styled.DashboardCardCall>  
            <Styled.DashboardCardUnits>Unidades</Styled.DashboardCardUnits>  
            <Styled.DashboardCardUnitsValue>{units}</Styled.DashboardCardUnitsValue>  
            { Icon && <Styled.DashboardCardIcon><Icon /></Styled.DashboardCardIcon> }
        </Styled.DashboardCard>
    );
};

export default DashboardCard;
