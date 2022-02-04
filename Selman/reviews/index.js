const reviews = [
    {
      id: 1,
      name: "Messi",
      job: "Football player",
      img:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fcbarcelona.com%2Fen%2Fnews%2F1219720%2Fmessi-on-cusp-of-pichichi-and-golden-shoe&psig=AOvVaw2D541YlbM0icUpuInAP01t&ust=1644070966826000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCX4uKf5vUCFQAAAAAdAAAAABAD",
      text:
      "You can overcome anything, if and only if you love something enough.",
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
      job: "Football player",
      img:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCristiano_Ronaldo&psig=AOvVaw3_oeGFZ9ogV5UDWt8deE-I&ust=1644071206601000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjWktag5vUCFQAAAAAdAAAAABAD",
      text:
        "If you don’t believe you are the best, then you will never achieve all that you are capable of.",
    },
    {
      id: 3,
      name: "Bill Gates",
      job: "Business man",
      img:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cgiar.org%2Fnews-events%2Fnews%2Fbill-gates-on-cgiar-and-adapting-to-a-warmer-world%2F&psig=AOvVaw3k8JD4bZKvhmWT-glCC_pK&ust=1644071392827000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKC_hK6h5vUCFQAAAAAdAAAAABAD",
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
