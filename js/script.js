// EN CAS D'INVALIDITE 

var invalid = function(){	
    document.getElementById("choixChat").style = "border: 1px solid red";
    document.getElementById("raisonChat").style = "border: 1px solid red";
};


$(document).ready(function(){
    
	$("#cat-form").submit(function(event){

		event.preventDefault();

		if( $("#choixChat").val() && $("#raisonChat").val().length >= 15 ){
			$(this).fadeOut(400);
			$("#success").fadeIn(1500);
		}

	});

	$("#choixChat").change(function(){
		if( $(this).val() ){
			$(this).css("border", "1px solid #ccc");
		}
	});

	$("#raisonChat").blur(function(){
		if( $(this).val().length < 15 ){
			$(this).css("border", "1px solid red");
		}
	});

});
