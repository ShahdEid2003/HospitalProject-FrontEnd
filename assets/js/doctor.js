const doctors = [
  {
    name: "Dr. Mark Willy",
    specialty: "Neurology",
    imgSrc: "./assets/img/doctors/doctor-1.jpg",
  },
  {
    name: "Dr. Steven Roy",
    specialty: "Cardiology",
    imgSrc: "./assets/img/doctors/doctor-2.jpg",
  },
  {
    name: "Dr. Johora Roy",
    specialty: "Gynecology",
    imgSrc: "./assets/img/doctors/doctor-3.jpg",
  },
  {
    name: "Dr. Zinia Zara",
    specialty: "Associate Eye",
    imgSrc: "./assets/img/doctors/doctor-4.jpg",
  },
  {
    name: "Dr. Mark Willy",
    specialty: "Neurology",
    imgSrc: "./assets/img/doctors/doctor-5.jpg",
  },
  {
    name: "Dr. Tina Rahman",
    specialty: "Neurology",
    imgSrc: "./assets/img/doctors/doctor-6.jpg",
  },
  {
    name: "Dr. Nadim Kamal",
    specialty: "Medicine",
    imgSrc: "./assets/img/doctors/doctor-7.jpg",
  },
  {
    name: "Dr. Rihana Roy",
    specialty: "Pediatrics",
    imgSrc: "./assets/img/doctors/doctor-2.jpg",
  }
];



const doctorCards = doctors.map(doctor => `
  <div class="section col-12 col-sm-6 col-lg-3">
      <div class="doctor-card shadow" data-name="${doctor.name}" data-specialty="${doctor.specialty}">
          <div class="img">
              <img src="${doctor.imgSrc}" alt="doctor-img" />
              <div class="overlay">
                  <a href="#"><span>+</span></a>
              </div>
          </div>
          <h3>${doctor.name}</h3>
          <p>Specialty: ${doctor.specialty}</p>
          <a href="#" class="btn btn-primary">Book An Appointment</a>
      </div>
  </div>
`).join('');

document.querySelector('.doctors .row').innerHTML = doctorCards;

function filterDoctors() {
  const nameInput = document.getElementById("searchName").value.toLowerCase();
  const specialtyInput = document.getElementById("specialtyFilter").value;
  const doctors = document.querySelectorAll(".doctor-card ");

  doctors.forEach(doctor => {
    const doctorName = doctor.getAttribute("data-name").toLowerCase();
    const doctorSpecialty = doctor.getAttribute("data-specialty");

    const matchesName = doctorName.includes(nameInput);
    const matchesSpecialty = specialtyInput === "All" || doctorSpecialty === specialtyInput;

    if (matchesName && matchesSpecialty) {
      doctor.style.display = "block";
    } else {
      doctor.style.display = "none";
    }
  });
}
