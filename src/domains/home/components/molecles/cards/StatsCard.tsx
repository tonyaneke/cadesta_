import { styles } from "@/src/shared/styles/styles";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { View, Text } from "react-native";

interface StatsCardProps {
  title: string;
  count: number;
  color: string;
}

const StatsCard = ({ title, count, color }: StatsCardProps) => (
  <View style={styles.statsCard}>
    <View style={{ justifyContent: "space-between" }}>
      <Text style={styles.statsTitle}>{title}</Text>
      <Text style={styles.statsCount}>{count}</Text>
    </View>
    <Ionicons size={28} name="briefcase-outline" color={color} />
  </View>
);
export default StatsCard;
