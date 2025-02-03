import { createStackNavigator } from '@react-navigation/stack';
import { ScreenHome } from '../screens/ScreenHome';
import ScreenLogin from '../screens/ScreenLogin';
import ScreenRegistro from '../screens/ScreenRegistro';



const Stack = createStackNavigator();

export const StackNavigator=() => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ScreenHome} />
            <Stack.Screen name="Login" component={ScreenLogin} />
            <Stack.Screen name="Register" component={ScreenRegistro} />
        </Stack.Navigator>
    );
}

