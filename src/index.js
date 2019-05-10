import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./view_posts_stack";
import Register from "./view_posts_stack";

const root = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
});

const App =  createAppContainer(root);

export default App;
