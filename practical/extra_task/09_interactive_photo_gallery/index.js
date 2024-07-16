const image_main = document.getElementById("image_main");
const large_img = document.getElementById("large-img");
const modalImg = document.getElementById("modal-img");
const add_image = document.getElementById("add-image");

let array_images = [
  "images/img_1.jpg",
  "images/img_5.jpg",
  "images/img_3.jpg",
  "images/img_4.jpg",
  "images/img_3.jpg",
  "images/img_7.jpg",
];

add_image.addEventListener("click", function () {
  const inputUrl = prompt("Enter image url:");
  if (inputUrl) {
    addPhoto(inputUrl.trim());
  }
});

function addPhoto(url) {
  array_images.push(url);
  displayImage();
}

function displayImage() {
  image_main.innerHTML = "";

  array_images.forEach((photoUrl, index) => {
    const createDiv = document.createElement("div");
    createDiv.classList.add("photo");

    const img = document.createElement("img");
    img.src = photoUrl;
    img.alt = `image${index}`;
    img.addEventListener("click", () => largeImage(photoUrl));

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deletePhoto(index));

    createDiv.appendChild(img);
    createDiv.appendChild(deleteBtn);
    image_main.appendChild(createDiv);
  });
}

displayImage();

function largeImage(url) {
  large_img.style.display = "block";
  modalImg.src = url;
}

function closeBtn() {
  large_img.style.display = "none";
}

large_img.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    closeBtn();
  }
});

document.getElementsByClassName("close")[0].addEventListener("click", closeBtn);

function deletePhoto(index) {
  array_images.splice(index, 1);
  displayImage();
}
