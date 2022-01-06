function doFirst() {
  //
  image = document.getElementById("image");
  image.addEventListener("dragstart", startDrag);
  image.addEventListener("dragend", endDrag);

  card = document.getElementById("card");
  card.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  card.addEventListener("drop", dropped);
  //
  let plus = document.querySelector("#plus"),
    small = document.querySelector("#small"),
    left = document.querySelector("#left"),
    right = document.querySelector("#right"),
    trash = document.querySelector("#trash");

  plus.addEventListener("click", function () {
    console.log("plus");
  });
  small.addEventListener("click", function () {
    console.log("plus");
  });
  left.addEventListener("click", function () {
    console.log("plus");
  });
  right.addEventListener("click", function () {
    console.log("plus");
  });
  trash.addEventListener("click", function () {
    console.log("plus");
  });
}

function startDrag(e) {
  let data =
    '<img src="./image/cute-heart.gif" id="image" class="align-middle" draggable="false"/>';
  e.dataTransfer.setData("pic", data);
}

function endDrag() {
  image.style.visibility = "hidden";
}

function dropped(e) {
  e.preventDefault();
  card.innerHTML = e.dataTransfer.getData("pic");
}
//拖曳結束

window.addEventListener("load", doFirst);
