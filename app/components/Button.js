import React from "react";
import PropTypes from "prop-types";
import { Button as NativeBaseButton, Text } from "native-base";

export default function Button({ label, onPress, disabled = false, ...props }) {
  return (
    <NativeBaseButton block onPress={onPress} disabled={disabled} {...props}>
      <Text>{label}</Text>
    </NativeBaseButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
