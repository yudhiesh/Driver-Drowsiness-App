TODO :

9 September 2020

#1. Home Screen DONE
#2. Video Screen DONE
#3. Camera View :

#1. Load model
#2. Check if loading of model is done
#3. If loading is done then display a pop up

#4. Start button will be attached to the model to make predictions
#5. Prediction function will take input from the camera and convert it to frames
#6. Each frame is passed through the model
#7. Model Prediction View will be showing the model predictions for each class and the confidence it has
#8. Stop model will stop the model making predictions

#9. Detect faces using BlazeFace model
#10. Draw bounding boxes on face

CHANGE:
Need to use MobileNet for face detection
BlazeFace Model uses a (128,128,3) input whereas Mobilenet has the same input shape as the custom model
EDIT:
So I needed to just resize the width and height of the cropped image
Now model is not making predictions asynchronously
Split the code so that it is easier to read
Code for cropping the image takes up a lot of space

11. Bounding boxes are getting drawn on the screen behind the camera and not the camera input
12. Fix CSS of the button layout, camera feed, tfready output and face prediction probability
13. From the faces stored in state crop out the faces
14. Store the cropped faces
15. Send the cropped faces to the custom model
16. Output prediction
17. Model prediction class name = [0,10, 5]
18. Store predictions in a queue
19. Average the predictions over K predictions

Output
Bottom right: 40.03703689575195,58.5428466796875
Top Left :166.57492065429688,185.08103942871094
Landmarks: 70.40927124023438,86.60486602783203,129.024658203125,83.35950469970703,98.8799819946289,104.99212646484375,100.42112731933594,141.61785888671875,43.538082122802734,108.05596923828125,160.2967987060547,102.21917724609375
Probability: 0.9998354315757751
