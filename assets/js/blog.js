const cardsPerPage = 6;
let currentPage = 1;

const cards = document.querySelectorAll('.blog .news-card');
const totalPages = Math.ceil(cards.length / cardsPerPage);

function showPage(page) {

    cards.forEach(card => (card.style.display = 'none'));


    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    for (let i = start; i < end && i < cards.length; i++) {
        cards[i].style.display = 'block';
    }

    document.querySelectorAll('.pagination .page-item').forEach(item => item.classList.remove('active'));
    document.getElementById(`page${page}`).classList.add('active');


    document.getElementById('prev').classList.toggle('disabled', page === 1);
    document.getElementById('next').classList.toggle('disabled', page === totalPages);
}

function goToPage(page) {
    currentPage = page;
    showPage(currentPage);
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

showPage(currentPage);
