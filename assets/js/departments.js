const departments = [
    {
      image: './assets/img/services/eye-p.png',
      alt: 'Eye Care',
      title: 'Eye Care',
      description: 'Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in…',
      link: '#',
    },
    {
      image: './assets/img/services/dental-care-p.png',
      alt: 'Dental Care',
      title: 'Dental Care',
      description: 'Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced. Nisi mauris et adipisc iquam class…',
      link: '#',
    },
    {
      image: './assets/img/services/primary-care.png',
      alt: 'Primary Care',
      title: 'Primary Care',
      description: 'Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced. Nisi mauris et adipisc iquam class…',
      link: '#',
    },
    {
      image: './assets/img/services/medicine-p.png',
      alt: 'Medicine',
      title: 'Medicine',
      description: 'Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced. Nisi mauris et adipisc iquam class…',
      link: '#',
    },
    {
      image: './assets/img/services/orthopedic-p.png',
      alt: 'Orthopedic',
      title: 'Orthopedic',
      description: 'Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced. Nisi mauris et adipisc iquam class…',
      link: '#',
    },
    {
      image: './assets/img/services/cardiogram1.png',
      alt: 'Cardiology',
      title: 'Cardiology',
      description: 'Aorem Ipsumea dummy texte printing setting detry bringin eight challenges faced. Nisi mauris et adipisc iquam class…',
      link: '#',
    },
  ];
  const departmentsRow = document.querySelector('.department .row.gx-5.gy-5'); 
  departmentsRow.innerHTML=``;
  departments.forEach(department => {
    const card = `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="department-card shadow">
          <img src="${department.image}" alt="${department.alt}">
          <h3 class="fw-bold">${department.title}</h3>
          <p>${department.description}</p>
          <a href="${department.link}" class="btn btn-primary">See Details</a>
        </div>
      </div>
    `;
    departmentsRow.innerHTML += card; 
  });
    