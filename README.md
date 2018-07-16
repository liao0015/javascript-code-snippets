# javascript-code-snippets

## Krona generate svg 

[Link to Krona](https://github.com/marbl/Krona)

Copy and paste the code at the end of each html file before the end `</body>` tag

```html
	<script type="text/javascript">
		function snapshot()
		{
			var patternWidth = fontSize * .6;//radius / 50;

			//overwrite default body style
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

		
			document.body.innerHTML = "<!DOCTYPE html><html><body></body></html>";

			let btn = document.createElement("div");
			btn.setAttribute("style", "width: 180px; background-color: #5e35b1; box-shadow: 5px 5px 5px #bdbdbd; color: #fff; margin: 0 auto; padding: 10px; cursor: pointer");
			let btn_txt = document.createTextNode("Save SVG as .svg file");
			btn.appendChild(btn_txt);
			btn.addEventListener("click", function(){
				saveAsSvgFile(svg);
			}, false);

			let a = document.createElement("div");
			a.innerHTML = svg; //as svg is string, can NOT appendChild()
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
```