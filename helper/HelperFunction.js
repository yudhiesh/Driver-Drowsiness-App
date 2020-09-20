import React, { useState, useEffect } from "react";

const sumOfArray = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const indexOfMax = arr => {
  if (arr.length === 0) {
    return -1;
  }
  let max = arr[0];
  let maxIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return {
    max,
    maxIndex
  };
};

export { indexOfMax, sumOfArray };
