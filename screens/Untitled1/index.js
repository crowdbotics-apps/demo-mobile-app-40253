import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const GettingStarted = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ImageBackground style={styles.DilvrmFk} source={{
      uri: "https://www.pepsi.com/en-us/uploads/images/can-pepsi.png?mtime=20180110134757"
    }} resizeMode="cover"></ImageBackground>
      <Pressable onPress={() => {
      navigation.navigate("productListing");
    }}>
        <View style={styles.JGHmklYS}>
          <Text style={styles.xKkbEuKO}>{"ORDER PEPSI"}</Text>
        </View>
      </Pressable>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#0164C3"
  },
  DilvrmFk: {
    width: 300,
    height: 635,
    transform: [{
      rotate: "0deg"
    }],
    top: -63,
    left: 25,
    position: "absolute",
    flexDirection: "row",
    flex: 1
  },
  JGHmklYS: {
    height: 62,
    width: 205,
    backgroundColor: "#0164C3",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 75.5,
    top: 455,
    borderColor: "#ffffff",
    borderWidth: 3
  },
  xKkbEuKO: {
    width: 173,
    height: 35,
    lineHeight: 14,
    fontSize: 25,
    borderRadius: 0,
    color: "#FFFFFF",
    position: "absolute",
    left: 10,
    top: 22,
    textAlign: "center"
  }
});
export default GettingStarted;