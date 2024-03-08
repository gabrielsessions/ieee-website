let navbarOpen = false;

function navbarToggle() {
    navbarOpen = !navbarOpen;
    if (navbarOpen) {
        document.getElementById("mobile-menu").classList.remove("hidden");
        return;
    }
    document.getElementById("mobile-menu").classList.add("hidden");
}