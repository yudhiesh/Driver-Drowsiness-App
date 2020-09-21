import { StyleSheet } from "react-native";

const previewLeft = 40;
const previewTop = 60;
const previewWidth = 350;
const previewHeight = 500;
export default StyleSheet.create({
  header: {
    height: Platform.OS === "ios" ? 90 : 50,
    paddingTop: Platform.OS === "ios" ? 40 : 0,
    paddingBottom: Platform.OS === "ios" ? 0 : 0
  },
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
    top: 5
  },
  bbox: {
    position: "absolute",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 1
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    justifyContent: "space-around",
    alignItems: "stretch",
    position: "absolute",
    bottom: 30
  },
  buttonContainer2: {
    justifyContent: "space-around",
    alignItems: "stretch",
    alignSelf: "center",
    position: "absolute",
    bottom: -250
  },
  pContainer: {
    justifyContent: "space-around",
    alignItems: "stretch",
    position: "absolute",
    alignSelf: "center",
    bottom: -150
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
  predictionContainer: {
    margin: 30,
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    bottom: 40
  },
  awarenessText: {
    fontSize: 13,
    color: "black",
    fontWeight: "bold",
    bottom: -300,
    alignSelf: "center",
    textAlign: "center",
    position: "relative"
  },
  faceDebug: {
    fontSize: 13,
    color: "black",
    fontWeight: "bold",
    bottom: -280,
    alignSelf: "center",
    textAlign: "center",
    position: "relative"
  },
  predictionOutput: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    top: 300,
    alignSelf: "center",
    textAlign: "center",
    position: "relative"
  },
  modelButtonContainer: {
    margin: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
    position: "absolute",
    bottom: 20
  },
  cameraContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60%",
    backgroundColor: "#fff"
  },
  camera: {
    position: "absolute",
    left: previewLeft,
    top: previewTop,
    width: previewWidth,
    height: previewHeight,
    zIndex: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 0
  }
});
