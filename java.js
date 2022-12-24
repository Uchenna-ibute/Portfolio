const bar = document.querySelector('.fa-bars');
const menu = document.querySelector('.dropdown-menu');
const mark = document.querySelector('.xmark');
const Items = document.querySelectorAll('.menu .ax');
const namee = document.querySelector('input#name');
const text = document.querySelector('textarea');
bar.addEventListener('click', () => {
  menu.classList.toggle('hide');
});
mark.addEventListener('click', () => {
  menu.classList.toggle('hide');
});
Items.forEach((n) => {
  n.addEventListener('click', () => {
    menu.classList.toggle('hide');
  });
});
const projectDetails = [{
  name: 'Keeping track of hundreds  of components website',
  name2: 'Multi Post Stories',
  detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  detail2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  image: './img/Snapshoot.png',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  live: 'https://github.com/Uchenna-ibute/Portfolio',
  source: 'https://github.com/Uchenna-ibute',
},
{
  name: 'Keeping track of hundreds  of components website',
  name2: 'Multi Post Stories',
  detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  detail2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  image: './img/Snapshoot.png',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  live: 'https://github.com/Uchenna-ibute/Portfolio',
  source: 'https://github.com/Uchenna-ibute',
},
{
  name: 'Keeping track of hundreds  of components website',
  name2: 'Multi Post Stories',
  detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  detail2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  image: './img/Snapshoot.png',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  live: 'https://github.com/Uchenna-ibute/Portfolio',
  source: 'https://github.com/Uchenna-ibute',
},
{
  name: 'Keeping track of hundreds  of components website',
  name2: 'Multi Post Stories',
  detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  detail2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  image: './img/Snapshoot.png',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  live: 'https://github.com/Uchenna-ibute/Portfolio',
  source: 'https://github.com/Uchenna-ibute',
},
{
  name: 'Keeping track of hundreds  of components website',
  name2: 'Multi Post Stories',
  detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  detail2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  image: './img/Snapshoot.png',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  live: 'https://github.com/Uchenna-ibute/Portfolio',
  source: 'https://github.com/Uchenna-ibute',
},
{
  name: 'Keeping track of hundreds  of components website',
  name2: 'Multi Post Stories',
  detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  detail2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  image: './img/Snapshoot.png',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  live: 'https://github.com/Uchenna-ibute/Portfolio',
  source: 'https://github.com/Uchenna-ibute',
},
{
  name: 'Keeping track of hundreds  of components website',
  name2: 'Multi Post Stories',
  detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  detail2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  image: './img/Snapshoot.png',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  live: 'https://github.com/Uchenna-ibute/Portfolio',
  source: 'https://github.com/Uchenna-ibute',
},
];

const projectCards = document.querySelectorAll('.project-cards');
const getModal = document.querySelector('#modal');
const pjName = getModal.querySelector('.name');
const pjName2 = getModal.querySelector('.name2');
const lgLists = getModal.querySelectorAll('.lg-lt li');
const mainImg = getModal.querySelector('.m-img');
const imgLists = getModal.querySelectorAll('.img-lt li');
const modalContent = getModal.querySelector('.content');
const modalContent2 = getModal.querySelector('.content2');
const liveLink = getModal.querySelector('#liveLink');
const sourceLink = getModal.querySelector('#sourceLink');
const closeBtn = getModal.querySelector('.close-btn');

for (let i = 0; i < projectCards.length; i += 1) {
  const pjbtn = projectCards[i].querySelector('.pjbtn');
  const project = projectDetails[i];

  pjbtn.addEventListener('click', () => {
    getModal.classList.add('active');

    pjName.innerText = project.name;
    pjName2.innerText = project.name2;
    mainImg.style.backgroundImage = `url(${project.image})`;
    modalContent.innerText = project.detail;
    modalContent2.innerText = project.detail2;
    liveLink.href = project.live;
    sourceLink.href = project.source;

    for (let j = 0; j < lgLists.length; j += 1) {
      lgLists[j].innerText = project.technologies[j];
    }

    imgLists.forEach((imgList) => {
      imgList.style.backgroundImage = `url(${project.image})`;
    });

    closeBtn.addEventListener('click', () => {
      getModal.classList.remove('active');
    });
  });
}

const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
const msg = document.querySelector('form .message');

function showError(m) {
  msg.style.display = 'block';
  msg.innerText = m;
}

function showSuccess(mass) {
  msg.style.display = 'block';
  msg.style.color = 'white';
  msg.style.backgroundColor = '#ff6b00';
  msg.innerText = mass;
}

function checkLowerCase(input) {
  if (input.value !== input.value.toLowerCase()) {
    showError('please write the email in lowercase');
  } else {
    showSuccess('Thank You.');
    form.submit();
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkLowerCase(email);
});

const valueInput = JSON.parse(localStorage.getItem('valueInput')) || [];

function addVale(n, e, t) {
  valueInput.push({ n, e, t });
  localStorage.setItem('valueInput', JSON.stringify(valueInput));
  return { n, e, t };
}

function showNow({ n, e, t }) {
  namee.value = n;
  email.value = e;
  text.value = t;
}

valueInput.forEach(showNow);

form.addEventListener('change', (event) => {
  event.preventDefault();
  addVale(namee.value, email.value, text.value);
});
