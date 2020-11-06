import React from "react";
import FeaturedNumber from "../../FeaturedNumber";
import * as S from './DashboardLosts.style';
import Button from "../../Button";

const DashboardLosts = () => {
  return (
    <S.DashboardLosts>
      <FeaturedNumber label="Percentual de perda final" value="23%" />
      <Button label=". . . ver mais" />
    </S.DashboardLosts>
  );
};

export default DashboardLosts;
