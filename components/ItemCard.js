import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Avatar, Card, IconButton, Title, Paragraph } from "react-native-paper";

export default function ItemCard({ icon, title, ...rest }) {
  return (
    <Card style={styles.card} {...rest}>
      <Card.Cover style={styles.cardCover} source={icon} resizeMode="contain" />
      <Card.Content style={styles.cardContent}>
        <Title>
          {title}
        </Title>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get("screen").height / 3 - 50,
    width: Dimensions.get("screen").width / 2 - 50,
    margin: 12.5,
    padding: 5
  },
  cardCover: {
    resizeMode: "stretch"
  },
  cardContent: {
    alignItems: "center"
  }
});
