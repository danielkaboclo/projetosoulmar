AOS.init();

document.addEventListener("DOMContentLoaded", function() {
    function startCarousel(carouselId) {
      const carousel = document.getElementById(carouselId);
  
      if (!carousel) {
        console.warn(`Elemento com o ID "${carouselId}" não foi encontrado.`);
        return;
      }
  
      const carouselImages = carousel.querySelector(".carousel-images");
      const images = carouselImages.children;
      const totalImages = images.length;
      let currentIndex = 0;
  
      // Clona a primeira imagem para a última posição, para criar o efeito de loop
      const firstImage = images[0].cloneNode(true);
      carouselImages.appendChild(firstImage);
  
      function showImage(index) {
        carouselImages.style.transition = "transform 0.5s ease";
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
      }
  
      function nextImage() {
        if (currentIndex === totalImages) {
          // Quando atingir o final, reinicia o carrossel sem animação
          carouselImages.style.transition = "none";
          currentIndex = 0;
          carouselImages.style.transform = `translateX(0%)`;
  
          // Após a reinicialização, adiciona uma animação suave
          setTimeout(() => {
            carouselImages.style.transition = "transform 0.5s ease";
            nextImage();
          }, 50);
        } else {
          currentIndex++;
          showImage(currentIndex);
        }
      }
  
      // Move para a próxima imagem a cada 3 segundos
      setInterval(nextImage, 3000);
    }
  
    // Inicializa os carrosséis
    startCarousel("carouselNorte");
   
    startCarousel("carouselSul");
  });

  function showOptions() {
    document.getElementById("trip-options").style.display = "block";
}

function hideOptions() {
    document.getElementById("trip-options").style.display = "none";
}

function selectTrip(tripName, tripPrice) {
    document.getElementById("trip").value = tripName + " - R$" + tripPrice;
    document.getElementById("trip-display").innerText = tripName + " - R$" + tripPrice;
    document.getElementById("selected-trip").innerText = "Trajeto Selecionado: " + tripName + " - R$" + tripPrice;
    hideOptions();
}




