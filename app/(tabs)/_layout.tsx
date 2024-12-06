import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import React from "react";
import { Platform, View, StyleSheet, TouchableOpacity } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: "white",
            height: 80,
            borderTopWidth: 0,
            paddingTop: 0,
          },
          default: {
            backgroundColor: "white",
            height: 80,
            borderTopWidth: 0,
            paddingTop: 0,
          },
        }),
        tabBarActiveTintColor: "#8BAA9E",
        tabBarInactiveTintColor: "#97A1AE",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="briefcase-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          tabBarLabel: () => null,
          title: "Add",
          tabBarIcon: () => (
            <View style={styles.middleTab}>
              <TouchableOpacity
                style={styles.innerButton}
                onPress={() => router.push("/projects/create-project")}
              >
                <Ionicons size={32} name="add" color="white" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="chatbox-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="merchants"
        options={{
          title: "Merchants",
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="people-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  middleTab: {
    position: "absolute",
    bottom: 0,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderEndEndRadius: 20,
  },
  innerButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F0A500",
    justifyContent: "center",
    alignItems: "center",
  },
});
