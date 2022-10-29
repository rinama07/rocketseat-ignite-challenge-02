import { Minus, Plus } from 'phosphor-react';
import { ChangeEvent } from 'react';

import { ControlButton, FieldContainer, FieldInput } from './styles';

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
  const minValue = 1;

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>): void {
    onChangeValue(parseInt(event.target.value));
  }

  function increateAddCartAmount(): void {
    if (value < maxValue) {
      onChangeValue(value + 1);
    }
  }

  function decreateAddCartAmount(): void {
    if (value > minValue) {
      onChangeValue(value - 1);
    }
  }

  const isDecrementButtonDisabled = value <= minValue;
  const isIncrementButtonDisabled = value >= maxValue;

  return (
    <FieldContainer>
      <ControlButton
        type="button"
        onClick={decreateAddCartAmount}
        disabled={isDecrementButtonDisabled}
      >
        <Minus size={14} weight="bold" />
      </ControlButton>

      <FieldInput
        id={id}
        max={maxValue}
        min={minValue}
        onChange={handleChangeInput}
        type="number"
        value={value}
      />

      <ControlButton
        type="button"
        onClick={increateAddCartAmount}
        disabled={isIncrementButtonDisabled}
      >
        <Plus size={14} weight="bold" />
      </ControlButton>
    </FieldContainer>
  );
}
