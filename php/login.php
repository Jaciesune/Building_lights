<?php
session_start();
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
        // Ustawienie nazwy użytkownika w sesji
        $_SESSION['username'] = $username;
        // Przekierowanie na stronę główną po zalogowaniu
        header("Location: ../html/main.html?username=$username");
        exit;
    } else {
        // Jeśli dane są niepoprawne, wyświetl komunikat i przekieruj użytkownika z powrotem do strony logowania
        echo "<script>alert('Błędne dane logowania. Spróbuj ponownie.');</script>";
        echo "<script>window.location.href = '../html/login.html';</script>";
        exit;
    }
}
