import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { formatDate } from "@utils";
import { Icons } from "@assets";
import { IconsType } from "@assets/icons";
import { Colors } from "@theme";

export interface SummaryCardProps {
  id: string;
  date: string;
  score: number;
  respiratoryRate: number;
  heartRate: number;
  onPress: (id: string) => void;
  cardTestId?: string;
}

const renderItemCard = (
  iconName: IconsType,
  text: string,
  showSeparator = true
) => {
  const Icon = Icons[iconName];
  return (
    <View style={[styles.cardItem, showSeparator && styles.separator]}>
      <Icon fill={Colors.WHITE} height={30} width={30} />
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
  cardTestId,
}: SummaryCardProps) => {
  const handleCardPress = () => {
    onPress(id);
  };

  return (
    <TouchableOpacity
      testID={cardTestId}
      onPress={handleCardPress}
      style={styles.container}
    >
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

export default memo(SummaryCard);
