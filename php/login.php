<?php
// Import pliku connect.php
require_once 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobranie danych z formularza i zabezpieczenie przed atakami SQL Injection
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    // Zapytanie SQL parametryzowane
    $query = "SELECT * FROM users WHERE username = :username AND password = :password";
    $statement = $conn->prepare($query);
    $statement->bindParam(':username', $username);
    $statement->bindParam(':password', $password);
    $statement->execute();

    // Pobranie wyniku zapytania
    $result = $statement->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        header("Location: ../html/main.html");
        exit;
    } else {
        echo "Błędne dane logowania. Spróbuj ponownie.";
    }
}
