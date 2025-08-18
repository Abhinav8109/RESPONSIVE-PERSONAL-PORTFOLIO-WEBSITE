let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['Cloud IAM Engineer ','Devops Engineer','Cloud Engineer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const cloudItems = [
  {
    img: "image/cloud1.png",
    title: "🔥 Cloud Hero Challenge",
    desc: "90 minutes of real Google Cloud problem solving."
  },
  {
    img: "image/cloud2.png",
    title: "☁ Google Cloud Summit Delhi",
    desc: "Honored to attend Google Cloud Summit 2025 in Delhi."
  },
  {
    img: "image/cloud3.png",
    title: "🎁 Google Cloud Swags",
    desc: "Proud moments with Google Cloud swag & community vibes."
  },
  {
    img: "image/cloud4.png",
    title: "📜 KodeKloud Certificate",
    desc: "GCP DevOps Project completion certificate — mastering cloud DevOps."
  },
  {
    img: "image/cloud5.png",
    title: "🏅 Google Cloud Skill Badges",
    desc: "Multiple Google Cloud Skill Badges achieved in 2025."
  }
];

let currentCloud = 0;

function showCloud(index) {
  const item = cloudItems[index];
  document.getElementById("cloud-img").src = item.img;
  document.getElementById("cloud-title").innerText = item.title;
  document.getElementById("cloud-desc").innerText = item.desc;
}

function prevCloud() {
  currentCloud = (currentCloud - 1 + cloudItems.length) % cloudItems.length;
  showCloud(currentCloud);
}

function nextCloud() {
  currentCloud = (currentCloud + 1) % cloudItems.length;
  showCloud(currentCloud);
}
function updateCloudImage(index) {
  const imageElement = document.querySelector(".cloud-image img");
  const imageWrapper = document.querySelector(".cloud-image");

  // Set the new image
  imageElement.src = cloudImages[index].src;
  imageElement.alt = cloudImages[index].alt;

  // Set blurred background
  imageWrapper.style.setProperty(
    "--bg-url",
    `url('${cloudImages[index].src}')`
  );
}
