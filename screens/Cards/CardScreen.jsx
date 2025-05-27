import React from "react";
import { Text, View } from "react-native";
import PlaceholderCard from "../../components/Cards/PlaceholderCard";
import { AntDesign } from "@expo/vector-icons";

export default function CardScreen() {
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <PlaceholderCard
        image={require("../../assets/images/placeholderCardImage.png")}
        onButtonPress={() => console.log("Button Pressed")}
      />
    </View>
  );
}
