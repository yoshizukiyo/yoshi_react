import React, { useState } from 'react';
import { Button } from './Button';
import { Modal } from './Modal';

export const PopupExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>팝업 테스트</h1>
      <Button
        primary
        label="팝업 열기"
        onClick={() => setIsModalOpen(true)}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="안내"
      >
        <p>이것은 alert 대신 띄우는 커스텀 팝업입니다.</p>
      </Modal>
    </div>
  );
};
