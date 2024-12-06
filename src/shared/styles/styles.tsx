import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    height: height * 0.09,
    backgroundColor: "white",
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "SatoshiBold",
    color: "#000",
  },
  notificationIcon: {
    color: "#6b7280",
  },
  statsRow: {
    flexDirection: "row",
  },
  statsCard: {
    flex: 1,
    padding: width * 0.04,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 8,
    height: height * 0.12,
    width: width * 0.4,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsTitle: {
    color: "#000",
    fontFamily: "Satoshi",
    fontWeight: "500",
    fontSize: 15,
  },
  statsCount: {
    fontSize: 27,
    fontFamily: "SatoshiBold",
  },
  projectCard: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
    width: width * 0.85,
  },
  projectTitle: {
    fontFamily: "SatoshiBold",
    fontWeight: "bold",
  },
  grayText: {
    color: "#6b7280",
    fontFamily: "Satoshi",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#8BAA9E",
  },
  activityCard: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: width * 0.9,
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "SatoshiBold",
    padding: 16,
  },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#3b82f6",
    borderRadius: 9999,
    padding: 16,
  },
  fabText: {
    color: "white",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerLabel: {
    fontSize: 14,
    fontFamily: "Satoshi",
    fontWeight: "500",
    color: "#6b7280",
  },
});
