import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: windowHeight, // Utilisez la hauteur de l'écran
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },

  image: {
    width: windowWidth, // Utilisez la largeur de l'écran
    height: windowHeight, // Utilisez la hauteur de l'écran
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
