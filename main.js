const container = document.querySelector('.scrolling-container');
const content = document.querySelector('.scrolling-content');
const items = document.querySelectorAll('.scrolling-content > *');

let currentPosition = 0;
let previousTime = null;
const animationDuration = 10000; // Продолжительность анимации в миллисекундах

// Клонируем элементы и добавляем их в конец контейнера
items.forEach(item => {
  const clone = item.cloneNode(true);
  content.appendChild(clone);
});

function scrollContent(timestamp) {
  if (!previousTime) previousTime = timestamp;
  const deltaTime = timestamp - previousTime;
  currentPosition -= (deltaTime / animationDuration); // Изменяем позицию прокрутки
  content.style.transform = `translateX(${currentPosition * container.offsetWidth}px)`; // Устанавливаем новую позицию с помощью translateX
  if (Math.abs(currentPosition) >= 1) { // Если контент скрылся полностью, возвращаем его в начало
    currentPosition = 0;
  }
  previousTime = timestamp;
  requestAnimationFrame(scrollContent); // Вызываем функцию снова для создания анимации
}

requestAnimationFrame(scrollContent);






document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollContent = document.querySelector('.scroll-content');
    const items = document.querySelectorAll('.scroll-content > *');

    const animationDuration = 10000; // Продолжительность анимации в миллисекундах
    let previousTime = null;
    let currentPosition = 0;
    let itemWidth = 0;

    // Определяем ширину одного элемента контента
    if (items.length > 0) {
        itemWidth = items[0].offsetWidth;
    }

    // Определяем ширину всех элементов контента
    const contentWidth = items.length * itemWidth;
    scrollContent.style.width = `${contentWidth}px`;

    // Клонируем элементы и добавляем их в конец контейнера
    items.forEach(item => {
        const clone = item.cloneNode(true);
        scrollContent.appendChild(clone);
    });

    function scrollItems(timestamp) {
        if (!previousTime) previousTime = timestamp;
        const deltaTime = timestamp - previousTime;
        currentPosition -= (deltaTime / animationDuration); // Изменяем позицию прокрутки

        // Перемещаем контейнер влево, чтобы создать эффект скроллинга
        const newPosition = currentPosition * contentWidth;
        scrollContent.style.transform = `translateX(${newPosition}px)`;

        // Проверяем, если первый элемент полностью исчез из виду
        if (currentPosition < -1) {
            // Перемещаем первый элемент в конец контейнера
            const firstItem = scrollContent.firstElementChild;
            scrollContent.appendChild(firstItem);
            // Восстанавливаем позицию прокрутки
            currentPosition += 1;
        }

        previousTime = timestamp;
        requestAnimationFrame(scrollItems); // Вызываем функцию снова для создания анимации
    }

    requestAnimationFrame(scrollItems); // Запускаем функцию для начала анимации
});





document.addEventListener('DOMContentLoaded', function() {
  const facts = [
    "Fact 1: I love cats and dogs",
    "Fact 2: My favorite pastime is reading and drawing with a simple pencil",
    "Fact 3: I love to travel",
    "Fact 4: I exercise almost every day",
    "Fact 5: I love borscht",
    "Fact 6: I used to be interested in photography, but I was limited to taking pictures on my phone",
    "Fact 7: My favorite book is 'The Terror' by Dan Simons",
    "Fact 8: I played tennis for 7 years and won 7-8 tournaments",
    "Fact 9: I love listening to music and can spend more than 5-6 hours with headphones",
    "Fact 10: I like to play basketball 1 on 1, not as a team"
  ];

  const factNumberText = document.getElementById('factNumber');
  const randomFactText = document.getElementById('randomFact');
  const generateFactBtn = document.getElementById('generateFactBtn');

  generateFactBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    const factNumber = randomIndex + 1;

    factNumberText.textContent = `№${factNumber}`;
    randomFactText.textContent = randomFact;
  });
});



document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".abt-title, .avatar, .abt-subtitle, .abt-text, .des-subtitle, .des-text, .skills-title, .img-container, .me-subtitle, .facts, .services-title, .serv-subtitle, .serv-info, .grdes-title, .samples, .more-btn, .web-title, .samples.sec, .more-btn.last, .work-title, .work-subtitle, .work-content, .gr-title, .logos, .thumbnails, .banners, .webdes-title, .site-preview, .nav-list-not-fixed, .links-title, .links-subtitle, .links-subtitle-other");

  function checkVisibility() {
    elements.forEach(function(element, index) {
      if (isElementInViewport(element)) {
        setTimeout(function() {
          element.classList.add("show");
        }, index * 10);
      }
    });
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  checkVisibility();
  window.addEventListener("scroll", checkVisibility);
});






const slider = document.querySelector('.slider-logo');
let slideIndex = 0;

function nextLogoSlide() {
    if (slideIndex === 3) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    updateLogoSlider();
}

function updateLogoSlider() {
    const offset = -slideIndex * 440;
    slider.style.transform = `translateX(${offset}px)`;
}

setInterval(nextLogoSlide, 3000);

const Tslider = document.querySelector('.thumbnails-slider');
let TslideIndex = 0;

function nextThumbnailSlide() {
    if (TslideIndex === 8) {
        TslideIndex = 0;
    } else {
        TslideIndex++;
    }
    updateThumbnailSlider();
}

function updateThumbnailSlider() {
    const offset = -TslideIndex * 440;
    Tslider.style.transform = `translateX(${offset}px)`;
}

setInterval(nextThumbnailSlide, 3000);

const Bslider = document.querySelector('.banners-slider');
let BslideIndex = 0;

function nextBannerSlide() {
    if (BslideIndex === 3) {
        BslideIndex = 0;
    } else {
        BslideIndex++;
    }
    updateBannerSlider();
}

function updateBannerSlider() {
    const offset = -BslideIndex * 876;
    Bslider.style.transform = `translateX(${offset}px)`;
}

setInterval(nextBannerSlide, 3000);
