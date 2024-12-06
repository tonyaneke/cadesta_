import { View } from "react-native";

const Row = ({
  children,
  marginHorizontal,
}: {
  children: React.ReactNode;
  marginHorizontal?: number;
}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: marginHorizontal ? marginHorizontal : 0,
    }}
  >
    {children}
  </View>
);

export default Row;
