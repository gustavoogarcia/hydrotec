import React from 'react';
import BreadCrumb from '../../Components/BreadCrumb';
import GreeneryChart from '../../Components/GreeneryChart';
import UnitsTable from '../../Components/UnitsTable';
import * as S from './IndicatorsDetails.style';

const IndicatorsDetails = (indicatorsProps) => {
  const { color, label, shortLabel, data, icon: Icon, tableItems } = indicatorsProps

  return (
    <S.IndicatorsDetails>
      <BreadCrumb {...indicatorsProps} />
      <S.IndicatorsDetailsTitle color={color}>
        <S.IndicatorsDetailsTitleValue color={color}>{label}</S.IndicatorsDetailsTitleValue>
        <hr />
        <Icon />
      </S.IndicatorsDetailsTitle>
      { data[0].plannedUnits 
        ? <S.IndicatorsDetailsCaption color={color}>{`Percentual de hortaliças na ${label}`}</S.IndicatorsDetailsCaption>
        : <S.IndicatorsDetailsCaption color={color}>{`Percentual de ${label}`}</S.IndicatorsDetailsCaption>
      }
      <GreeneryChart data={data} color={color} shortLabel={shortLabel} />
      <UnitsTable data={data} color={color} tableItems={tableItems} />
    </S.IndicatorsDetails>
  );
};

export default IndicatorsDetails;
