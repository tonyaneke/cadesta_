import { styles } from "@/src/shared/styles/styles";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ActiveProjectProps {
  title: string;
  progress: number;
  startDate: string;
  timeline: string;
  comments: string;
}

const ActiveProject = ({
  title,
  progress,
  startDate,
  timeline,
  comments,
}: ActiveProjectProps) => (
  <View style={styles.projectCard}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <View>
        <Text style={styles.projectTitle}>{title}</Text>
        <Text style={[styles.grayText, { fontSize: 14 }]}>
          Residential Building
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ color: "#F59E0B", marginRight: 8 }}>In Design</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>
    </View>

    <View style={{ marginVertical: 12 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <Text style={styles.grayText}>Overall Progress</Text>
        <Text style={{ fontFamily: "SatoshiBold" }}>{progress}%</Text>
      </View>
      <View style={{ height: 8, backgroundColor: "#E5E7EB", borderRadius: 4 }}>
        <View
          style={[
            styles.progressBar,
            { width: `${progress}%`, borderRadius: 4 },
          ]}
        />
      </View>
    </View>

    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          name="calendar-outline"
          size={20}
          color="#6B7280"
          style={{ marginRight: 4 }}
        />
        <Text style={styles.grayText}>{startDate}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          name="time-outline"
          size={20}
          color="#6B7280"
          style={{ marginRight: 4 }}
        />
        <Text style={styles.grayText}>{timeline}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          name="chatbubble-outline"
          size={20}
          color="#6B7280"
          style={{ marginRight: 4 }}
        />
        <Text style={styles.grayText}>{comments}</Text>
      </View>
    </View>
  </View>
);

export default ActiveProject;
