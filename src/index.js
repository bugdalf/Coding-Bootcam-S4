const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
const phrase = document.getElementById("Info__phrase");
const name = document.getElementById("Person__name");
const jobTitle = document.getElementById("Person__jobTitle");
const image = document.getElementById("Avatar__image");

let contador = 0;

const Tanya = {
  name: "Tanya Sinclair",
  jobTitle: "UX Engineer",
  phrase:
    " I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
  image: "./images/image-tanya.jpg",
};

const John = {
  name: "John Tarkopor",
  jobTitle: "Junior Front-end Developer",
  phrase:
    " If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ",
  image: "./images/image-john.jpg",
};

const Vander = {
  name: "Vander Idme",
  jobTitle: "Developer",
  phrase: "Practica... practica y sigue practicando",
  image: "./images/image-vander.jpeg",
};

const people = [Tanya, John, Vander];

buttonLeft.addEventListener("click", anterior);
buttonRight.addEventListener("click", siguiente);
document.addEventListener("keydown", detectarTeclado);

function detectarTeclado(e) {
  if (e.key === "ArrowLeft") {
    anterior();
  }

  if (e.key === "ArrowRight") {
    siguiente();
  }
}

function siguiente() {
  contador++;
  if (contador >= people.length) {
    contador = 0;
  }
  render(contador);
}

function anterior() {
  contador--;
  if (contador < 0) {
    contador = people.length - 1;
  }
  render(contador);
}

function render(c) {
  console.log(people[c].name, c);
  name.innerHTML = people[c].name;
  jobTitle.innerHTML = people[c].jobTitle;
  phrase.innerHTML = people[c].phrase;
  image.src = people[c].image;
}
