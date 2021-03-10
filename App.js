import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store";
import Container from "./src/Container";
import "react-native-gesture-handler";
import { SafeAreaView } from 'react-native';

const App = () => {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView>
            <Container />
          </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;