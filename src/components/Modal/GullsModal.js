import { create } from "zustand";
import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { position, size } from "polished";
import Container from "./../Container";
// import { hover } from '../../styles/helpers';
import UnstyledButton from "../UnstyledButton";

/**
 * returns YouTube ID
 *
 * @param {string} url
 */
export const getYouTubeID = (url) => {
  if (!url) {
    return null;
  }

  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[7].length === 11 ? match[7] : false;
};

/**
 * useModal hook
 */
export const useModal = create((set) => ({
  modalOpen: false,
  modalData: null,
  toggleModal: (name = false, modalData = null) => {
    if (!name) {
      return set({
        modalOpen: false,
        modalData,
      });
    }

    return set((state) => ({
      modalOpen: state.modalOpen === name ? false : name,
      modalData,
    }));
  },
}));

const Close = styled(UnstyledButton)`
  ${size(44)}
  ${position("fixed", 20, 20, null, null)}
  background-color: var(--gold);
  font-size: 1.5rem;
  line-height: 44px;
  border-radius: 50%;
  transition: all 0.3s;
`;

/**
 * Modal component
 */
const GullsModal = ({
  className,
  appElement = "#__next",
  children,
  ...props
}) => {
  const { modalOpen, toggleModal } = useModal();

  Modal.setAppElement(appElement);

  return (
    <Modal
      isOpen={!!modalOpen}
      onRequestClose={() => {
        toggleModal();
      }}
      overlayClassName="Overlay"
      className="Modal"
      portalClassName={className}
      {...props}
    >
      <Close
        aria-label="close modal"
        onClick={() => {
          toggleModal();
        }}
      >
        &times;
      </Close>
      <Container>{children}</Container>
    </Modal>
  );
};

export default GullsModal;
