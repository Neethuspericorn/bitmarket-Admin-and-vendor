$(document).ready(function () {
    $(".sidebarCollapse").click(function () {
        $(".side-nav-wrapper").toggleClass("isactive");
        $(".dashboard-content").toggleClass("isactive");
        $("header").toggleClass("isactive");
    });
    
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})