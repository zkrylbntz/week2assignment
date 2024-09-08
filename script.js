console.log("testline1");

console.log(document);

let images = [
  {
    src: "./images/photo-1508144753681-9986d4df99b3.avif",
    alt: "an aumtumnal landscape photograph of a mountain side, with trees that have both green and orange leaves",
    width: 150,
    height: 100,
  },
  {
    src: "./images/photo-1511884642898-4c92249e20b6.avif",
    alt: "a landscape photograph of stream running through the middle of a forest, with a dusky feel to it",
    width: 150,
    height: 100,
  },
  {
    src: "./images/photo-1519681393784-d120267933ba.avif",
    alt: "a nightime photograph of a land scape in mountains, the stars are out and a shooting star has been captured",
    width: 150,
    height: 100,
  },
];

const thumbnailContainer = document.getElementById("thumbnail-container");
console.log(thumbnailContainer);

const mainImageContainer = document.getElementById("main-image-container");
console.log(mainImageContainer);

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    newIMG = document.createElement("img");
    newIMG.src = images[i].src;
    newIMG.alt = images[i].alt;
    newIMG.width = images[i].width;
    newIMG.height = images[i].height;
    thumbnailContainer.appendChild(newIMG);
    console.log(newIMG);
  }
}
createThumbnails();

newIMG.addEventListener("click", eventHandler);

createLargeImage(newIMG[index]);
