<?php
session_start();
// Import pliku connect.php
require_once 'connect.php';

// Sprawdzenie czy jesteś zalogowany i pobranie nazwy użytkownika
if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
} else {
    // Przekierowanie na stronę logowania jeśli użytkownik nie jest zalogowany
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="navbar">
        <button class="menu-btn" onclick="toggleSidebar()">Menu</button>
        <div class="sidebar" id="sidebar">
            <button class="close-btn" onclick="toggleSidebar()">X</button>
            <p>Welcome, <?php echo $username; ?>!</p>
            <button onclick="logout()">Wyloguj</button>
        </div>
    </div>
    <div class="content">
        <!-- Treść strony głównej -->
    </div>

    <script src="script.js"></script>
    <script>
        function toggleSidebar() {
            var sidebar = document.getElementById("sidebar");
            if (sidebar.style.left === "0px") {
                sidebar.style.left = "-300px";
            } else {
                sidebar.style.left = "0px";
            }
        }

        function logout() {
            // Tutaj możesz dodać kod obsługi wylogowania, np. przekierowanie do strony logowania
            window.location.href = "login.html";
        }
    </script>
</body>

</html>