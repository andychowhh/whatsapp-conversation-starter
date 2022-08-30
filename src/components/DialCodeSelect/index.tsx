import React, { ChangeEvent } from "react";
import { Select } from "@chakra-ui/react";

import { CountryCode } from "types/types";

interface DialCodeSelectProp {
  value: string;
  options: CountryCode[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function DialCodeSelect({ value, options, onChange }: DialCodeSelectProp) {
  return (
    <Select bgColor="#EDF2F7" w="auto" onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={option.code} value={option.code}>
          {`${option.dial_code} (${option.code})`}
        </option>
      ))}
    </Select>
  );
}

export default DialCodeSelect;
