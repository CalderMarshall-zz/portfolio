<?php

// Error and Validation checks
if(!isset($_POST['submit']))
{
	echo "error; you need to submit the form!";
}
$name = $_POST['yourname'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

if(empty($name)||empty($visitor_email))
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}


// Send email
$email_subject = "New message from your website!";
$email_body = "You have received a new message from $name.\n".
$email_body .= "Here is the message: \n $message".
$to = "cmarshall72@gmail.com";

mail($to, $email_subject, $email_body, "From: " .$visitor_email);
header('Location: index.html');



// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>
