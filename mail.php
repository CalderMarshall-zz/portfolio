<?php


$yourname;
$email;
$message;
$from;
$to;
$subject;
$body;

if(isset($_POST['yourname'], $_POST['email'], $_POST['message'])) {
    $yourname=$_POST['yourname'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    $body = "From: $yourname\nE-Mail: $email\nMessage: $message";
    $to = 'cmarshall72@gmail.com';
    $from = 'From: caldermarshall.com';
    $subject = 'Email Inquiry from Web Portfolio';
    $sent = mail($to, $subject, $body, $from);
}

if ($sent) {
    echo 'Message sent. Thank you '.$yourname.'!';
} else {
    echo 'Oops! An error occurred. Try sending your message again.';
}


?>
