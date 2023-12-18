import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children?: React.ReactNode;
  $spaceBetween?: boolean;
  $flexDir?: boolean;
  $padding?: boolean;
  $isAlign?: boolean;
}

const Pai = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0 30px 0;
  ${({ $padding }) => $padding && 'padding:0;'};
`;

const Filho = styled.div<ContainerProps>`
  ${({ $spaceBetween} ) => $spaceBetween && 'justify-content: space-between;'};
  ${({ $flexDir }) => $flexDir && 'flex-direction: column;'};
  width: 100%;
  max-width: 868px;
  margin:0 30px 0 30px;
  display:flex;
  ${({$isAlign })=> $isAlign && 'align-items: center;'}
`;

export interface StyledContainerProps{
  children?: React.ReactNode;
  spaceBetween?: boolean;
  flexDir?: boolean;
  padding?: boolean;
  isAlign?: boolean;
  }

export default function Container({ children, spaceBetween, flexDir, padding, isAlign}: StyledContainerProps) {
  return<>
    <Pai $padding = {padding}>
      <Filho $spaceBetween = {spaceBetween} $flexDir = {flexDir} $isAlign= {isAlign}>{children}</Filho>
    </Pai>
  </>;
}


