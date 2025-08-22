"use client"
import React, { useState } from 'react'
import Modal from './Modal';
import { AnimatePresence,motion } from 'framer-motion';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import { useModal } from './ModalContext';

const ModalWrapper = () => {
   const { modalType, closeModal, showLogin, showSignUp } = useModal();

  return (
      <Modal
        isOpen={!!modalType}
        onClose={closeModal}
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.1 }}>
            {modalType === "login" ?
              (<Login handleCloseModal={closeModal} onSignUpClick={showSignUp} />)
              : modalType === "signup" ?
              (<SignUp onLoginClick={showLogin} />)
              : null
              }
          </motion.div>
        </AnimatePresence>
      </Modal>  )
}

export default ModalWrapper
