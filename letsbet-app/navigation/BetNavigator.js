import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import WetteFormScreen from '../screens/WetteFormScreen';
import WetteInfosScreen from '../screens/WetteInfosScreen';
import WetteScreen from '../screens/WetteScreen';

export default createSwitchNavigator({
    WetteForm: WetteFormScreen,
    WetteInfos: WetteInfosScreen,
    Wette: WetteScreen,
},
    {
        initialRouteName: "Wette"
    });

