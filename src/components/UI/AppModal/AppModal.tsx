import React from "react";
import Modal from "react-modal";
import { AppButton } from "../AppButton/AppButton";
import { AppInput } from "../AppInput/AppInput";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface AppModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  onCommentInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddComment: () => void;
}

export const AppModal = ({
  modalIsOpen,
  closeModal,
  onCommentInputChange,
  onAddComment,
}: AppModalProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Добавление коментов"
    >
      <AppButton
        buttonText="Добавление коментов"
        isDisabled={false}
        onClick={closeModal}
      />
      <div>Добавление коментов</div>
      <form action="">
        <AppInput
          type="text"
          placeholderText="new comment"
          onChange={onCommentInputChange}
        />
        <AppButton
          buttonText="Добавление коментов"
          isDisabled={false}
          onClick={() => onAddComment}
        />
      </form>
    </Modal>
  );
};
