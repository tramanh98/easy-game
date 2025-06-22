function checkPassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "matkhau123"; // <-- bạn đổi ở đây

  if (input === correctPassword) {
    window.location.href = "raffle.html";
  } else {
    document.getElementById("error").textContent = "Sai mật khẩu!";
  }
}