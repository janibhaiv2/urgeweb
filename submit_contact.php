<?php
// Database connection details
$host = 'localhost';
$username = 'your_database_username';
$password = 'your_database_password';
$dbname = 'contact_form';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $dropdown1 = $conn->real_escape_string($_POST['dropdown1']);
    $dropdown2 = $conn->real_escape_string($_POST['dropdown2']);
    $dropdown3 = $conn->real_escape_string($_POST['dropdown3']);
    $dropdown4 = $conn->real_escape_string($_POST['dropdown4']);
    $dropdown5 = $conn->real_escape_string($_POST['dropdown5']);

    $sql = "INSERT INTO contacts (name, email, phone, dropdown1, dropdown2, dropdown3, dropdown4, dropdown5) VALUES ('$name', '$email', '$phone', '$dropdown1', '$dropdown2', '$dropdown3', '$dropdown4', '$dropdown5')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Form submitted successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
    }
}

$conn->close();
?>
