import { styles } from "@/src/shared/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image } from "react-native";
const Header = () => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <Image
        source={require("@/assets/images/avatar.png")}
        style={{ width: 50, height: 50 }}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.headerTitle}>Welcome,</Text>
        <Text style={styles.headerLabel}>John Abayomi</Text>
      </View>
    </View>
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: "red",
          borderRadius: 7,
          width: 14,
          height: 14,
          position: "absolute",
          top: 0,
          right: 2,
          zIndex: 100,
        }}
      />
      <Ionicons size={32} name="notifications-outline" color="#000" />
    </TouchableOpacity>
  </View>
);

export default Header;
