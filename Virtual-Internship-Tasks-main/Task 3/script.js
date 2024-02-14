document.addEventListener("DOMContentLoaded", function() {
    var coursesDropdown = document.getElementById("courses-dropdown");

    coursesDropdown.addEventListener("click", function() {
        // Toggle the display of the courses submenu
        var coursesSubmenu = document.querySelector(".courses-submenu");
        coursesSubmenu.style.display = (coursesSubmenu.style.display === "block") ? "none" : "block";
    });
});
