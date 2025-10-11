const photos = [
  "../images/photo1.png",
  "../images/photo2.png",
  "../images/photo3.png",
  "../images/photo4.png",
  "../images/photo5.png",
  "../images/photo6.png",
];

const photosPerPage = 2;
let currentPage = 1;

const container = document.querySelector(".photos__gallery");
const pagination = document.querySelector(".photos__pagination");

// Создаём все фото один раз
photos.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  img.className = "photos__img";
  container.appendChild(img);
});

function showPage(page) {
  currentPage = page;
  const start = (page - 1) * photosPerPage;
  const end = start + photosPerPage;

  const imgs = container.querySelectorAll(".photos__img");
  imgs.forEach((img, index) => {
    if (index >= start && index < end) {
      img.style.display = "block";
      img.style.opacity = "1";
    } else {
      img.style.display = "none";
      img.style.opacity = "0";
    }
  });

  buildPagination();
}

function buildPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(photos.length / photosPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "photos__btn";
    btn.textContent = i;

    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => showPage(i);
    pagination.appendChild(btn);
  }
}

// Предзагрузка
photos.forEach((src) => {
  const img = new Image();
  img.src = src;
});

showPage(1);
