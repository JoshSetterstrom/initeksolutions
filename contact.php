<?php

$to = 'joshsetterstrom@gmail.com';

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$notes = $_POST['notes'] ?? '';
$company_name = $_POST['company_name'] ?? '';
$phone_number = $_POST['phone_number'] ?? '';

// Validate email address
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Invalid email address.';
    exit;
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags($name));
$email = htmlspecialchars(strip_tags($email));
$message = htmlspecialchars(strip_tags($message));

$subject = 'New Contact Form Submission';
$body = "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Notes:\n$notes\n";
$body .= "Notes:\n$company_name\n";
$body .= "Notes:\n$phone_number\n";

$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo 'Thank you for your message. We will get back to you shortly.';
} else {
    echo 'There was an error sending your message. Please try again later.';
}
?>
