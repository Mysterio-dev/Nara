document.addEventListener("DOMContentLoaded", () => {
  // Слайдер продукты
  const productSlider = new Swiper(".product-slider", {
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
    },
  });

  // Слайдер продукты
  const HeroSlider = new Swiper(".hero-slider", {
    navigation: {
      nextEl: ".next-1",
      prevEl: ".prev-1",
    },
    slidesPerView: "auto",
    spaceBetween: 20,
  });

  const serviceSlider = new Swiper(".service-slider", {
    slidesPerView: 1,
    loop: true, 
    autoplay: {
      delay: 3000, 
    },
    effect: 'fade',
    speed: 1000,
  });

  const brandSlider = new Swiper(".brand-slider", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 50,
    autoplay: {
        delay: 0, 
        disableOnInteraction: false,
    },
    speed: 5000, 
});
  
});

const tabs = document.querySelectorAll(".tabs__title");
const tabBodies = document.querySelectorAll(".tabs__body");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("_tab-active"));

    tabBodies.forEach((body) => {
      body.classList.remove("active");
      body.style.display = "none";
    });

    tab.classList.add("_tab-active");

    setTimeout(() => {
      tabBodies[index].style.display = "block";
      setTimeout(() => {
        tabBodies[index].classList.add("active");
      }, 10);
    }, 0);
  });
});

tabBodies.forEach((body, index) => {
  body.style.display = index === 0 ? "block" : "none";
  if (index === 0) {
    body.classList.add("active");
  }
});

const items = document.querySelectorAll(".catalog__item");

items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    items.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Инициализация Lenis
  const lenis = new Lenis({
    duration: 1.2,
  });

  lenis.on("scroll", (e) => {
    ScrollTrigger.update();
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Инициализация GSAP и ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);


  const initialiseApp = () => {
    initAnimations();
    initScrollEffect();
  };

  const initAnimations = () => {
    const splitText = new SplitType(".text", {
      types: "words, chars",
      tagName: "span",
    });

    gsap.from(".text .char", {
      scrollTrigger: {
        trigger: ".text",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      opacity: 0.1,
      stagger: 0.1,
    });
  };



  // const initScrollEffect = () => {
  //   const numbersWrapper = document.querySelector('.numbers-wrapper');
  //   const contentHeight = numbersWrapper.offsetWidth; // Получаем ширину элемента

  //   gsap.to(numbersWrapper, {
  //     scrollTrigger: {
  //       trigger: numbersWrapper,
  //       start: "top top", // Начало анимации
  //       end: `+=${contentHeight}`, // Конец анимации, добавляем высоту контента
  //       scrub: true, // Включаем "scrub" для плавного эффекта
  //       markers: false,
  //     },
  //     // Изменяем translate3d в зависимости от прокрутки
  //     transform: `translate3d(-${contentHeight}px, 0, 0)`, // Конечное значение
  //   });
  // };


  // initialiseApp(); 
  const initScrollEffect = () => {
    const numbersWrapper = document.querySelector('.numbers-wrapper');
    const contentHeight = numbersWrapper.offsetWidth; // Получаем ширину элемента
  
    // Получаем значения margin
    const style = getComputedStyle(numbersWrapper);
    const marginLeft = parseFloat(style.marginLeft);
    const marginRight = parseFloat(style.marginRight);
  
    // Учитываем margin при расчете конечного значения
    const totalWidth = contentHeight + marginLeft + marginRight;
  
    gsap.to(numbersWrapper, {
      scrollTrigger: {
        trigger: numbersWrapper,
        start: "top top", // Начало анимации
        end: `+=${totalWidth}`, // Конец анимации, добавляем общую ширину
        scrub: true, // Включаем "scrub" для плавного эффекта
        markers: false,
      },
      // Изменяем translate3d в зависимости от прокрутки
      transform: `translate3d(-${totalWidth}px, 0, 0)`, // Конечное значение
    });
  };
  
  initialiseApp();
  
});

