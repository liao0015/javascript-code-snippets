# javascript-code-snippets

Simple Javascript code for fun

## Adding preview and save svg feature in Krona generate `.html` 

Feature: Preview and save SVG from Krona generated `.html` file 

How to: Simply insert the following script at the end of each Krona generated `.html` file, before the closing `</body>` tag to enable the feature.  The script will overwrite the `snapshot()` function, so that clicking 'snapshot' button will generate a new page in which users can preview SVG and save .svg.  Users can always go back to the original Korana generate `.html` by refreshing the browser.

Example: You can check out the [example here]()

The script:
```html
	<!-- <html> <body>-->
	<script type="text/javascript">
	function snapshot()
	{
		var patternWidth = fontSize * .6;//radius / 50;

		//overwrite the default body style
		document.body.setAttribute("style", "overflow: auto; width: 100%");

		svg = svgHeader();

		resetKeyOffset();
		
		snapshotMode = true;
		
		selectedNode.draw(false, true);
		selectedNode.draw(true, true);
		
		if ( focusNode != 0 && focusNode != selectedNode )
		{
			context.globalAlpha = 1;
			focusNode.drawHighlight(true);
		}
		
		if ( hueDisplayName && useHue() )
		{
			drawLegendSVG();
		}
		
		snapshotMode = false;
		
		svg += svgFooter();

		//replace the old HTML
		document.body.innerHTML = "<!DOCTYPE html><html><body></body></html>";

		let btn = document.createElement("div");
		btn.setAttribute("style", "width: 180px; background-color: #5e35b1; box-shadow: 5px 5px 5px #bdbdbd; color: #fff; margin: 0 auto; padding: 10px; cursor: pointer");
		let btn_txt = document.createTextNode("Save SVG as .svg file");
		btn.appendChild(btn_txt);
		btn.addEventListener("click", function(){
			saveAsSvgFile(svg);
		}, false);

		let a = document.createElement("div");
		a.innerHTML = svg; //as svg is string, not a node, can NOT appendChild()
		let codeDiv = document.createElement("div");
		let code = document.createElement("code");
		code.setAttribute("id", "code");
		codeDiv.setAttribute("style", "width: 80%; margin: 0 auto; background-color: #fafafa");
		codeDiv.appendChild(code);
		code.append(svg);
		
		document.body.appendChild(btn);
		document.body.appendChild(a);
		document.body.appendChild(codeDiv);
		
	}

	function saveAsSvgFile(svg){
		var svgBlob = new Blob([svg], {type:"image/svg+xml;charset=utf-8"});
		var svgUrl = URL.createObjectURL(svgBlob);
		var downloadLink = document.createElement('a');
		downloadLink.href = svgUrl;
		downloadLink.download = "x1.svg";
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	}
	</script>
	<!-- </body></html> -->
```

[Reference link to Krona](https://github.com/marbl/Krona)