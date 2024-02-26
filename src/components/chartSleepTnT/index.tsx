import React from "react";
import { View } from "react-native";
import { formatHour } from "@utils";
import { ChartTitle } from "@components";

import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
} from "victory-native";
import { styles } from "./styles";
import { Colors } from "@theme";
import { Axios } from "@types";


interface ChartSleepTnTProps {
  data?: Axios[];
}

const ChartSleepTnT = ({ data }: ChartSleepTnTProps) => {
  return (
    <View style={styles.container}>
      <ChartTitle title={"Toss and Turns"} />
      <VictoryChart
        animate={{ duration: 500 }}
        height={250}
        padding={{ top: 30, bottom: 30, left: 50, right: 60 }}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          fixLabelOverlap
          dependentAxis
          tickValues={data?.map((item) => item.y) ?? [1]}
          style={{
            grid: {
              stroke: Colors.DARK_GREY,
            },
          }}
        />
        <VictoryAxis
          fixLabelOverlap
          tickFormat={(t) => formatHour(t)}
          style={{
            grid: {
              stroke: Colors.DARK_GREY,
            },
          }}
        />

        <VictoryGroup data={data} color="green">
          <VictoryLine />
          <VictoryScatter size={6} symbol="circle" />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
};

export default ChartSleepTnT;
