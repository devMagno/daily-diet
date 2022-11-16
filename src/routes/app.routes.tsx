import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "../screens/Home"
import { Stats } from "../screens/Stats"
import { NewMeal } from "../screens/NewMeal"
import { Confirmation } from "../screens/Confirmation"
import { Meal } from "../screens/Meal"
import { EditMeal } from "../screens/EditMeal"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="stats" component={Stats} />
      <Screen name="new" component={NewMeal} />
      <Screen name="confirmation" component={Confirmation} />
      <Screen name="meal" component={Meal} />
      <Screen name="edit" component={EditMeal} />
    </Navigator>
  )
}
