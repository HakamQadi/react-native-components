import HomeScreen from "../screens/Home/HomeScreen";
import CardScreen from "../screens/Cards/CardScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
// export default function RootNavigator() {
//   const Stack = createStackNavigator();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Cards" component={CardScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import { createDrawerNavigator } from "@react-navigation/drawer";
import { ROUTES_LIST } from "./RoutesList";
export default function RootNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={ROUTES_LIST.HOME}>
        <Drawer.Screen
          name={ROUTES_LIST.HOME}
          component={HomeScreen}
          options={() => ({
            headerTitleAlign: "center",
            title: "Home",
          })}
        />
        <Drawer.Screen
          name={ROUTES_LIST.CARDS}
          component={CardScreen}
          options={() => ({
            headerTitleAlign: "center",
            title: "Cards",
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
