"use client"
import React, { createContext, useContext, useState } from "react";

type ModalType = null | "login" | "signup";

interface ModalContextProps {
  modalType: ModalType;
  showLogin: () => void;
  showSignUp: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
};

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalType, setModalType] = useState<ModalType>(null);

  const showLogin = () => setModalType("login");
  const showSignUp = () => setModalType("signup");
  const closeModal = () => setModalType(null);

  return (
    <ModalContext.Provider value={{ modalType, showLogin, showSignUp, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};