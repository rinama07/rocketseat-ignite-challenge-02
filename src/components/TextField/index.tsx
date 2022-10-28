import { InputHTMLAttributes } from 'react';

import { TextFieldContainer } from './styles';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  adornmentText?: string;
}

export function TextField({ adornmentText, ...props }: TextFieldProps) {
  return (
    <TextFieldContainer width={props.width}>
      <input type="text" {...props} />

      {adornmentText && <span>{adornmentText}</span>}
    </TextFieldContainer>
  );
}
