// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "It`s a fantastic course for a beginner. I could feel the effort that was put into to make sure people understood. Thank you, when I become one the greatest, I will remember this beginning.",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "It was very helpful and I understood things so easily. A beginner in this field will surely be benefited. Also the extra material is very helpful. This helped me take up full stack web development.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "This course deals with all client side fundamentals of web development. It starts from teaching of HTML to javascript validation of HTML forms. Overall this course is a must for beginners.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "web developer and designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "A great course for beginners. Easily taught. Practice exercises are very engaging. Overall , the course is good enough for you to create a basic website with lots of validations and CSS.",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const btns = document.querySelectorAll(".btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    setDescription();
});

function setDescription() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const direction = event.currentTarget.classList;
        if (direction.contains("prev")) {
            currentItem--;
        }
        if (direction.contains("next")) {
            currentItem++;
        }

        if (currentItem < 0) {
            currentItem = 3;
        } else if (currentItem > 3) {
            currentItem = 0;
        }

        console.log(currentItem);
        setDescription();
    });
});
