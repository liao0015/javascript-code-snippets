// import _ from 'lodash';

// const input = document.querySelector("input");
// const example = document.querySelector("#example");

// example.innerHTML = _.join(['Hello', 'webpack'], ' ');

// input.addEventListener("change", (e) => {
//   const rgb = getRgb(e.target.value);
//   const network = new brain.NeuralNetwork();
//   console.log(rgb);
//   network.train([
//     { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
//     { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
//     { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
//     { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
//     { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
//     { input: {r: 1, g: 0.99, b: 0}, output: { light: 1 } },
//     { input: {r: 1, g: 0.42, b: 0.52}, output: { dark: 1 } },
//   ]);

//   const result = brain.likely(rgb, network);
//   console.log(result);
//   example.style.background = e.target.value;
//   example.style.color = result === "dark" ? "white" : "black";
// });

// function getRgb(hex) {
// 	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
// 	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
// 	  return r + r + g + g + b + b;
// 	});
// 	// var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
// 	// return result ? {
// 	//   r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
// 	//   g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
// 	//   b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
// 	// } : null;
// }
// 
// 
// 
// const brain = require('brain.js');
import brain from 'brain.js';

var net = new brain.NeuralNetwork();

var data = [{ input: { v: 1.0, l: 1.0, c: 1.0 }, output: { h: 1 } },
{ input: { v: 0.8, l: 0.75, c: 0.58 }, output: { h: 1 } }, //80k views, 7500 comments 5500 likes 
{ input: { v: 0.85, l: 0.9, c: 0.7 }, output: { h: 1 } },
{ input: { v: 0.92, l: 0.83, c: 0.79 }, output: { h: 1 } },
{ input: { v: 0.0, l: 0.0, c: 0.0 }, output: { b: 1 } },
{ input: { v: 0.2, l: 0.34, c: 0.3 }, output: { b: 1 } },
{ input: { v: 0.5, l: 0.1, c: 0.1 }, output: { b: 1 } },
{ input: { v: 0.3, l: 0.3, c: 0.1 }, output: { b: 1 } },
]

net.train(data, { log: true });

console.log(net.run({ v: 0.15, l: 0.1, c: 0.35 })) //95% boring and 5% a hit