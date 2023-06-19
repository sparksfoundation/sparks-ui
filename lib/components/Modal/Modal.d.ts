import React from "react";
export type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    heading: string;
    children: React.ReactNode;
};
export declare const Modal: ({ isOpen, closeModal, heading, children, }: ModalProps) => React.JSX.Element;
