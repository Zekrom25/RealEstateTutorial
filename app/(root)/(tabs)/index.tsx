import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className= "font-bold text-lg my-10 font-rubik text-2xl"> Welcome to Restate</Text>

    </View>
  );
}
