import React from "react";
import { View } from "react-native";

import { ChartTitle } from "@components";
import { formatHour } from "@utils";

import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
} from "victory-native";
import { styles } from "./styles";
import { Colors } from "@theme";
import { Axios } from "@types";

const legend = [
  {
    name: "Bed",
    symbol: { fill: "orange" },
  },
  {
    name: "Room",
    symbol: { fill: "green" },
  },
];

export interface ChartTemperatureProps {
  dataBed?: Axios[];
  dataRoom?: Axios[];
}

const ChartTemperature = ({ dataBed, dataRoom }: ChartTemperatureProps) => {
  return (
    <View style={styles.container}>
      <ChartTitle title={"Temperature"} />
      <VictoryChart
        animate={{ duration: 500 }}
        height={250}
        padding={{ top: 30, bottom: 30, left: 50, right: 60 }}
        theme={VictoryTheme.material}
      >
        <VictoryLegend
          x={125}
          y={5}
          data={legend}
          gutter={20}
          orientation="horizontal"
          style={{
            labels: {
              fill: Colors.WHITE,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          domain={{ y: [15, 40] }}
          tickFormat={(t) => `${t} °C`}
          style={{
            grid: {
              stroke: Colors.DARK_GREY,
            },
          }}
        />
        <VictoryAxis
          style={{
            grid: {
              stroke: Colors.DARK_GREY,
            },
          }}
          fixLabelOverlap
          tickFormat={(date: Date) => formatHour(date)}
        />
        <VictoryGroup data={dataBed} color="orange">
          <VictoryLine />
          <VictoryScatter size={6} symbol="circle" />
        </VictoryGroup>
        <VictoryGroup data={dataRoom} color="green">
          <VictoryLine />
          <VictoryScatter size={6} symbol="circle" />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
};

export default ChartTemperature;
