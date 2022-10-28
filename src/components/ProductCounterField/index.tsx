import { Minus, Plus } from 'phosphor-react';
import { ChangeEvent } from 'react';

import { FieldContainer, FieldInput } from './styles';

interface ProductCounterFieldProps {
  id: string;
  maxValue: number;
  onChangeValue: (value: number) => void;
  value: number;
}

export function ProductCounterField({
  id,
  maxValue,
  onChangeValue,
  value,
}: ProductCounterFieldProps) {
  function handleChangeInput(event: ChangeEvent<HTMLInputElement>): void {
    onChangeValue(parseInt(event.target.value));
  }

  function increateAddCartAmount(): void {
    if (value < maxValue) {
      onChangeValue(value + 1);
    }
  }

  function decreateAddCartAmount(): void {
    if (value > 0) {
      onChangeValue(value - 1);
    }
  }

  return (
    <FieldContainer>
      <Minus size={14} onClick={decreateAddCartAmount} />

      <FieldInput
        id={id}
        max={maxValue}
        min={1}
        onChange={handleChangeInput}
        type="number"
        value={value}
      />

      <Plus size={14} onClick={increateAddCartAmount} />
    </FieldContainer>
  );
}
