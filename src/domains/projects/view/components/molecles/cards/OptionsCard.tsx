import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Row from "@/src/shared/components/atoms/Row";
import Radio from "@/src/shared/components/atoms/Radio";
import { Ionicons } from "@expo/vector-icons";

interface OptionCardProps {
  title: string;
  description: string;
  icons: string[];
  iconNames: string[];
  onPress?: () => void;
  selectedOption?: string | null;
}

const OptionCard = ({
  title,
  description,
  icons,
  iconNames,
  onPress,
  selectedOption,
}: OptionCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Row>
          <View>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardSubtitle}>{description}</Text>
          </View>
          <Radio
            selected={selectedOption === title}
            onSelect={onPress || (() => {})}
            size={24}
            color="gray"
            disabled={false}
            style={{ margin: 10 }}
          />
        </Row>
        <View style={styles.iconRow}>
          {icons.map((icon: string, index: number) => (
            <View key={index} style={{ alignItems: "center" }}>
              <View style={styles.iconBox}>
                <Ionicons name={icon as any} size={24} color="#8BAA9E" />
              </View>
              <Text
                style={{
                  fontFamily: "SatoshiRegular",
                  fontSize: 12,
                  marginTop: 5,
                }}
              >
                {iconNames[index]}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.previewButton} onPress={onPress}>
        <Text style={styles.previewButtonText}>Preview Sample</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionCard;
