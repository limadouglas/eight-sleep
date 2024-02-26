import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./styles";

import { ChartSleepStages, ChartTemperature, ChartSleepTnt } from "@components";
import { useUser } from "@services/api/hooks";
import { RootStackParamList } from "@routes/RootStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  formatDate,
  getIntervalById,
} from "@utils";
import { useNavigation } from "@react-navigation/native";
import {
  useUserSleepStages,
  useUserSleepTnT,
  useUserTempAxios,
} from "@services/api/hooks/useUser";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const Details = ({ route }: Props) => {
  const { id, intervalId } = route.params;

  const { data } = useUser(id);
  const interval = getIntervalById(data, intervalId);

  const { tempBed, tempRoom } = useUserTempAxios(interval);
  const { awake, out, light, deep } = useUserSleepStages(interval);
  const sleepTnT = useUserSleepTnT(interval);

  useNavigation().setOptions({ title: formatDate(interval?.ts ?? "") });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.chartsWrapper}>
          <ChartTemperature dataBed={tempBed} dataRoom={tempRoom} />
          <ChartSleepStages
            dataAwake={awake}
            dataOut={out}
            dataLight={light}
            dataDeep={deep}
          />
          <ChartSleepTnt data={sleepTnT} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
