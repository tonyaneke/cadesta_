import { FlatList } from "react-native";
import ActiveProject from "../../molecles/cards/ActiveProjectsCard";

const HList = () => {
  const data = Array(10).fill({
    title: "Modern Villa Project",
    progress: 60,
    startDate: "Jan 15, 2024",
    timeline: "4 Months",
    comments: "2 New",
  });

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{ gap: 16 }}
      renderItem={({ item }) => (
        <ActiveProject
          title={item.title}
          progress={item.progress}
          startDate={item.startDate}
          timeline={item.timeline}
          comments={item.comments}
        />
      )}
    />
  );
};

export default HList;
