import { secondsToHour } from "@utils";
import React from "react";
import { View } from "react-native";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from "victory-native";

import { ChartTitle } from "@components";
import { styles } from "./styles";
import { Colors } from "@theme";
import { Axios } from "@types";

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
        padding={{ top: 30, bottom: 30, left: 50, right: 60 }}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          dependentAxis
          fixLabelOverlap
          tickFormat={(t) => secondsToHour(t)}
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
        />
        <VictoryBar
          alignment="middle"
          style={{ data: { fill: "green", width: 25 } }}
          data={[dataAwake, dataOut, dataLight, dataDeep]}
        />
      </VictoryChart>
    </View>
  );
};

export default ChartSleepStages;
