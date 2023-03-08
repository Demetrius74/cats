window.onload = function () {
    fetch("https://api.thecatapi.com/v1/images/search?limit=3")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
        const catImg = document.createElement("img");
        catImg.id = "cat-img-" + (i + 1);
        catImg.src = data[i].url;
        catImg.style.objectFit = "cover";
        catImg.style.width = "450px";
        catImg.style.height = "400px";
        catImg.style.padding = "5px";
        catImg.alt = "cat";
        document.body.appendChild(catImg);
        }
    
    var elem = document.createElement("h2");
    var elemText = document.createTextNode("ты!");
    elem.appendChild(elemText);
    document.body.appendChild(elem);

    var rbutton = document.createElement("button");
    rbutton.innerHTML = "БОЛЬШЕ котиков!";
    rbutton.onclick = function() {
        location.reload(true);
      }
    document.body.appendChild(rbutton);
  });
  }