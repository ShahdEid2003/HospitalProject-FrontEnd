const newsData = [
    {
      image: "./assets/img/blog/blog-img4.jpg",
      date: "November 12, 2018",
      admin: "admin",
      title: "Dental office printingdern care to ailing dear.",
      description: "Fummy text of the printing and type news setting industrs standard known printing and typenews...",
      commentsCount: 0,
    },
    {
      image: "./assets/img/blog/blog-img5.jpg",
      date: "November 12, 2018",
      admin: "admin",
      title: "Your Medical Records are Safe now a days.",
      description: "Fummy text of the printing and type news setting industrs standard known printing and typenews...",
      commentsCount: 0,
    },
    {
      image: "./assets/img/blog/blog-img6.jpg",
      date: "November 12, 2018",
      admin: "admin",
      title: "We are amongst the most qualified dental implant providers",
      description: "Fummy text of the printing and type news setting industrs standard known printing and typenews...",
      commentsCount: 0,
    },
    {
      image: "./assets/img/blog/blog-img7.png",
      date: "November 12, 2018",
      admin: "admin",
      title: "Dental office need a blog area galley care to ailing dear.",
      description: "Fummy text of the printing and type news setting industrs standard known printing and typenews...",
      commentsCount: 0,
    },
    {
      image: "./assets/img/blog/blog-img8.jpg",
      date: "November 12, 2018",
      admin: "admin",
      title: "Medical Records are Safe Your now a days",
      description: "Fummy text of the printing and type news setting industrs standard known printing and typenews...",
      commentsCount: 0,
    },
    {
      image: "./assets/img/blog/blog-img9.jpg",
      date: "November 12, 2018",
      admin: "admin",
      title: "Your Medical Records are Safe now a days.",
      description: "Fummy text of the printing and type news setting industrs standard known printing and typenews...",
      commentsCount: 0,
    },
    {
      image: "./assets/img/blog/blog-img1.jpg",
      date: "November 12, 2018",
      admin: "admin",
      title: "Office In our clinic discounts for a full inspection",
      description: "Fummy text of the printing and type news setting industrs standard known printing and typenews...",
      commentsCount: 0
    },
    {
      image: "./assets/img/blog/blog-img2.jpg",
      date: "November 12, 2018",
      admin: "admin",
      title: "Medical Records are Safe Your now a days.",
      description: "Fummy text of the printing and type news setting industrs standard known printing and typenews...",
      commentsCount: 0
    },
    {
      image: "./assets/img/blog/blog-img3.jpg",
      date: "November 12, 2018",
      admin: "admin",
      title: "In our clinic discounts for a full inspection",
      description: "Fummy text of the printing and type news setting industrs standard known printing and typenews...",
      commentsCount: 0
    }

  ];
  
  let currentPage = 1;
  const itemsPerPage = 6;
  
  function renderNews(page) {
    const newsRow = document.querySelector(".blog .row");
    newsRow.innerHTML = ""; 

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const currentNews = newsData.slice(startIndex, endIndex);

    currentNews.forEach((news) => {
      const newsHtml = `
        <div class="col-md-6 col-lg-4">
          <div class="news-card">
            <img src="${news.image}" alt="blog-img" class="news-image" />
            <div class="news-content">
              <div class="news-meta">
                <span class="date-icon"><i class="fa-solid fa-calendar-days"></i></span>
                ${news.date}
                <span class="admin-icon"><i class="fa-solid fa-user"></i></span>${news.admin}
              </div>
              <h3 class="news-title">${news.title}</h3>
              <p class="news-description">${news.description}</p>
              <div class="news-footer d-flex justify-content-between align-items-center">
                <a href="#" class="read-more"><i class="fa-solid fa-user"></i> ${news.admin}</a>
                <div class="comments">
                  <a href="#"><i class="fa-solid fa-comments"></i></a> ${news.commentsCount}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      newsRow.innerHTML += newsHtml;
    });
  
    updatePaginationButtons();
  }
//pagenation
  function updatePaginationButtons() {
    document.getElementById("prev").classList.toggle("disabled", currentPage === 1);
    document.getElementById("next").classList.toggle("disabled", currentPage === Math.ceil(newsData.length / itemsPerPage));
  }

  function goToPage(page) {
    if (page < 1 || page > Math.ceil(newsData.length / itemsPerPage)) return;
    currentPage = page;
    renderNews(currentPage);
  }
  
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      renderNews(currentPage);
    }
  }

  function nextPage() {
    if (currentPage < Math.ceil(newsData.length / itemsPerPage)) {
      currentPage++;
      renderNews(currentPage);
    }
  }

  renderNews(currentPage);
  