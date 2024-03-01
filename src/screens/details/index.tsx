import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./styles";

import { ChartSleepStages, ChartTemperature, ChartSleepTnt } from "@components";
import { RootStackParamList } from "@routes/RootStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { formatDate, getIntervalById } from "@utils";
import { useUser, useUserSleepStages, useUserSleepTnT, useUserTempAxios } from "@hooks";


type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const Details = ({ route, navigation }: Props) => {
  const { id, intervalId } = route.params;

  const { data } = useUser(id);
  const interval = getIntervalById(data, intervalId);

  const { tempBed, tempRoom } = useUserTempAxios(interval);
  const { awake, out, light, deep } = useUserSleepStages(interval);
  const sleepTnT = useUserSleepTnT(interval);

  useEffect(() => {
    navigation.setOptions({ title: formatDate(interval?.ts ?? "") });
  }, [navigation]);

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
