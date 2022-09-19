import React from 'react';
import Select, {
  components,
  ActionMeta,
  MultiValue,
  OptionProps,
  SingleValue as SingleValueType,
  SingleValueProps
} from 'react-select';
import { Box, HStack } from '@chakra-ui/react';
import CountryFlags from 'country-flag-icons/react/3x2';
import { hasFlag } from 'country-flag-icons';

import { FORMATTED_COUNTRY_CODES } from 'constants/';

import { ReactSelectOption } from 'types';

const colorStyles = {
  control: () => ({
    minWidth: '110px'
  }),
  menu: () => ({
    width: 'auto'
  })
};

interface DialCodeSelectProp {
  value: ReactSelectOption;
  onChange: (
    newValue:
      | SingleValueType<ReactSelectOption>
      | MultiValue<ReactSelectOption>,
    actionMeta: ActionMeta<ReactSelectOption>
  ) => void;
}

const { Option, SingleValue } = components;

const IconOption = (props: OptionProps<ReactSelectOption>) => {
  const { label, value, dialCode } = props.data;
  const CountryFlag = hasFlag(value)
    ? CountryFlags[value as keyof typeof CountryFlags]
    : () => <></>;

  return (
    <Option {...props}>
      <HStack>
        <Box whiteSpace="nowrap">{label}</Box>
        <Box w="20px" h="20px" display="flex" alignItems="center">
          <CountryFlag />
        </Box>
        <Box>{`(+${dialCode})`}</Box>
      </HStack>
    </Option>
  );
};

const CustomSingleValue = (props: SingleValueProps<ReactSelectOption>) => {
  const { dialCode } = props.data;
  return <SingleValue {...props}>{`+${dialCode}`}</SingleValue>;
};

export function DialCodeSelect({ value, onChange }: DialCodeSelectProp) {
  return (
    <Select
      options={FORMATTED_COUNTRY_CODES}
      value={value}
      isSearchable={false}
      components={{ Option: IconOption, SingleValue: CustomSingleValue }}
      onChange={onChange}
      styles={colorStyles}
      data-testid="dial-code-select"
    />
  );
}
