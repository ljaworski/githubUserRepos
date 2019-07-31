import React from "react";
import PropTypes from "prop-types";
import { Item, Input as NativeBaseInput } from "native-base";

export default function Input({ onChange, placeholder, value, ...props }) {
  return (
    <Item regular>
      <NativeBaseInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        {...props}
      />
    </Item>
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};
