import { View, Text } from "react-native";

const Step = ({ step }: { step: number }) => (
  <View
    style={{ alignItems: "center", flexDirection: "row", gap: 4, marginTop: 5 }}
  >
    <Text style={{ fontStyle: "italic" }}>
      (<Text style={{ fontFamily: "SatoshiItalic", fontSize: 12 }}>Steps</Text>
      <Text
        style={{ fontFamily: "SatoshiItalic", fontSize: 16 }}
      >{`${step}/7`}</Text>
      )
    </Text>
  </View>
);

export default Step;
