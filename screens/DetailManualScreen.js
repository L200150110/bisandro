import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Card, IconButton, Title, Paragraph } from "react-native-paper";

export default function DetailManualScreen({ route, navigation }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.contentContainer}>
          <Title style={styles.title}>
            {data.title}
          </Title>
          <View style={styles.separator} />
          <Text style={styles.text}>
            {data.body}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  card: {
    margin: 20,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowOffset: { height: 2, width: 3 },
    elevation: 5,
    height: 500
  },
  contentContainer: {
    alignItems: "center"
  },
  text: {
    fontSize: 16
  },
  separator: {
    height: 10
  },
  title: {
    fontSize: 24
  }
});
