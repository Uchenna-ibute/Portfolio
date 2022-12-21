const bar = document.querySelector('.fa-bars');
const menu = document.querySelector('.dropdown-menu');
const mark = document.querySelector('.xmark');
const Items = document.querySelectorAll('.menu .ax');
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
  detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  image: 'img/Snapshoot Portfolio.png',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  live: 'https://github.com/Uchenna-ibute/Portfolio',
  source: 'https://github.com/Uchenna-ibute',
}
];

const projectCards = document.querySelectorAll('.project-cards');
const getModal = document.querySelector('#modal');
const pjName = getModal.querySelector('.name');
const lgLists = getModal.querySelectorAll('.lg-lt li');
const mainImg = getModal.querySelector('.m-img');
const imgLists = getModal.querySelectorAll('.img-lt li');
const modalContent = getModal.querySelector('.content');
const liveLink = getModal.querySelector('#liveLink');
const sourceLink = getModal.querySelector('#sourceLink');
const closeBtn = getModal.querySelector('.close-btn');

for (let i = 0; i < projectCards.length; i += 1) {
  const pjbtn = projectCards[i].querySelector('.pjbtn');
  const project = projectDetails[i];

  pjbtn.addEventListener('click', () => {
    getModal.classList.add('active');

    pjName.innerText = project.name;
    mainImg.style.backgroundImage = project.image;
    modalContent.innerHTML = project.detail;
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
