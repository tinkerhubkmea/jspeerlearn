const reviews = [
    {
      id: 1,
      name: "Messi",
      job: "Football player",
      img:
        "https://images.news18.com/ibnlive/uploads/2021/08/1628186497_lionel-messi.jpg",
      text:
      "You can overcome anything, if and only if you love something enough.",
    },
    {
    id: 2,
    name: "Cristiano Ronaldo",
    job: "Football player",
    img:
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    text:
        "If you don’t believe you are the best, then you will never achieve all that you are capable of."
    },
    {
      id: 3,
      name: "Bill Gates",
      job: "Business man",
      img:
        "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
      text:
        "Everyone needs a coach. It doesn't matter whether you're a basketball player, a tennis player, a gymnast, or a bridge player.",
    },
    {
      id: 4,
      name: "Mark Elliot Zuckerberg",
      job: "Software Developer",
      img:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1rDH_nWadT1GXFPomdutqV1PUMA8uXIWS2Js5_fq4pJ1lwG16",
      text:
        "The biggest risk is not taking any risk... In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    },
  ];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem=0;

window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});


randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
