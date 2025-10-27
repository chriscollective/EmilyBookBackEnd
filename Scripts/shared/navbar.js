function loadNavbar() {
  fetch("/components/navbar.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("navbar-placeholder").innerHTML = html;
    })
    .catch((err) => console.error("Navbar load failed:", err));
}
