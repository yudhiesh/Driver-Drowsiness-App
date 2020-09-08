import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  screenContainerHome: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingHorizontal: 100
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    textTransform: "uppercase",
    padding: 20,
    position: "absolute",
    top: 5,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
    position: "absolute",
    bottom: 20,
  },
  appButtonText2: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    textTransform: "uppercase",
    padding: 20,
    position: "absolute",
    top: 100
  },
  modelButtonContainer: {
    margin: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
    position: "absolute",
    bottom: 20,
  }

});
