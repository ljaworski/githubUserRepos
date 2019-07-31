import React from "react";
import PropTypes from "prop-types";
import { Text } from "native-base";

export default function HeaderTitle({ title }) {
  return <Text style={{ color: "#fff" }}>{title}</Text>;
}

HeaderTitle.propTypes = {
  title: PropTypes.string
};
