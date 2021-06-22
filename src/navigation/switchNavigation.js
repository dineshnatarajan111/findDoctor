import { createSwitchNavigator } from "@react-navigation/compat";
import { Splash, Signin, Signup, Switcher } from "../screens";
import MainNav from "./stackNavigation";

const SwitchNavigator= createSwitchNavigator(
{
  Splash: Splash,
  Signin : Signin,
  Signup : Signup,
  Switcher : Switcher,
  Home : MainNav,
},
{
  initialRouteName:'Splash',
  backBehavior : 'none'
}
);

export default SwitchNavigator;