import { ImageBackground } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        
    <ImageBackground style={styles.DilvrmFk} source={{
      uri: "https://www.pepsi.com/en-us/uploads/images/twil-can.png"
    }} resizeMode="cover"></ImageBackground></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#024FA9"
  },
  DilvrmFk: {
    width: 107,
    height: 62,
    transform: [{
      rotate: "0deg"
    }],
    top: 0,
    left: 0
  }
});
export default Untitled1;