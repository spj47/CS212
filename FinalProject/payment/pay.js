function sendToHome()
{
  window.location.href = '../home/index.html';
}

let payButton = document.getElementById("payButton");
payButton.addEventListener("click", sendToHome);