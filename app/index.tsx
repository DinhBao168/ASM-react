import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import Main from './mainScreen'
import Detail from './detailScreen'
import Register from './register'
import Home from './home'
import Favourite from './favourite'
import Setting from './setting';
import Admin from './AdminScreen';


const Stack = createNativeStackNavigator()
const Index = () => {
    
    return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name='Favourite' component={Favourite}/>
        <Stack.Screen name='Setting' component={Setting}/>
        <Stack.Screen name='Admin' component={Admin}/>
        
      </Stack.Navigator>
    
    )
   
};

export default Index;

