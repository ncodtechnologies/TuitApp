import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../components/auth/login";
import Register from "../components/auth/register";

const root = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

const App =  createAppContainer(root);

export default App;
