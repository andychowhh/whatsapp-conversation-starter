import React, { ChangeEvent } from 'react';
import { Select } from '@chakra-ui/react';

import { COUNTRY_CODE } from 'constants/';

interface DialCodeSelectProp {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export function DialCodeSelect({ value, onChange }: DialCodeSelectProp) {
  return (
    <Select
      bgColor="#EDF2F7"
      w="auto"
      onChange={onChange}
      value={value}
      data-testid="dial-code-select"
    >
      {COUNTRY_CODE.map((option) => (
        <option
          key={option.code}
          value={option.code}
          data-testid="dial-code-select-option"
        >
          {`${option.dial_code} (${option.code})`}
        </option>
      ))}
    </Select>
  );
}
