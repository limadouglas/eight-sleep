import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

interface ChartTitleProps {
  title: string;
}

const ChartTitle = ({ title }: ChartTitleProps) => {
  return <Text style={styles.text}>{title}</Text>;
};

export default ChartTitle;
