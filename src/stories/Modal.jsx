import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import styles from './modal.module.scss';

export const Modal = ({ isOpen, onClose, title, children, contentProps, ...rest }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} {...rest}>
      <div className={styles.modalContent} {...contentProps}>
        <div className={styles.modalHeader} {...rest}>
          <h3>{title}</h3>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
        <div className={styles.modalFooter}>
          <Button label="닫기" onClick={onClose} size="small" variant={'success'} />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  contentProps: PropTypes.object,
};