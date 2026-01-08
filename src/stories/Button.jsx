import PropTypes from 'prop-types';

import styles from './button.module.scss';

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary', // primary(bool) 대신 variant(string) 사용, 기본값은 'primary'
  backgroundColor = null,
  size = 'medium',
  label,
  onClick,
  ...props
}) => {
  // variant 값(primary, secondary, success, warning, danger 등)을 클래스명에 바로 조합
  const mode = `storybook-button--${variant}`;

  return (
    <button
      type="button"
      className={[styles['storybook-button'], styles[`storybook-button--${size}`], styles[mode]].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  // 5가지 타입 중 하나만 선택 가능하도록 제한
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
