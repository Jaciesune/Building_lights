<?php
// Ścieżka do pliku bazy danych SQLite
$database_file = __DIR__ . '/budynki.db';

try {
    // Tworzenie połączenia z bazą danych SQLite
    $conn = new PDO("sqlite:$database_file");
    // Ustawianie raportowania błędów dla PDO
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Obsługa błędu połączenia
    echo "Błąd połączenia z bazą danych: " . $e->getMessage();
    die(); // Przerwanie działania skryptu w przypadku błędu
}
// Ustawianie kodowania znaków
$conn->exec("PRAGMA encoding = 'UTF-8';");

// Zmienna globalna $conn jest teraz dostępna w innych plikach, które wymagają połączenia z bazą danych
