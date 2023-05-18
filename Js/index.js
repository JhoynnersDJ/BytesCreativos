const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const carouselItems = carousel.querySelectorAll(".carousel-item");

let currentIndex = 0;
let autoplayInterval;

nextBtn.addEventListener("click", () => {
  clearInterval(autoplayInterval); // Detener el intervalo actual
  nextSlide();
  startAutoplay(); // Reiniciar el temporizador
});

prevBtn.addEventListener("click", () => {
  clearInterval(autoplayInterval); // Detener el intervalo actual
  prevSlide();
  startAutoplay(); // Reiniciar el temporizador
});

function autoPlay() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
    carousel.scrollLeft = 0;
  } else {
    carousel.scrollLeft += carousel.offsetWidth;
  }
}

function nextSlide() {
  carousel.scrollLeft += carousel.offsetWidth;
  if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
    carousel.scrollLeft = 0;
  }
}

function prevSlide() {
  carousel.scrollLeft -= carousel.offsetWidth;
  if (carousel.scrollLeft < 0) {
    carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth;
  } else if (carousel.scrollLeft === 0) {
    carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth;
  }
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    autoPlay();
  }, 3000);
}

startAutoplay(); // Iniciar el temporizador de autoplay inicialmente


//Parallax

// Función para animar el contador
function animateCounter(element) {
  let count = 0;
  const target = +element.dataset.count;
  const interval = setInterval(() => {
    if (count >= target) {
      element.innerText = target;
      clearInterval(interval);
    } else {
      count++;
      element.innerText = count;
    }
  }, 10);
}

// Obtener los elementos con la clase "counter" y animarlos al hacer scroll
const counters = document.querySelectorAll('.counter');
const speed = 500; // velocidad a la que se activa la animación

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  counters.forEach((counter) => {
    const elementTop = counter.getBoundingClientRect().top + scrollTop;
    const windowHeight = window.innerHeight;
    if (elementTop < scrollTop + windowHeight && !counter.classList.contains('animated')) {
      counter.classList.add('animated');
      setTimeout(() => {
        animateCounter(counter);
      }, speed);
    }
  });
});

//Animar Resumen

//Agregando la funcion de javaScript del scroll al texto e imagen

//Selectores del texto (RECORDAR AGREGAR ID EN EL TEXTO)
const animarDiv = document.querySelector('#resumenanimar');
const animarPosicion = animarDiv.getBoundingClientRect().top + window.scrollY;

//Selectores del texto (RECORDAR AGREGAR ID EN LA IMAGEN)
const animarImage = document.querySelector('#animarimagenresumen');
const animarFlujo = animarImage.getBoundingClientRect().top + window.scrollY;

function animarScroll() {
  if (window.scrollY >= animarPosicion - window.innerHeight / 2) {
    animarDiv.classList.add('activado');
    window.removeEventListener('scroll', animarScroll);
    animarImage.classList.add('activados');
    window.removeEventListener('scroll', animarScroll);
  }
}
window.addEventListener('scroll', animarScroll);

//Iconos Razones

// Escuchar el evento "scroll" del documento
$(document).scroll(function() {
  // Obtener la posición superior de la sección
  var sectionTop = $('.grid-container').offset().top;
  
  // Obtener la posición superior de la ventana visible
  var windowHeight = $(window).height();
  var windowTop = $(window).scrollTop();
  
  // Verificar si la sección está dentro de la ventana visible
  if (sectionTop < windowTop + windowHeight) {
    // Agregar la clase "show" al título y al contenedor de imágenes
    $('.section-title').addClass('show');
    $('.section-subtitle').addClass('show');
    $('.grid-container').addClass('show');
    
    // Eliminar el evento "scroll" para que los efectos no se vuelvan a activar
    $(document).off('scroll');
  }
});