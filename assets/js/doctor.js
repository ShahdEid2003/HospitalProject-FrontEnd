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
