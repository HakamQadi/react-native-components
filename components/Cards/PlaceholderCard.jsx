import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const PlaceholderCard = ({
  content = "Add your content here",
  buttonText = "Button text",
  buttonIcon = <AntDesign name="arrowright" size={20} color="white" />,
  image,
  onButtonPress,

  cardContainerStyle,
  leftColumnStyle,
  rightColumnStyle,
  imageStyle,
  textStyle,
  buttonStyle,
  buttonTextStyle,
}) => {
  const hasImage = !!image;

  return (
    <View style={[styles.cardContainer, cardContainerStyle]}>
      {/* Left Column */}
      <View
        style={[
          styles.leftColumn,
          { flex: hasImage ? 0.5 : 1 },
          leftColumnStyle,
        ]}
      >
        <View style={styles.textContainer}>
          {content && <Text style={[styles.text, textStyle]}>{content}</Text>}
        </View>
        {buttonText && (
          <TouchableOpacity
            onPress={onButtonPress}
            style={[styles.button, buttonStyle]}
          >
            {buttonText && (
              <Text style={[styles.buttonText, buttonTextStyle]}>
                {buttonText}
              </Text>
            )}
            {buttonIcon && buttonIcon}
          </TouchableOpacity>
        )}
      </View>

      {/* Right Column */}
      {hasImage && (
        <View style={[styles.rightColumn, rightColumnStyle]}>
          <Image style={[styles.image, imageStyle]} source={image} />
        </View>
      )}
    </View>
  );
};

export default PlaceholderCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#d4d4d4",
    height: 150,
    padding: 10,
    flexDirection: "row",
    columnGap: 10,
    borderRadius: 12,
  },
  leftColumn: {
    gap: 10,
    flexDirection: "column",
  },
  rightColumn: {
    flex: 0.5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 0.7,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    backgroundColor: "blue",
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    flexDirection: "row",
    gap: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
