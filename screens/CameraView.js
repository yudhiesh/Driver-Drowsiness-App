import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { Camera } from "expo-camera";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import * as Permissions from "expo-permissions";
import {
  cameraWithTensors,
  bundleResourceIO,
  decodeJpeg
} from "@tensorflow/tfjs-react-native";

import styles from "../styles/style";

const TensorCamera = cameraWithTensors(Camera);

export default function CameraView() {
  let requestAnimationFrameId = 0;
  let frameCount = 0;
  let makePredictionsEveryNFrames = 5;
  let textureDims;

  const AUTORENDER = true;

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [isTFReady, setTFReady] = useState(false);
  const [loadedModel, setModelLoaded] = useState(null);
  const [modelPrediction, setModelPrediction] = useState("");
  const [predictionFound, setPredictionFound] = useState(false);
  const modelJSON = require("../model/model.json");
  const modelWeights = require("../model/group1-shard1of1.bin");

  useEffect(() => {
    if (!isTFReady) {
      (async () => {
        try {
          const { status } = await Camera.requestPermissionsAsync().catch(e =>
            console.log(e)
          );
          setHasPermission(status === "granted");
          await tf.ready().catch(e => console.log(e));
          setTFReady(true);
          setModelLoaded(await loadModel());
        } catch (e) {
          console.log("Error in 1st useEffect()");
        }
      })();
    }
  }, []);

  // Run unMount for cancelling animation if it is running to avoid leaks
  useEffect(() => {
    return () => {
      cancelAnimationFrame(requestAnimationFrameId);
    };
  }, [requestAnimationFrameId]);

  // Use the loaded model to make predictions
  // There are 3 classes that the model will be predicting
  // Class 0: Awareness levels of 0
  // Class 5: Awareness levels of 5
  // Class 10: Awareness levels of 10
  // Pick the prediction class with the highest value

  const getPrediction = async tensor => {
    if (!tensor) {
      console.log("Tensor not found!");
      return;
    }
    const model = await loadedModel;
    const prediction = model.predict(tensor.reshape([1, 224, 224, 3]));
    if (!prediction || prediction.length === 0) {
      console.log("No prediction available");
      return;
    }
    // Make predictions.
    const preds = prediction.dataSync();
    console.log(preds);
    preds.forEach((pred, i) => {
      //console.log(`x: ${i}, pred: ${pred}`);
      if (pred > 0.95) {
        setModelPrediction({ prediction: pred, class_: i });
      }
    });

    // Only take the predictions with a probability of 30% and greater //Stop looping
    cancelAnimationFrame(requestAnimationFrameId);
    //setPredictionFound(true);
    //setModelPrediction(prediction[0].className);
    tensor.dispose();
  };

  // Handling the camera input and converting it into tensors to be used in the
  // model for predictions
  const handleCameraStream = imageAsTensors => {
    const verbose = true;
    //console.log("Tensor input 1");
    if (!imageAsTensors) {
      console.log("Image not found!");
      return;
    }
    const loop = async () => {
      if (loadedModel !== null) {
        if (frameCount % makePredictionsEveryNFrames === 0) {
          const imageTensor = imageAsTensors.next().value;
          //console.log("Tensor input 2");
          //tf.print(imageTensor, verbose);
          await getPrediction(imageTensor).catch(e => console.log(e));
        }
      }

      frameCount += 1;
      frameCount = frameCount % makePredictionsEveryNFrames;
      requestAnimationFrameId = requestAnimationFrame(loop);
    };
    //loop infinitely to constantly make predictions
    loop();
  };

  // Load the model from the models folder
  const loadModel = async () => {
    const model = await tf
      .loadLayersModel(bundleResourceIO(modelJSON, modelWeights))
      .catch(e => console.log(e));
    console.log("Model loaded!");
    return model;
  };

  // Show the prediction above the buttons
  const showPrediction = () => {
    return (
      <View>
        {
          <View>
            <Text>{modelPrediction}</Text>
          </View>
        }
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (Platform.OS == "ios") {
    textureDims = {
      height: 1920,
      width: 1080
    };
  } else {
    textureDims = {
      height: 1200,
      width: 1600
    };
  }

  return (
    <View style={{ flex: 1 }}>
      <TensorCamera
        style={styles.camera}
        type={type}
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeHeight={224}
        resizeWidth={224}
        resizeDepth={3}
        onReady={images => handleCameraStream(images)}
        autorender={AUTORENDER}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <View>
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            Tensorflow.js {tf.version.tfjs} is:
            {isTFReady ? " READY" : " LOADING"}
            {isTFReady && ` and using backend: ${tf.getBackend()}`}
          </Text>
        </View>
        <View style={styles.modelButtonContainer}>
          <Button
            title="Flip Screen"
            color="black"
            style={styles.appButtonText2}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
