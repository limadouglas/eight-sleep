import React, { useCallback, useEffect } from "react";
import { Alert, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useUser } from "@services/api/hooks";
import { Interval } from "@services/api/user/types";
import { SummaryCard, LoadingIndicator } from "@components";
import { getRateFromArray } from "@utils";
import { RootStackParamList, StackNavigation } from "@routes/RootStack";

import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ route }: Props) => {
  const userId = route.key;

  const { navigate } = useNavigation<StackNavigation>();
  const { data, isLoading, error, refetch } = useUser(userId);

  const handleCardPress = useCallback(
    (intervalId: string) => {
      navigate("Details", { intervalId, id: userId });
    },
    [navigate]
  );

  useEffect(() => {
    if (error) {
      Alert.alert("Sorry", "Error on fetch data", [
        { text: "Retry", onPress: () => refetch() },
      ]);
    }
  }, [error]);

  const renderCard = ({ score, ts, timeseries, id }: Interval) => {
    const heartRate = getRateFromArray(timeseries.heartRate);
    const respiratoryRate = getRateFromArray(timeseries.respiratoryRate);
    return (
      <SummaryCard
        onPress={handleCardPress}
        id={id}
        score={score}
        date={ts}
        heartRate={heartRate}
        respiratoryRate={respiratoryRate}
      />
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={data?.intervals}
          renderItem={({ item }) => renderCard(item)}
          ItemSeparatorComponent={renderSeparator}
        />
      )}
    </View>
  );
};

export default Home;
