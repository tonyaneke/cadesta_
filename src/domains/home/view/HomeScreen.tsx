import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import StatsCard from "../components/molecles/cards/StatsCard";
import { styles } from "@/src/shared/styles/styles";
import RecentActivity from "../components/molecles/cards/RecentActivityCard";
import Header from "../components/molecles/Header";
import HList from "../components/molecles/list/HList";
import Row from "@/src/shared/components/atoms/Row";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.statsRow}>
          <StatsCard title="Active Projects" count={12} color="#34C759" />
          <StatsCard title="In Design" count={7} color="#007AFF" />
        </View>
        <View style={styles.statsRow}>
          <StatsCard title="In Construction" count={5} color="#30B0C7" />
          <StatsCard title="Completed" count={0} color="#F0A500" />
        </View>
        <Text style={styles.sectionTitle}>Active Projects</Text>
        <HList />
        <Row marginHorizontal={10}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <TouchableOpacity>
            <Text style={styles.grayText}>View All</Text>
          </TouchableOpacity>
        </Row>
        <RecentActivity
          icon="checkmark-circle-outline"
          color="blue"
          activity="Design Approved - Modern Villa Project"
        />
        <RecentActivity
          icon="chatbox-outline"
          color="green"
          activity="New Comment - Office Complex Project"
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
