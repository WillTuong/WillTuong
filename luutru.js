function checkAndSubmit() {
  const tkInput = document.getElementById("tk");
  const passwordInput = document.getElementById("password");

  // Kiểm tra xem người dùng có để trống trường nào không
  if (!tkInput.value || !passwordInput.value) {
    alert("Vui lòng không để trống bất kỳ ô trống nào.");
    return false;
  }

  // Kiểm tra xem mật khẩu có đủ mạnh không
  const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordStrengthRegex.test(passwordInput.value)) {
    alert("Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm cả chữ hoa, chữ thường và số.");
    return false;
  }

    // Kiểm tra tính hợp lệ của các trường
    if (tkInput.value&& passwordInput.value) {
    // Chuyển hướng đến trang khác
    window.location.href = "./member.html";
    return true;
  } 
}