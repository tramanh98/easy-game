function checkPassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "010298TramAnhCute"; // <-- bạn đổi ở đây

  if (input === correctPassword) {
    window.location.href = "raffle.html";
  } else {
    document.getElementById("error").textContent = "Sai mật khẩu!";
  }
}