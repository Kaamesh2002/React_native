import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import HomeScreen1 from "./src/screens/HomeScreen1";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import CounterScreen1 from "./src/screens/CounterScreen1";
import ColourScreen from "./src/screens/ColourScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreen1 from "./src/screens/SquareScreen1";
import TextScreen from "./src/screens/TextScrenn";
import BoxScreen from "./src/screens/BoxScreen";
import BoxScreen1 from "./src/screens/BoxScreen1";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Home1: HomeScreen1,
    Component : ComponentScreen,
    List : ListScreen,
    Image : ImageScreen,
    Counter : CounterScreen,
    Counter1 : CounterScreen1,
    Colour : ColourScreen,
    Square : SquareScreen,
    Square1 : SquareScreen1,
    Text : TextScreen,
    Box : BoxScreen,
    Box1 : BoxScreen1,
  },
  {
    initialRouteName: "Home", 
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
