<?php
// Career Application Form Handler

// Only process POST requests.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and sanitize them
    $fullName = strip_tags(trim($_POST["fullName"]));
    $fullName = str_replace(array("\r","\n"),array(" "," "),$fullName);
    
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $address = strip_tags(trim($_POST["address"]));
    $linkedin = strip_tags(trim($_POST["linkedin"]));
    $website = strip_tags(trim($_POST["website"]));
    $experience = strip_tags(trim($_POST["experience"]));
    $salary = strip_tags(trim($_POST["salary"]));
    $workAuthorization = isset($_POST["workAuthorization"]) ? "Yes" : "No";
    $visaRequired = isset($_POST["visaRequired"]) ? "Yes" : "No";
    $personalNote = strip_tags(trim($_POST["personalNote"]));
    
    // Validate required fields
    if (empty($fullName) OR empty($email) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Please complete all required fields and try again.";
        exit;
    }

    // Set the recipient email address.
    $recipient = "design@matrixsystems.co.ke)";

    // Set the email subject.
    $subject = "New Career Application from $fullName";

    // Build the email content.
    $email_content = "New career application details:\n\n";
    $email_content .= "Full Name: $fullName\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Address: $address\n";
    $email_content .= "LinkedIn Profile: $linkedin\n";
    $email_content .= "Personal Website: $website\n";
    $email_content .= "Years of Experience: $experience\n";
    $email_content .= "Expected Salary: $salary\n";
    $email_content .= "Work Authorization in Kenya: $workAuthorization\n";
    $email_content .= "Visa Sponsorship Required: $visaRequired\n";
    $email_content .= "Personal Note: $personalNote\n\n";

    // Handle file upload if CV/resume was submitted
    if (isset($_FILES["cv"]) && $_FILES["cv"]["error"] == 0) {
        $target_dir = "../uploads/";
        // Create uploads directory if it doesn't exist
        if (!file_exists($target_dir)) {
            mkdir($target_dir, 0777, true);
        }
        
        $file_name = basename($_FILES["cv"]["name"]);
        $target_file = $target_dir . uniqid() . "_" . $file_name;
        
        // Try to upload file
        if (move_uploaded_file($_FILES["cv"]["tmp_name"], $target_file)) {
            $email_content .= "CV/Resume uploaded: $file_name\n";
            $email_content .= "File location: $target_file\n";
        } else {
            $email_content .= "CV/Resume upload failed.\n";
        }
    } else {
        $email_content .= "No CV/Resume was uploaded.\n";
    }

    // Build the email headers.
    $email_headers = "From: $fullName <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank you! Your application has been submitted successfully. We will contact you soon.";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your application. Please try again later.";
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>