import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import getAllOwners from "../api/owners";
const OwnerListComponent = () => {
  const people = getAllOwners;

  const { container, property } = styles;

  const renderItem = ({ item }) => {
    const { firstName, lastName, telephone } = item;

    return (
      <View style={[container, { backgroundColor: "#9393d28c" }]}>
        <Text>
          <Text style={property}>Naam: </Text>
          {firstName} {lastName}
        </Text>
        <Text>
          <Text style={property}>Telefoon: </Text>
          {telephone}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Text>smeow</Text>
      <FlatList
        data={people}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  property: {
    fontWeight: "bold",
  },
});

export default OwnerListComponent;
