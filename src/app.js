import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const App = () => {
    return (
        <Provider>
            <View />
        </Provider>
    );
};

export default App;