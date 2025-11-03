let imageBox = document.getElementById("imageBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let generateButton = document.getElementById("generateButton");


qrText.addEventListener ("keydown", function (event) {
   if (event.key === "Enter") {
      generateQRCode();
   }
});

function generateQRCode() {
   if(qrText.value.length > 0) {

   qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
   imageBox.classList.add("show-img");
   /* scanme.classList.add("show-img"); */


} else {
   qrText.classList.add("error");
   setTimeout(() => {
      qrText.classList.remove("error");
   }, 500);
}
}


