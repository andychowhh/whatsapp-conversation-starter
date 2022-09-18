import React from 'react';
import Select, {
  components,
  ActionMeta,
  CSSObjectWithLabel,
  SingleValue as SingleValueType,
  OptionProps
} from 'react-select';
import { Box, HStack } from '@chakra-ui/react';
import CountryFlags from 'country-flag-icons/react/3x2';

import { COUNTRY_CODE } from 'constants/';

import { ReactSelectOption } from 'types';

const colorStyles = {
  control: (styles: CSSObjectWithLabel) => ({
    ...styles,
    minWidth: '110px'
  }),
  menu: (styles: CSSObjectWithLabel) => ({
    ...styles,
    width: 'auto'
  }),
  option: (styles: CSSObjectWithLabel) => {
    return {
      ...styles
    };
  }
};

interface DialCodeSelectProp {
  value: ReactSelectOption;
  onChange: (
    newValue: SingleValueType<ReactSelectOption>,
    actionMeta: ActionMeta<ReactSelectOption>
  ) => void;
}

const { Option, SingleValue } = components;

interface IconOptionData extends ReactSelectOption {
  icon: string;
  dialCode: string;
}
interface IconOptionProp extends Partial<OptionProps> {
  data: IconOptionData;
}

const IconOption = (props: any) => {
  const { label, value, icon, dialCode } = props.data;
  // const countryFlag = CountryFlags[value];
  return (
    <Option {...props}>
      <HStack>
        <Box whiteSpace="nowrap">{label}</Box>
        <Box w="20px" h="20px" display="flex" alignItems="center">
          {icon}
        </Box>
        <Box>{`(+${dialCode})`}</Box>
      </HStack>
    </Option>
  );
};

const CustomSingleValue = (props: any) => {
  const { dialCode } = props.data;
  return <SingleValue {...props}>{`+${dialCode}`}</SingleValue>;
};

export function DialCodeSelect({ value, onChange }: DialCodeSelectProp) {
  const dialCodeOptions = COUNTRY_CODE.map((countryCode) => {
    return {
      label: countryCode.name,
      value: countryCode.code,
      icon: countryCode.icon,
      dialCode: countryCode.dial_code
    };
  }).sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;

    return 0;
  });

  return (
    <Select
      options={dialCodeOptions}
      value={value}
      components={{ Option: IconOption, SingleValue: CustomSingleValue }}
      onChange={onChange}
      styles={colorStyles}
      menuIsOpen={true}
      data-testid="dial-code-select"
    />
  );
}
