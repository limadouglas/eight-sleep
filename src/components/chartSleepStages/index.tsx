import { secondsToHour } from "@utils";
import React from "react";
import { View } from "react-native";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from "victory-native";

import { Colors } from "@theme";
import { ChartTitle } from "@components";
import { styles } from "./styles";

interface Axios {
  x: number | string;
  y?: number;
}

interface ChartSleepStagesProps {
  dataAwake?: Axios;
  dataOut?: Axios;
  dataLight?: Axios;
  dataDeep?: Axios;
}

const ChartSleepStages = ({
  dataAwake,
  dataOut,
  dataLight,
  dataDeep,
}: ChartSleepStagesProps) => {
  return (
    <View style={styles.container}>
      <ChartTitle title={"Sleep Stages"} />

      <VictoryChart
        animate={{ duration: 500 }}
        height={250}
        // padding={{ top: 30, bottom: 30, left: 50, right: 60 }}
        domainPadding={{ x: 20, y: 50 }}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          dependentAxis
          fixLabelOverlap
          tickFormat={(t) => secondsToHour(t)}
          style={{
            axis: {
              stroke: Colors.BLACK,
            },
            grid: {
              stroke: "none",
            },
            ticks: {
              stroke: "none",
            },
            tickLabels: {
              fill: Colors.BLACK,
            },
          }}
        />
        <VictoryAxis
          style={{
            axis: {
              stroke: Colors.BLACK,
            },
            grid: {
              stroke: "none",
            },
            ticks: {
              stroke: "none",
            },
            tickLabels: {
              fill: Colors.BLACK,
            },
          }}
        />
        <VictoryBar
          alignment="start"
          x="Month"
          style={{ data: { fill: "green", width: 25 } }}
          data={[dataAwake, dataOut, dataLight, dataDeep]}
        />
      </VictoryChart>
    </View>
  );
};

export default ChartSleepStages;
