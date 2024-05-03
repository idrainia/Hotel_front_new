document.addEventListener("DOMContentLoaded", function() {
    const adminBtn = document.getElementById("admin-btn");
    const clientBtn = document.getElementById("client-btn");
    const adminForm = document.getElementById("admin-form");
    const clientForm = document.getElementById("client-form");
  
    adminBtn.addEventListener("click", function() {
        adminForm.style.display = "block";
        clientForm.style.display = "none";
    });
  
    clientBtn.addEventListener("click", function() {
        adminForm.style.display = "none";
        clientForm.style.display = "block";
    });
  });