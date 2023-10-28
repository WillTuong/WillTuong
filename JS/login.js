function checkAndSubmit() {
    const tkInput = document.getElementById("tk");
    const passwordInput = document.getElementById("password");

    if (tkInput.checkValidity() && passwordInput.checkValidity()) {
      // Chuyển hướng đến trang khác
      window.location.href = "./member.html";
      return true;
    } else {
      alert("Vui lòng điền đủ thông tin.");
      return false;
    }
  }

  
