import { Text } from "react-native";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        
    <ImageBackground style={styles.DilvrmFk} source={{
      uri: "https://www.pepsi.com/en-us/uploads/images/twil-can.png"
    }} resizeMode="cover"></ImageBackground><View style={styles.YmZMBGQl}><Text style={styles.dSckYkYa}>{"GET STARTED"}</Text></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#04479E"
  },
  DilvrmFk: {
    width: 356,
    height: 486,
    transform: [{
      rotate: "0deg"
    }],
    top: 0,
    left: 0
  },
  YmZMBGQl: {
    height: 86,
    width: 320,
    backgroundColor: "#04479E",
    borderRadius: 0,
    color: "#777777",
    position: "relative",
    left: 0,
    top: 0,
    transform: [{
      rotate: "0deg"
    }]
  },
  dSckYkYa: {
    width: 244,
    height: 50,
    lineHeight: 14,
    fontSize: 30,
    borderRadius: 0,
    fontFamily: "Open Sans",
    position: "absolute",
    top: 35,
    left: 56,
    textAlign: "center",
    fontWeight: "700",
    color: "#ffffff"
  }
});
export default Untitled1;