import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "../pages/ListScreen";
import EditNoteScreen from "../pages/EditNoteScreen";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#222",
      },
      headerTintColor: "#FFF",
    }}
  >
    <Stack.Screen name="List" component={ListScreen} />
    <Stack.Screen name="EditNote" component={EditNoteScreen} />
  </Stack.Navigator>
);
