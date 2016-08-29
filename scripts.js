$(function() {
	var $countDiv = $(".count");
	var $incButton = $(".inc-button");
	var $decButton = $(".dec-button");
	var $resetButton = $(".reset-button");
	var $submitInputButton = $(".submit-input-button");
	var count = 0;
	var inc = 1;

	$countDiv.text("Count: " + count);

	$incButton.on ("click", function () {
		count = (Number(count) + Number(inc));
		$countDiv.text("Count: " + count);
	});

	$decButton.on ("click", function() {
		count = (count - inc);
		$countDiv.text("Count: " + count);
	});

	$resetButton.on ("click", function() {
		count = 0;
		$countDiv.text("Count: " + count);
	});


	
	$(".input-field").on ("keyup", function() {
		if($(".input-field").val() == ''){
      		inc = 1;
      		$incButton.text ("+" + inc);
      		$decButton.text ("-" + inc);
      		} 
      	 else if ($.isNumeric($(".input-field").val()) === true) {
      	 	inc = $(".input-field").val();
			$incButton.text ("+" + inc);
			$decButton.text ("-" + inc); 
      	   }
		else {
			alert("You have entered an invalid input");
		}
		});

});

