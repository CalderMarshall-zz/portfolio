$(document).ready(function() {
	// whoosh sound when email is sent
	// send form data to php script with AJAX
	$('#submit').click(function(event){
		event.preventDefault();
		var yourname = $('#yourname').val();
		var email = $('#email').val();
		var message = $('#message').val();
		var formData = {yourname: yourname, email: email, message: message};
		console.log(formData);

		if (yourname === "" || email === "" || message === ""){
			$('#error-message').fadeIn().html('All fields are required');
			setTimeout(function(){
				$('#error-message').fadeOut('slow');
			}, 4000);
		}
		else {
			$('#error-message').html(' ');

					$('input[type=text], input[type=email], textarea').val(' ');
					$('#success-message').fadeIn().html("Success!");
					console.log("success function");
					setTimeout(function(){
						$('#success-message').fadeOut('slow');
					}, 5000);


		}
		return false;
	});
});
