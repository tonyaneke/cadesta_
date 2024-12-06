import React, { useEffect } from "react";
import { TouchableOpacity, View, StyleSheet, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface RadioProps {
  selected: boolean;
  onSelect: () => void;
  size?: number;
  color?: string;
  style?: ViewStyle;
  disabled?: boolean;
}

const Radio = ({
  selected,
  onSelect,
  size = 24,
  color = "gray",
  style,
  disabled = false,
}: RadioProps) => {
  const scale = useSharedValue(1);
  const innerScale = useSharedValue(0);

  useEffect(() => {
    innerScale.value = withSpring(selected ? 1 : 0, {
      damping: 15,
      stiffness: 180,
    });
  }, [selected]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const innerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: innerScale.value }],
    opacity: withTiming(selected ? 1 : 0, { duration: 150 }),
  }));

  const handlePress = () => {
    if (!disabled) {
      scale.value = withSpring(0.85, {}, () => {
        scale.value = withSpring(1);
      });
      onSelect();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      style={[style, { opacity: disabled ? 0.5 : 1 }]}
    >
      <Animated.View
        style={[
          styles.radio,
          animatedStyle,
          {
            width: size,
            height: size,
            borderColor: color,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.innerCircle,
            innerAnimatedStyle,
            {
              width: size * 0.6,
              height: size * 0.6,
              backgroundColor: color,
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radio: {
    borderWidth: 1,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    borderRadius: 999,
  },
});

export default Radio;
