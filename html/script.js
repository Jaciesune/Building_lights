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

// Pobranie nazwy użytkownika z lokalnego magazynu
var username = localStorage.getItem("username");
if (username) {
    document.getElementById("username").innerText = username;
}