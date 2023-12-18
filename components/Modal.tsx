"use clinet";

import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div<ModalProps>`
  display: flex;
  width: 100%;
  max-width: 450px;
  max-height: 160px;
  height: 100%;
  padding: 32px;
  border-radius: 20px;
  outline: 1px solid #cccccc;
  background: white;
  z-index: 10000;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

const StyledModal = styled.div<ModalProps>`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100vh;
  z-index: 9999;
  top: 0;
  left: 0;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: all 0.2s ease-in-out;
`;

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: flex;
`;

interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <StyledModal isOpen={isOpen}>
      <ModalOverlay onClick={onClose} />
      <ModalContainer>{children}</ModalContainer>
    </StyledModal>
  );
}
