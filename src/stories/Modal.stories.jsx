import React from 'react';
import { Modal } from './Modal';
import { PopupExample } from './PopupExample';

export default {
  title: 'Example/Modal',
  component: Modal,
  parameters: {
    // 모달은 화면 전체를 덮는 오버레이가 있으므로 fullscreen 레이아웃 사용
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'onClose' },
    children: { control: 'text' },
  },
};

// 1. 기본 모달 (Controls 패널에서 isOpen을 껐다 켰다 하며 테스트 가능)
export const Default = {
  args: {
    isOpen: true,
    title: '기본 모달',
    children: 'Storybook에서 렌더링된 모달 내용입니다.',
  },
  decorators: [
    (Story) => (
      // Docs 페이지에서 fixed 포지션인 모달을 보여주기 위해 높이를 지정하고
      // transform을 사용하여 fixed의 기준을 이 div로 한정합니다.
      <div style={{ height: '300px', position: 'relative', transform: 'scale(1)' }}>
        <Story />
      </div>
    ),
  ],
};

// 2. 실제 작동 예시 (PopupExample 컴포넌트를 그대로 렌더링)
export const InteractionExample = {
  render: () => <PopupExample />,
  name: '버튼 클릭 예제',
};