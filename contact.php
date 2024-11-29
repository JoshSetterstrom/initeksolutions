<?php
$to = 'info@initeksolutions.com';

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$notes = $_POST['notes'] ?? '';
$company_name = $_POST['company_name'] ?? '';
$phone_number = $_POST['phone_number'] ?? '';

// Sanitize inputs
$name = htmlspecialchars(strip_tags($name));
$email = htmlspecialchars(strip_tags($email));
$message = htmlspecialchars(strip_tags($message));

$subject = 'New Contact Form Submission';
$body = "Name: $name\n";
$body .= "Phone Number: $phone_number\n";
$body .= "Email: $email\n";
$body .= "Company Name: $company_name\n";
$body .= "Notes:\n$notes\n";

$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo "Thanks for reaching out! We'll respond to you as soon as possible.";
} else {
    echo 'We were unable to process your request. Please try again later.';
}
?>