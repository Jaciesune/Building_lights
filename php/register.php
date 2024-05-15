<?php
// Import pliku connect.php
require_once 'connect.php';

// Sprawdzanie czy żądanie jest typu POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobranie danych z formularza
    $email = $_POST['email'];
    $password1 = $_POST['password1'];
    $password2 = $_POST['password2'];

    // Sprawdzenie czy hasła się zgadzają
    if ($password1 !== $password2) {
        echo "Hasła nie są identyczne. Spróbuj ponownie.";
    } else {
        // Wstawienie danych do bazy danych
        $query = "INSERT INTO users (username, password) VALUES (:email, :password)";
        $statement = $conn->prepare($query);

        // Przekazanie wartości jako tablicy do funkcji execute
        $values = array(':email' => $email, ':password' => $password1);

        if ($statement->execute($values)) {
            // Konto zostało pomyślnie utworzone, przekierowanie na stronę główną
            header("Location: ../html/main.html");
            exit;
        } else {
            echo "Wystąpił błąd podczas rejestracji. Spróbuj ponownie.";
        }
    }
}
