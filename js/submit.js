$(document).ready(function() {
	// send form data to php script with AJAX
	$('#submit').click(function(event){
		event.preventDefault();
		var yourname = $('#yourname').val();
		var email = $('#email').val();
		var message = $('#message').val();
		var formData = {yourname: yourname, email: email, message: message};

		if (yourname === "" ||  email === "" ||  message === ""){
			$('#error-message').fadeIn().html('All fields are required');
			setTimeout(function(){
				$('#error-message').fadeOut('slow');
			}, 4000);
		}
		else {
			$('#error-message').html(' ');
			$.ajax({
				type: 'POST',
				url: '../mail.php',
				data: formData,
				success: function(response){
					$('input[type=text], input[type=email], textarea').val(' ');
					$('#success-message').fadeIn().html(response);
					setTimeout(function(){
						$('#success-message').fadeOut('slow');
					}, 5000);

				}
			});

		}
		return false;
	});
	// input
    $(".input-contact input, .textarea-contact textarea").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".input-contact input, .textarea-contact textarea").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });
});
