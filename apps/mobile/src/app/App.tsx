import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import {getHello} from "@nx-monorepo/shared";

export const App = () => {

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>{getHello()}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
