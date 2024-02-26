import React, { useState } from "react";
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from "react-native-tab-view";

import { Header } from "@components";
import { Home } from "@screens";
import { USERS } from "@services";
import { styles } from "./styles";

const screensProps = USERS?.map((user) => ({ key: user.id, title: user.name }));
const sceneMapUsersObject = USERS?.reduce(
  (accObj, user) => ({ ...accObj, [user.id]: Home }),
  {}
);

const renderScreens = SceneMap(sceneMapUsersObject);

const TabViewStack = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(screensProps);

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: NavigationState<T> }
  ) => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicator}
      style={styles.tabBar}
    />
  );

  return (
    <>
      <Header />
      <TabView
        lazy
        sceneContainerStyle={styles.tabView}
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScreens}
        onIndexChange={setIndex}
        initialLayout={styles.initialLayout}
      />
    </>
  );
};

export default TabViewStack;
