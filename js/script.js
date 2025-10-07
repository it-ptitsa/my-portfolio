// 1. Массив с путями к 6 фото
const photos = [
  "../images/photo1.png",
  "../images/photo2.png",
  "../images/photo3.png",
  "../images/photo4.png",
  "../images/photo5.png",
  "../images/photo6.png",
];

// 2. Предзагружаю фотографии для появления без мерцания
photos.forEach((src) => {
  const img = new Image();
  img.src = src;
});
const photosPerPage = 2;
let currentPage = 1;

const container = document.querySelector(".photos__gallery");
const pagination = document.querySelector(".photos__pagination");

function showPage(page) {
  currentPage = page;
  container.innerHTML = ""; // Очистить контейнер

  const start = (page - 1) * photosPerPage;
  const end = start + photosPerPage;

  for (let i = start; i < end && i < photos.length; i++) {
    const img = document.createElement("img");
    img.src = photos[i];
    img.className = "photos__img";
    container.appendChild(img);
  }

  buildPagination();
}

function buildPagination() {
  pagination.innerHTML = ""; // Очистить кнопки
  const totalPages = Math.ceil(photos.length / photosPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "photos__btn";
    btn.textContent = i;

    if (i === currentPage) {
      btn.classList.add("active"); // Добавляем класс active для текущей
    }

    btn.onclick = () => showPage(i);
    pagination.appendChild(btn);
  }
}
showPage(1);
