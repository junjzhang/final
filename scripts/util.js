gallery_items = document.querySelectorAll(".gallery-item");

function triger_gallery_item(e) {
  img = this.querySelector("img");
  this.classList.toggle("gallery-item-active");
  img.classList.toggle("gallery-item-img-active");
  for (let p of this.parentNode.querySelectorAll("p")) {
    console.log(p);
    p.classList.toggle("gallery-item-p-active");
  }
}

for (let gallery_item of gallery_items) {
  gallery_item.addEventListener("click", triger_gallery_item);
}
