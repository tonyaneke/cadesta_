import { View } from "react-native";
import { styles } from "../styles";

const ProgressBar = () => {
  return (
    <View style={styles.progressBar}>
      {Array.from({ length: 7 }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.progress,
            {
              width: `${100 / 7.5}%`,
              backgroundColor: index === 6 ? "#F0A500" : "#34C759",
            },
          ]}
        />
      ))}
    </View>
  );
};

export default ProgressBar;
