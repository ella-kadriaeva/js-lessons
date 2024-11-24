const imageDiv = document.getElementById("img");

async function fetchImg() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random").then(
    (response) => response.json()
  );

  return response.message;
}
async function getImg() {
  try {
    const url = await fetchImg();
    markupImg(url);
  } catch (error) {
    console.log(error);
  }
}

function markupImg(url) {
  const image = document.createElement("img");
  image.src = url;
  imageDiv.append(image);
}
getImg();
