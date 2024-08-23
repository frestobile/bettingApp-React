import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import Icon from '../Icon';

interface IInput {
  id?: string;
  name?: string;
  value?: any;
  className?: string;
  containerClassName?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  hookToForm: boolean;
  type: 'text' | 'password' | 'url' | 'number';
  classNameError?: string;
  disabled?: boolean;
  startIcon?: any;
  endIcon?: any;
  infoText?: string;
  label?: string;
  labelNormal?: string;
  labelFloating?: string;
  isBorder?: boolean;
}

function Input({
  id,
  name,
  value,
  type = 'text',
  placeholder,
  hookToForm,
  onChange,
  className,
  containerClassName,
  classNameError,
  disabled,
  startIcon = null,
  endIcon = null,
  infoText,
  label,
  labelNormal,
  labelFloating,
  isBorder
}: IInput) {
  const [isSecure, setIsSecure] = useState(true);
  const [isFocus, setIsFocus] = useState(false);
  const [canTrigger, setCanTrigger] = useState(false);
  const formContext = useFormContext();
  const formState = useFormState();
  const isFullyHooked = name && hookToForm && formContext;
  const ref = useRef(null);
  const containerRef = useRef(null);
  const fieldError = isFullyHooked && formState?.errors?.[name];
  const isInvalid = fieldError && fieldError?.message && formState?.isSubmitted;

  const isValid = isFullyHooked && !fieldError?.message && canTrigger;
  const handleBlur = () => {
    if (value === '' || value === undefined || value === null) {
      setIsFocus(false);
    }
  };
  useEffect(() => {
    if (name && hookToForm) {
      formContext.setValue(name, value);
      if (canTrigger) formContext.trigger(name, value);
    }
  }, [value, name, formContext, hookToForm]);

  const setLabelWidthStyleProperty = () => {
    if (ref.current) {
      const dims = ref.current.getBoundingClientRect();
      containerRef.current.style.setProperty('--label-active-width', `${dims.width}px`);
    } else {
      containerRef.current.style.setProperty('--label-active-width', 0);
    }
  };

  useEffect(() => {
    if (!isFocus && value) {
      setIsFocus(true);
    }
  }, [value]);

  useEffect(() => {
    if (isFocus || isInvalid) {
      setLabelWidthStyleProperty();
    }
  }, [isFocus, isInvalid]);

  return (
    <label {...(id && { htmlFor: id })}>
      <div
        ref={containerRef}
        className={`relative flex items-center
      ${containerClassName || ''} ${isBorder ? '' : 'border-none'}`}
      >
        <input
          {...(id && { id: id })}
          type={type === 'password' ? (isSecure ? 'password' : 'text') : type}
          value={value}
          placeholder={placeholder}
          className={`flex-grow h-full
          rounded-[4px] !bg-[transparent]
          ${className || ''}`}
          {...(!hookToForm && {
            value: value,
            onChange: onChange
          })}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlurCapture={handleBlur}
          {...(isFullyHooked
            ? formContext.register(name, {
                onChange: (e) => onChange && onChange(e)
              })
            : {})}
          name={name}
          disabled={disabled}
          onKeyDown={() => setCanTrigger(true)}
        />
        {label && labelFloating ? (
          <label
            ref={ref}
            className="floating reference"
            style={{ opacity: 0, pointerEvents: 'none', visibility: 'hidden', zIndex: -9999999999 }}
          >
            {label}
          </label>
        ) : null}
        {label && labelFloating ? (
          <div
            className={`custom-borders
          ${isFocus ? '_focused' : 'custom-border-none'}
          ${isValid ? '_focused' : ''}
          ${isInvalid ? '_invalid _focused' : ''}`}
          >
            <div className="custom-border custom-left" />
            <div className="custom-middle">
              <div className="custom-top-borders">
                <div className="custom-border custom-start" />
                <div className="custom-border custom-end" />
              </div>
              <div className="custom-border custom-bottom" />
            </div>
            <div className="custom-border custom-right" />
          </div>
        ) : (
          ''
        )}
        {label && labelFloating && labelNormal ? (
          <p className={`${isFocus || isInvalid ? labelFloating : labelNormal}`}>{label}</p>
        ) : (
          ''
        )}
        <div
          className="absolute left-0 h-full flex items-center
          pl-[20px]"
        >
          {startIcon}
        </div>
        <div
          className="absolute right-0
        h-full flex gap-x-[10px] items-center
        pr-[20px]"
        >
          {endIcon}
          {type === 'password' && (
            <button type="button" onClick={() => setIsSecure(!isSecure)}>
              {isSecure ? (
                <Icon name="eyeOff" raw size={18} color="white" className="opacity-[0.5]" />
              ) : (
                <Icon name="eye" raw size={18} color="white" className="opacity-[0.5]" />
              )}
            </button>
          )}
        </div>
      </div>
      {(isInvalid || infoText) && (
        <div
          className={`flex gap-x-[5px] text-red
        pl-[20px] pt-[10px] ${classNameError || ''}`}
        >
          <Icon name="exclamation" raw size={14} color="red" className="opacity-75" />
          <p className="leading-[100%] pt-[3px]">{(fieldError?.message as string) || infoText}</p>
        </div>
      )}
    </label>
  );
}

Input.defaultProps = {
  hookToForm: false,
  type: 'text',
  hasInfoText: false
};

export default Input;
