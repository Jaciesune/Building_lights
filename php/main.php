<?php
// Import pliku connect.php
require_once 'connect.php';

$query = "SELECT username FROM users WHERE id = :id";
$statement = $conn->prepare($query);
$statement->execute(array(':id' => $user_id));

$row = $statement->fetch(PDO::FETCH_ASSOC);

if ($row) {
    $username = $row['username'];
} else {
    $username = "Unknown";
}
