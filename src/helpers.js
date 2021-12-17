//import React, { Component } from 'react';

export const getRandomNum = () => {
  const max = 255;
  return Math.floor(Math.random() * max);
};
/**
 * Draws a square
 */
export const drawSquare = (r, g, b) => {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  let color = "rgb(" + r + "," + g + "," + b + ")";

  context.fillStyle = color;
  return context.fillRect(0, 0, canvas.width, canvas.height);
};

//what are props?
//You can pass them and not know the type of property.
//Function components:  functions that accepts arguments with data and returns react element

export const welcome_w_year = (props) => {
  return <h3>Hello, {props.name} the date is</h3>;
};
