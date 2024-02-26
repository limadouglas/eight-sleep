import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { formatDate } from "@utils";
import { Icons } from "@assets";
import { IconsType } from "@assets/icons";

interface SummaryCard {
  id: string;
  date: string;
  score: number;
  respiratoryRate: number;
  heartRate: number;
  onPress: (id: string) => void;
}

const renderItemCard = (
  iconName: IconsType,
  text: string,
  showSeparator = true
) => {
  const Icon = Icons[iconName];
  return (
    <View style={[styles.cardItem, showSeparator && styles.separator]}>
      <Icon fill={"white"} height={30} width={30} />
      <Text style={styles.cardItemText}>{text}</Text>
    </View>
  );
};

const SummaryCard = ({
  id,
  date,
  score,
  respiratoryRate,
  heartRate,
  onPress,
}: SummaryCard) => {
  const handleCardPress = () => {
    onPress(id);
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View>
        <Text style={styles.dateText}>{formatDate(date)}</Text>
      </View>
      <View style={styles.itemsWrapper}>
        {renderItemCard("score", `${score}/100`)}
        {renderItemCard("heartRate", `${heartRate} bpm`)}
        {renderItemCard("respiratoryRate", `${respiratoryRate} brpm`, false)}
      </View>
    </TouchableOpacity>
  );
};

export default SummaryCard;
