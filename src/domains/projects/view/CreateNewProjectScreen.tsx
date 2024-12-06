import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Row from "@/src/shared/components/atoms/Row";
import Radio from "@/src/shared/components/atoms/Radio";
import { styles } from "./components/styles";
import ProgressBar from "./components/molecles/ProgressBar";
import Step from "./components/molecles/Steps";
import OptionCard from "./components/molecles/cards/OptionsCard";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const CreateNewProjectScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <View style={{ alignItems: "center", marginBottom: height * 0.03 }}>
            <Text style={{ fontFamily: "SatoshiBold", fontSize: 16 }}>
              Create New Project
            </Text>
          </View>
          <ProgressBar />
          <Step step={6} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>How would you like to proceed?</Text>
          <Text style={styles.subtitle}>
            Choose your preferred design approach
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          <OptionCard
            iconNames={[
              "Instant Results",
              "Multiple Options",
              "Easy Customize",
            ]}
            title="AI Suggested Layout"
            description="Get instant layout suggestions"
            icons={["flash-outline", "cube-outline", "color-wand-outline"]}
            onPress={() => setSelectedOption("AI Suggested Layout")}
            selectedOption={selectedOption}
          />

          <OptionCard
            iconNames={[
              "Instant Results",
              "Multiple Options",
              "Easy Customize",
            ]}
            title="Manual CAD Design"
            description="Design your layout manually"
            icons={[
              "pencil-outline",
              "color-palette-outline",
              "layers-outline",
            ]}
            onPress={() => setSelectedOption("Manual CAD Design")}
            selectedOption={selectedOption}
          />
        </View>

        <View style={styles.infoContainer}>
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#6B7280"
          />
          <Text style={styles.infoText}>
            AI-Suggested Layouts: Quick results based on your preferences, but
            may need adjustments.{"\n\n"}
            Manual CAD Design: Complete control over every detail, but requires
            more time and effort.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateNewProjectScreen;
