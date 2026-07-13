const casts = [
  {
    name: "天宮ねむ",
    role: "Owner / Cast",
    message: "特別な夜をあなたへ",
    image: "images/nemu.jpg"
  },

  {
    name: "ねろまる",
    role: "Cast",
    message: "癒しの時間をお届けします",
    image: "images/sample.jpg"
  },

  {
    name: "ひめめ",
    role: "Cast",
    message: "素敵なひとときを",
    image: "images/sample.jpg"
  }
];


const castList = document.getElementById("cast-list");


if (castList) {

  casts.forEach(cast => {

    castList.innerHTML += `

    <div class="cast-card">

      <img src="${cast.image}">

      <h3>${cast.name}</h3>

      <p>
      ${cast.role}<br>
      ${cast.message}
      </p>

    </div>

    `;

  });

}const hero = document.querySelector(".hero");

const images = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg"
];

let index = 0;

function changeHero(){

  hero.style.backgroundImage =
  `
  linear-gradient(
    rgba(0,0,0,0.5),
    rgba(8,0,20,0.8)
  ),
  url(${images[index]})
  `;

  index++;

  if(index >= images.length){
    index = 0;
  }

}

changeHero();

setInterval(changeHero,5000);
// ページ移動フェード

document.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", function(e){

    const url = this.href;


    if(
      url &&
      !url.includes("#") &&
      !url.startsWith("javascript")
    ){

      e.preventDefault();


      document.body.classList.add("fade-out");


      setTimeout(() => {

        window.location.href = url;

      },500);

    }

  });

});const slides = document.querySelectorAll(".profile-slider .slide");

let current = 0;

if(slides.length > 0){

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current >= slides.length){

current = 0;

}

slides[current].classList.add("active");

},4000);

}const slides = document.querySelectorAll(".profile-slider .slide");

let current = 0;

if(slides.length > 0){

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current >= slides.length){

current = 0;

}

slides[current].classList.add("active");

},4000);

}const profileSlides = document.querySelectorAll(".profile-slide");

let profileCurrent = 0;


if(profileSlides.length > 0){

setInterval(()=>{

profileSlides[profileCurrent].classList.remove("active");


profileCurrent++;


if(profileCurrent >= profileSlides.length){

profileCurrent = 0;

}


profileSlides[profileCurrent].classList.add("active");


},4000);

}const profileSlides = document.querySelectorAll(".profile-slide");

let profileCurrent = 0;

if (profileSlides.length > 0) {

  setInterval(() => {

    profileSlides[profileCurrent].classList.remove("active");

    profileCurrent++;

    if (profileCurrent >= profileSlides.length) {
      profileCurrent = 0;
    }

    profileSlides[profileCurrent].classList.add("active");

  },4000);

}const profileSlides = document.querySelectorAll(".profile-slide");

let profileCurrent = 0;


if(profileSlides.length > 0){

setInterval(()=>{

profileSlides[profileCurrent].classList.remove("active");

profileCurrent++;


if(profileCurrent >= profileSlides.length){

profileCurrent = 0;

}


profileSlides[profileCurrent].classList.add("active");


},4000);

}