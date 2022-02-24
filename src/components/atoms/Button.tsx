import { ButtonPropTypes, ButtonStyleType } from '../../types/custom/Button';

export default function Button<T>({
  children,
  styleType = 'fill',
  color = 'text-main',
  bgColor = 'bg-primary',
  full,
  icon,
  className = '',
  roundedLg = true,
  hoverStyle = 'underline',
  onClick,
  ...attrs
}: ButtonPropTypes<T>) {
  const buttonStyle: ButtonStyleType = {
    fill: ` ${!icon && 'min-w-minimum'}  ${bgColor} text-main`,
    outline: ` ${
      !icon && 'min-w-minimum'
    }  border border-solid ${bgColor} ${color}`,
    text: `${color} hover:${hoverStyle}`,
  };

  // determine padding based on the style type of button
  const padding = icon ? '' : full ? 'py-2' : 'py-2 px-4';

  return (
    <button
      {...attrs}
      onClick={onClick}
      className={`${buttonStyle[styleType]} ${
        roundedLg ? 'rounded-lg' : ''
      } font-semibold text-sm outline-none box-content
      ${full ? 'w-full' : ''}
      ${padding} ${className}
      disabled:opacity-50 disabled:cursor-wait`}
    >
      {children}
    </button>
  );
}
