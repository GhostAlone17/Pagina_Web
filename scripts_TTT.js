document.addEventListener("DOMContentLoaded", function() {
    const components = [
        {
            imageUrl: "https://i1.sndcdn.com/artworks-R60lNMnznBsKhLMm-tGP2UA-t500x500.jpg",
            title: "Gohan Ultimate - New Attacks",
            downloadUrl: "https://cuty.io/nbcEaV5y"
        },
        {
            imageUrl: "https://i1.sndcdn.com/artworks-zN2GNi1UyfC8o9My-qz8ywQ-t500x500.jpg",
            title: "Golden Freezer - New Attacks",
            downloadUrl: "https://cuty.io/tSdTcv"
        },
        {
            imageUrl: "https://dokkaninfo.com/assets/japan/character/card/1012330/card_1012330_cutin.png",
            title: "Goku SSGSS Xenoverse Version",
            downloadUrl: "https://cuty.io/hP1jf"
        },
        // Puedes agregar más componentes aquí si lo deseas
    ];

    const container = document.getElementById("container");

    components.forEach(component => {
        const componentDiv = document.createElement("div");
        componentDiv.classList.add("container");

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image");
        const image = document.createElement("img");
        image.src = component.imageUrl;
        image.alt = "Descripción de la imagen";
        imageDiv.appendChild(image);
        componentDiv.appendChild(imageDiv);

        const textDiv = document.createElement("div");
        textDiv.classList.add("text");
        const title = document.createElement("h3");
        title.textContent = component.title;
        const downloadButton = document.createElement("button");
        downloadButton.classList.add("download-button");
        downloadButton.textContent = "Descargar";
        downloadButton.addEventListener("click", function() {
            window.open(component.downloadUrl, "_blank");
        });
        textDiv.appendChild(title);
        textDiv.appendChild(downloadButton);
        componentDiv.appendChild(textDiv);

        container.appendChild(componentDiv);
    });
});
