import { ChangeEventHandler, useEffect } from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import Icon from '../Icon';

interface ITextArea {
  id?: string;
  name?: string;
  value?: any;
  className?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  hookToForm: boolean;
  classNameError?: string;
  disabled?: boolean;
  rows?: number;
  containerClassName?: string;
}

function TextArea({
  id,
  name,
  value,
  placeholder,
  hookToForm,
  onChange,
  className,
  classNameError,
  rows = 1,
  containerClassName
}: ITextArea) {
  const formContext = useFormContext();
  const isFullyHooked = name && hookToForm && formContext;
  const formState = useFormState();

  const fieldError = isFullyHooked && formState?.errors?.[name];
  const isInvalid = fieldError && fieldError?.message;

  const isValid = isFullyHooked && formState?.isSubmitted && !fieldError?.message;

  useEffect(() => {
    if (name && hookToForm) {
      formContext.setValue(name, value);
    }
  }, [value, name, formContext, hookToForm]);

  return (
    <label {...(id && { htmlFor: id })}>
      <div
        className={`relative
          md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]
          p-[2px]
          ${containerClassName}`}
      >
        <textarea
          {...(id && { id: id })}
          value={value}
          placeholder={placeholder}
          className={`w-full h-full
            !outline-none !bg-transparent !ring-0
            md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]
            !text-[#8C8C8C] text-[14px]
            !border-0 p-[20px]
            focus:!border-0
                ${className ? className : ''} `}
          {...(!hookToForm && {
            value: value,
            onChange: onChange
          })}
          {...(isFullyHooked
            ? formContext.register(name, {
                onChange: (e) => onChange && onChange(e)
              })
            : {})}
          name={name}
          rows={rows}
        />
        <div
          className="absolute right-0 bottom-0
          h-full flex items-end
          pr-[20px] pb-[20px]"
        >
          {isValid && <Icon name="check" raw size={24} color="green" className="opacity-75" />}
          {isInvalid && <Icon name="XMarkIcon" raw size={24} color="red" className="opacity-75" />}
        </div>
      </div>
      {isInvalid && (
        <div
          className={`flex gap-x-[5px] items-center
        pl-[20px] pt-[10px] ${classNameError || ''}`}
        >
          <Icon name="XMarkIcon" raw size={24} color="red" className="opacity-75" />
          <p className="leading-[100%] pt-[4px]">{fieldError?.message as string}</p>
        </div>
      )}
    </label>
  );
}

TextArea.defaultProps = {
  hookToForm: false,
  type: 'text'
};

export default TextArea;
