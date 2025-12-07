// Jalankan setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // set tahun footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // =========================
  //  SLIDESHOW HERO
  // =========================

  // daftar foto + caption hero
  const heroSlides = [
    {
      src: "Untitled-1.jpg",
      caption: "Pondok Pendawa – Center for Religious, Scientific and Entrepreneurial Training"
    },
    {
      src: "Untitled-2.jpg",
      caption: "Santri Pondok Pendawa dalam kegiatan keagamaan dan kebersamaan."
    },
    {
      src: "Untitled-3.jpg",
      caption: "Kegiatan pembinaan karakter, ilmu dan kewirausahaan di Pondok Pendawa."
    }
  ];

  let currentHeroIndex = 0;
  const heroImg = document.getElementById("hero-slide");
  const heroCaption = document.getElementById("hero-caption");

  if (!heroImg || heroSlides.length === 0) {
    return; // kalau elemen tidak ketemu, jangan lanjut
  }

  function showHeroSlide(index) {
    const total = heroSlides.length;
    currentHeroIndex = ((index % total) + total) % total;

    const slide = heroSlides[currentHeroIndex];

    // efek fade
    heroImg.style.opacity = 0;

    setTimeout(function () {
      heroImg.src = slide.src;
      if (heroCaption) {
        heroCaption.textContent = slide.caption;
      }
      heroImg.style.opacity = 1;
    }, 400);
  }

  // tampilkan pertama kali
  showHeroSlide(0);

  // otomatis ganti tiap 5 detik
  setInterval(function () {
    showHeroSlide(currentHeroIndex + 1);
  }, 5000);


  // ============================
  //  ANIMASI REVEAL SAAT DISCROLL
  // ============================

  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // animasi hanya 1 kali
          }
        });
      },
      { threshold: 0.12 } // seberapa jauh elemen terlihat sebelum animasi
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // fallback untuk browser lama
    revealEls.forEach((el) => el.classList.add("show"));
  }

});
