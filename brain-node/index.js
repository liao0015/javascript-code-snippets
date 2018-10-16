const express = require('express');
const app = express();
const brain = require('brain.js');

app.set('view engine', 'pug') //set view engine
app.set('views', './views') //set view dir
app.get('/', (req, res)=>res.send('Hello Express'));

let output = null;
app.get('/myview', function(req,res){
	if(output){
		res.render('index', {title: 'Hello', message: 'My Express-Pug View: ' + output})
	}else{
		res.render('index', {title: 'Hello', message: 'Calculating...'})
	}
	
})

app.get('/contrast', function(req, res){
	res.render('contrast', {title: 'contrast demo', message: 'successfully rendered'})
})

// run '$node index.js' to get the local server runnning
app.listen(3000, ()=>console.log('app listening on port 3000'));
app.use(express.static('public'));


function trainXOR(){
//provide optional config object (or undefined). Defaults shown.
let config = {
    binaryThresh: 0.5,     // ¯\_(ツ)_/¯
    hiddenLayers: [10],     // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid' // Supported activation types ['sigmoid', 'relu', 'leaky-relu', 'tanh']
}
//create a simple feed forward neural network with backpropagation
let net = new brain.NeuralNetwork(config);
let data = 
	[
		{input: [0, 0], output: [0]},
		{input: [0, 1], output: [1]},
		{input: [1, 0], output: [1]},
		{input: [1, 1], output: [0]}
	];
// net.train([{input: [0, 0], output: [0]},
//            {input: [0, 1], output: [1]},
//            {input: [1, 0], output: [1]},
//            {input: [1, 1], output: [0]}]);

net.trainAsync(data)
	.then(res=>{
		console.log(res);
		output = net.run([1, 0]);  // [0.987]
		// output = null;
		console.log(output);
	})
    .catch(res=>console.log(res));
}

function trainRGB(rgb){
    const network = new brain.NeuralNetwork();
    network.train([
        { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
        { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
        { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
        { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
        { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
        { input: {r: 1, g: 0.99, b: 0}, output: { light: 1 } },
        { input: {r: 1, g: 0.42, b: 0.52}, output: { dark: 1 } },
    ]);
    const result = brain.likely(rgb, network);
    console.log(result);
}


