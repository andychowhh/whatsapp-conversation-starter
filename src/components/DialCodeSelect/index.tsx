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

import { FormattedCountryCode } from 'types';

import { colorStyles } from './DialCodeSelectStyles';

interface DialCodeSelectProp {
  value: FormattedCountryCode;
  onChange: (
    newValue:
      | SingleValueType<FormattedCountryCode>
      | MultiValue<FormattedCountryCode>,
    actionMeta: ActionMeta<FormattedCountryCode>
  ) => void;
}

const { Option, SingleValue } = components;

const ExtensionLabel = ({ label, value, dialCode }: FormattedCountryCode) => {
  const CountryFlag = hasFlag(value)
    ? CountryFlags[value as keyof typeof CountryFlags]
    : () => <></>;

  return (
    <HStack data-cy={`select-option-${label}`}>
      <Box whiteSpace="nowrap">{label}</Box>
      <Box w="20px" h="20px" display="flex" alignItems="center">
        <CountryFlag />
      </Box>
      <Box>{`(+${dialCode})`}</Box>
    </HStack>
  );
};

const IconOption = (props: OptionProps<FormattedCountryCode>) => {
  return (
    <Option {...props}>
      <ExtensionLabel {...props.data} />
    </Option>
  );
};

const CustomSingleValue = (props: SingleValueProps<FormattedCountryCode>) => {
  return (
    <SingleValue {...props}>
      <ExtensionLabel {...props.data} />
    </SingleValue>
  );
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
      name="dialCode"
      inputId="dialCode"
    />
  );
}
