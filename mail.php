<?php
    $to_email = "rafal.konofalski@gmail.com";
    $subject = "Simple Email Test via PHP";
    $body = "Message from: " . $_POST['username'] . "\n\rContent: " . $_POST['message'];
    $headers = "From: " . $_POST['email'];

    if (mail($to_email, $subject, $body, $headers)) {
        echo("Email successfully sent to $to_email...");
    } else {
        echo("Email sending failed...");
    }
?>
