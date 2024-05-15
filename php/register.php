<?php
// Import pliku connect.php
require_once 'connect.php';

// Sprawdzanie czy żądanie jest typu POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobranie danych z formularza i zabezpieczenie przed atakami SQL Injection
    $email = htmlspecialchars($_POST['email']);
    $password1 = htmlspecialchars($_POST['password1']);
    $password2 = htmlspecialchars($_POST['password2']);

    // Sprawdzenie czy hasła się zgadzają
    if ($password1 !== $password2) {
        echo "Hasła nie są identyczne. Spróbuj ponownie.";
    } else {
        // Sprawdzenie czy konto o podanym adresie e-mail już istnieje
        $query_check = "SELECT * FROM users WHERE username = :email";
        $statement_check = $conn->prepare($query_check);
        $statement_check->bindParam(':email', $email);
        $statement_check->execute();
        $result_check = $statement_check->fetch(PDO::FETCH_ASSOC);

        if ($result_check) {
            // Konto o podanym adresie e-mail już istnieje, wyświetl alert
            echo "<script>alert('Konto o podanym adresie e-mail już istnieje.'); window.location.href = '../html/register.html';</script>";
        } else {
            // Dodanie nowego konta do bazy danych
            $query_insert = "INSERT INTO users (username, password) VALUES (:email, :password)";
            $statement_insert = $conn->prepare($query_insert);
            $statement_insert->bindParam(':email', $email);
            $statement_insert->bindParam(':password', $password1);

            // Wykonanie zapytania
            if ($statement_insert->execute()) {
                // Konto zostało pomyślnie utworzone, przekierowanie na stronę główną
                header("Location: ../html/main.html");
                exit;
            } else {
                echo "Wystąpił błąd podczas rejestracji. Spróbuj ponownie.";
            }
        }
    }
}
