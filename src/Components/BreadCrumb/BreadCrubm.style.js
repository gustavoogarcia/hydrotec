import styled from 'styled-components';

export const Breadcrumb = styled.p`
`

export const BreadcrumbPath = styled.span`
  margin-left: 10px;
  text-transform: initial;
  color: ${({color}) => color};
  font-size: 12px;
  white-space: nowrap;
`
export const BreadcrumbBase = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
`