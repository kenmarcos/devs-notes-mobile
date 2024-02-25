import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const ListScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>ListScreen</Text>
      <Button
        title="Add Note"
        onPress={() => navigation.navigate("EditNote")}
      />
    </View>
  );
};

export default ListScreen;
