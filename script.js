document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector(".dropdown");

    var dropdownContent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("mouseenter", function () {
        dropdownContent.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        setTimeout(function () {
            if (!dropdownContent.classList.contains("dropdown-hover")) {
                dropdownContent.style.display = "none";
            }
        }, 500);
    });

    dropdownContent.addEventListener("mouseenter", function () {
        dropdownContent.classList.add("dropdown-hover");
    });

    dropdownContent.addEventListener("mouseleave", function () {
        dropdownContent.classList.remove("dropdown-hover");
        setTimeout(function () {
            dropdownContent.style.display = "none";
        }, 500);
    });
});

const qAndAData = [
    {
        question: "Q: Who am I?",
        answer:
            "A: I am a 15-year-old high school student who started my programming journey by learning C# with Unity. From there, I explored Python, gained a taste of AI, and later ventured into C++ and MySQL."
    },
    {
        question: "Q: What can you expect from me?",
        answer:
            "A: I aim to deliver high-quality software solutions that combine functionality, performance, and user satisfaction. I enjoy exploring new technologies and continuously expanding my knowledge to stay at the forefront of the rapidly evolving software industry."
    },
    {
        question: "Q: What are my future goals?",
        answer:
            "A: As a passionate learner, I have several future goals. I plan to further enhance my skills in game development and explore advanced topics in artificial intelligence. Additionally, I aspire to contribute to open-source projects and engage in collaborative development experiences."
    }
];

function createQAndAElement(question, answer) {
    const qAndAContainer = document.createElement("div");
    qAndAContainer.classList.add("curved-box");

    const questionElement = document.createElement("h3");
    questionElement.textContent = question;

    const answerElement = document.createElement("p");
    answerElement.textContent = answer;

    qAndAContainer.appendChild(questionElement);
    qAndAContainer.appendChild(answerElement);

    return qAndAContainer;
}

function addQAndAElements() {
    const contentElement = document.querySelector(".content");

    qAndAData.forEach((item) => {
        const qAndAElement = createQAndAElement(item.question, item.answer);
        contentElement.appendChild(qAndAElement);
    });
}

if (document.title == "HashimPage - About Me") {
    addQAndAElements();
}
