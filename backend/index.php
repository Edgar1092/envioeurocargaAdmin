<?php
$host = '127.0.0.1';
$user = 'root';
$pass = '';
$conn = new mysqli($host, $user, $pass);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected to MySQL successfully!";
?>
