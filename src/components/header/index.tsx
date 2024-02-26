import React from "react";
import { Image, View } from "react-native";
import { Images } from "@assets";
import { styles } from "./styles";

const Header = () => {
  return (
    <View
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={Images.logo}
      />
    </View>
  );
};

export default Header;
