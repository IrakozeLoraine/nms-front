import { ButtonPropTypes, ButtonStyleType } from '../../types/custom/Button';

export default function Button<T>({
  children,
  styleType = 'fill',
  color = 'main',
  bgColor = 'primary',
  full,
  icon,
  className = '',
  hoverStyle = 'underline',
  onClick,
  ...attrs
}: ButtonPropTypes<T>) {
  const buttonStyle: ButtonStyleType = {
    fill: ` ${
      !icon && 'min-w-minimum'
    }   border-2 border-solid border-${bgColor} bg-${bgColor} text-main`,
    outline: ` ${
      !icon && 'min-w-minimum'
    }  border-2 border-solid border-${bgColor} text-${color}`,
    text: `text-${color} hover:${hoverStyle}`,
  };

  // determine padding based on the style type of button
  const padding = icon ? '' : full ? 'py-3' : 'py-3 px-8';

  return (
    <button
      {...attrs}
      onClick={onClick}
      className={`${
        buttonStyle[styleType]
      } rounded-lg font-semibold text-sm outline-none box-content
      ${full ? 'w-full' : ''}
      ${padding} ${className}
      disabled:opacity-50 disabled:cursor-wait`}
    >
      {children}
    </button>
  );
}
