var buttonbreakz = document.getElementById("open-breakz")
var modal = document.getElementById("modal-breakz")
var buttonClose = document.getElementById("fechar1")

buttonbreakz.onclick = function (){
  modal.showModal()
}

buttonClose.onclick = function (){
  modal.close()
}

var buttonbitmap = document.getElementById("open-bitmap")
var modalbitmap = document.getElementById("modal-bitmap")
var buttonClosebitmap = document.getElementById("fechar2")

buttonbitmap.onclick = function (){
  modalbitmap.showModal()
}

buttonClosebitmap.onclick = function (){
  modalbitmap.close()
}

var buttontulen = document.getElementById("open-tulen")
var modaltulen = document.getElementById("modal-tulen")
var buttonClosetulen = document.getElementById("fechar3")

buttontulen.onclick = function (){
  modaltulen.showModal()
}

buttonClosetulen.onclick = function (){
  modaltulen.close()
}


var buttonBelara = document.getElementById("open-Belara")
var modalBelara = document.getElementById("modal-Belara")
var buttonCloseBelara = document.getElementById("fechar4")

buttonBelara.onclick = function (){
  modalBelara.showModal()
}

buttonCloseBelara.onclick = function (){
  modalBelara.close()
}





let botaochk = document.getElementById("chk");

function light() {
  if (botaochk.checked) {
    document.body.classList.remove("light-mode");
    localStorage.setItem("modo", "escuro");
  } else {
    document.body.classList.add("light-mode");
    localStorage.setItem("modo", "claro");
  }
}

addEventListener("DOMContentLoaded", function () {
  let status = localStorage.getItem("modo");

  if (status === "claro") {
    botaochk.checked = true;
    document.body.classList.add("light-mode");
  } else {
    botaochk.checked = false;
    document.body.classList.remove("light-mode");
  }
});