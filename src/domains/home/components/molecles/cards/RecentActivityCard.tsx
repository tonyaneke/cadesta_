import { styles } from "@/src/shared/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

interface RecentActivityProps {
  activity: string;
  color: string;
  icon: string;
}

const RecentActivity = ({ activity, color, icon }: RecentActivityProps) => (
  <View style={styles.activityCard}>
    <Ionicons name={icon as any} size={25} color={color} />
    <Text style={styles.grayText}>{activity}</Text>
  </View>
);

export default RecentActivity;
