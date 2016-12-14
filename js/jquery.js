$(document).ready(function(){
	var dimensions = 16;
	
	var createGrid = function(){
		if(dimensions===NaN || dimensions===0 || dimensions===""){
			dimensions=16;
		}
		for(var i=0; i<=dimensions-1; i++){
			$('.grid-container').append('<div id=row'+i+' class="row"></div>');
			for (var j=0; j<=dimensions-1; j++){
				$('#row'+i).append('<div class="col-1"></div>');
			};
		};
		$("[class*='col-']").css("height", 880/dimensions+"px");
		$("[class*='col-']").css("width", 100/dimensions+"%");
		sketch();
	};
	
	var clearGrid = function(){
		$('.row').remove();
	};
	
	var sketch = function(){
		$('.col-1').mouseenter(function(){
			$(this).addClass("black");
		});
	};
	
	$('#clear').click(function(){
		$('.col-1').removeClass("black");
		dimensions = prompt("How many squares per side would you like?");
		clearGrid();
		createGrid();
	});
	
	createGrid();
	
});