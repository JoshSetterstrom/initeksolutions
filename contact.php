<?php

$to = 'joshsetterstrom@gmail.com';

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$notes = $_POST['notes'] ?? '';
$company_name = $_POST['company_name'] ?? '';
$phone_number = $_POST['phone_number'] ?? '';

// Trim and sanitize inputs
$name = htmlspecialchars(strip_tags(trim($name)));
$email = htmlspecialchars(strip_tags(trim($email)));
$notes = htmlspecialchars(strip_tags(trim($notes)));
$company_name = htmlspecialchars(strip_tags(trim($company_name)));
$phone_number = htmlspecialchars(strip_tags(trim($phone_number)));

// Check if required fields are empty
if (empty($name) && empty($phone_number) && empty($email)) {
    echo "All required fields (name, phone number, and email) must be filled out.";
    exit;
}

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