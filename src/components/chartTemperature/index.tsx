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

const legend = [
  {
    name: "bed",
    symbol: { fill: "orange" },
  },
  {
    name: "room",
    symbol: { fill: "green" },
  },
];

interface Axios {
  x: number;
  y: number;
}

interface ChartTemperatureProps {
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
              fill: Colors.BLACK,
              fillOpacity: 0.8,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          domain={{ y: [15, 40] }}
          tickFormat={(t) => `${t} °C`}
          style={{
            axis: {
              stroke: "#000",
            },
            grid: {
              stroke: "none",
            },
            ticks: {
              stroke: "none",
            },
            tickLabels: {
              fill: "#000",
            },
          }}
        />
        <VictoryAxis
          fixLabelOverlap
          style={{
            axis: {
              stroke: "#000",
            },
            grid: {
              stroke: "none",
            },
            ticks: {
              stroke: "none",
            },
            tickLabels: {
              fill: "#000",
            },
          }}
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
