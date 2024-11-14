//departments
const departmentsData = [
    { image: "./assets/img/about/eye-care.jpg", title: "Eye Care", doctors: 4 },
    { image: "./assets/img/about/dental-img.jpg", title: "Dental Care", doctors: 4 },
    { image: "./assets/img/about/primary-care.jpg", title: "Primary Care", doctors: 4 },
    { image: "./assets/img/about/medicine.jpg", title: "Medicine", doctors: 4 },
    // -------------------------------------
    { image: "./assets/img/about/cardiology.jpg", title: "Cardiology", doctors: 3 },
    { image: "./assets/img/about/Orthopedic.jpg", title: "Orthopedics", doctors: 5 },
    { image: "./assets/img/about/neurology.jpg", title: "Neurology", doctors: 2 },
    { image: "./assets/img/about/gynecology.jpg", title: "gynecology", doctors: 6 },
    //--------------------------------
    { image: "./assets/img/about/eye-care2.jpg", title: "Eye Care", doctors: 4 },
    { image: "./assets/img/about/dental-care2.jpg", title: "Dental Care", doctors: 4 },
    { image: "./assets/img/about/medicine-care.jpg", title: "Medicine", doctors: 4 },
    { image: "./assets/img/about/Hepatology.jpg", title: "Hepatology", doctors: 4 }
];
let currentIndex = 0;
const departmentsPerPage = 4;
function loadDepartments() {
    const departmentsCards = document.querySelector('.departments-cards');

    const nextDepartments = departmentsData.slice(currentIndex, currentIndex + departmentsPerPage);

    const result = nextDepartments.map(department => {
        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="department-card shadow">
                <img src="${department.image}" alt="${department.title}">
                <h3>${department.title}</h3>
                <p><i class="fa-solid fa-user-doctor"></i> ${department.doctors} Specialist doctors</p>
                <div class="overlay">
                    <a href="#" class="button">See Detail</a>
                </div>
            </div>
        </div>
        `;
    }).join('');

    departmentsCards.innerHTML += result;

    currentIndex += departmentsPerPage;


    if (currentIndex >= departmentsData.length) {
        const loadMoreButton = document.getElementById('loadMoreButton');
        loadMoreButton.innerText = 'No data';
        loadMoreButton.disabled = true;
    }
}

document.getElementById('loadMoreButton').addEventListener('click', loadDepartments);
loadDepartments();

// Statistics counter
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.statistics .count');
    const speed = 200;

    const startCounting = (counter) => {
        const target = +counter.getAttribute('data-target');
        counter.innerText = "0";
        const updateCount = () => {
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

