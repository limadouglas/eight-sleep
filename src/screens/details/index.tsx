import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./styles";

import { ChartSleepStages, ChartTemperature, ChartSleepTnt } from "@components";
import { useUser } from "@services/api/hooks";
import { RootStackParamList } from "@routes/RootStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { formatDate, groupByExactHourAndSumValues } from "@utils";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const Details = ({ route }: Props) => {
  const { intervalId, id } = route.params;

  const { data } = useUser(id);

  const interval = data?.intervals.find(
    (interval) => interval.id === intervalId
  );

  useNavigation().setOptions({ title: formatDate(interval?.ts) });

  const tempRoomData = interval?.timeseries.tempBedC;
  const tempBedData = interval?.timeseries.tempRoomC;

  const tempRoomDataParsed = tempRoomData?.map((temp) => ({
    x: temp[0],
    y: temp[1],
  }));
  const tempBedDataParsed = tempBedData?.map((temp) => ({
    x: temp[0],
    y: temp[1],
  }));

  const sleepStageAwake = interval?.stages.reduce(
    (acc, stage) => (stage.stage === "awake" ? acc + stage.duration : acc),
    0
  );

  const sleepStageOut = interval?.stages.reduce(
    (acc, stage) => (stage.stage === "out" ? acc + stage.duration : acc),
    0
  );

  const sleepStageLight = interval?.stages.reduce(
    (acc, stage) => (stage.stage === "light" ? acc + stage.duration : acc),
    0
  );

  const sleepStageDeep = interval?.stages.reduce(
    (acc, stage) => (stage.stage === "deep" ? acc + stage.duration : acc),
    0
  );

  const sleepTnpParsed = groupByExactHourAndSumValues(
    interval?.timeseries?.tnt
  )?.map((temp) => ({
    x: temp[0],
    y: temp[1],
  }));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.chartsWrapper}>
          <ChartTemperature
            dataBed={tempBedDataParsed}
            dataRoom={tempRoomDataParsed}
          />
          <ChartSleepStages
            dataAwake={{ x: "awake", y: sleepStageAwake }}
            dataOut={{ x: "out", y: sleepStageOut }}
            dataLight={{ x: "light", y: sleepStageLight }}
            dataDeep={{ x: "deep", y: sleepStageDeep }}
          />
          <ChartSleepTnt data={sleepTnpParsed} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
