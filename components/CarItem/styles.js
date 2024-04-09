import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: windowHeight,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
    color: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    color: "white",
    fontFamily: "Display",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    backgroundColor: "#171A20CC",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    fontFamily: "Antic",
  },

  image: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: "cover",
    position: "absolute",
  },

  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
