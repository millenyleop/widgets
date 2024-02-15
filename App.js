import React from 'react';
import { View } from 'react-native';
import SimpleWidget from './SimpleWidget';

import Meio from './Meio';
import Folder from './Folder';



function App() {
    return (
        <View style={{ flex: 1 }}>
            <SimpleWidget />
            <Meio>

            </Meio>
            <Folder >

            </Folder>
        </View>
    );
}
export default App;