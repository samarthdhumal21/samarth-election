const quizData = [
    {
        question: "What is the Model Code of Conduct (MCC)?",
        options: ["A rulebook for voters", "A set of guidelines for political parties and candidates during elections", "A law passed by Parliament", "Rules for counting votes"],
        correct: 1,
        explanation: "MCC comes into effect from the date elections are announced and stays until results are declared."
    },
    {
        question: "What is delimitation in Indian elections?",
        options: ["Removing voters from the list", "Redrawing the boundaries of electoral constituencies", "Cancelling an election", "Counting votes twice"],
        correct: 1,
        explanation: "Delimitation is the act of redrawing boundaries of Lok Sabha and state Assembly seats to represent changes in population."
    },
    {
        question: "Which body prepares the Electoral Roll (voter list)?",
        options: ["State Government", "Ministry of Home Affairs", "Election Commission of India", "Census Commission"],
        correct: 2,
        explanation: "The Election Commission of India is responsible for the preparation and periodic revision of electoral rolls."
    },
    {
        question: "What is a By-Election?",
        options: ["An election held to fill a vacancy before the term ends", "An election held after a tie", "A second round of voting", "An election for local bodies"],
        correct: 0,
        explanation: "A by-election is held to fill a political office that has become vacant between general elections."
    },
    {
        question: "What is the security deposit amount for a general candidate in Lok Sabha elections?",
        options: ["₹5,000", "₹15,000", "₹25,000", "₹50,000"],
        correct: 2,
        explanation: "SC/ST candidates pay ₹12,500 as security deposit. General candidates pay ₹25,000."
    },
    {
        question: "When does the Model Code of Conduct come into force?",
        options: ["30 days before voting", "When nominations begin", "From the date of announcement of election schedule", "On the day of voting"],
        correct: 2,
        explanation: "The MCC comes into force immediately after the Election Commission announces the election schedule."
    },
    {
        question: "What is the maximum election expenditure limit for a Lok Sabha candidate (large states)?",
        options: ["₹50 lakh", "₹70 lakh", "₹95 lakh", "₹1 crore"],
        correct: 2,
        explanation: "The limit was revised to ₹95 lakh for parliamentary constituencies in large states in 2022."
    },
    {
        question: "Who appoints the Chief Election Commissioner of India?",
        options: ["Parliament", "Prime Minister", "President of India", "Chief Justice of India"],
        correct: 2,
        explanation: "The President of India appoints the Chief Election Commissioner and Election Commissioners."
    },
    {
        question: "What is an Exit Poll?",
        options: ["A survey of voters conducted after they leave the polling booth", "A poll to decide election dates", "The final vote count", "A poll conducted before elections"],
        correct: 0,
        explanation: "An exit poll asks voters who they voted for immediately after leaving the polling station to predict results."
    },
    {
        question: "What is the silent period in Indian elections?",
        options: ["48 hours before voting ends, during which campaigning is banned", "The period when results are awaited", "Time given for postal ballot counting", "Period after MCC is imposed"],
        correct: 0,
        explanation: "The silence period starts 48 hours before the end of polling, during which no active campaigning is allowed."
    },
    {
        question: "What is a Presiding Officer?",
        options: ["The Chief Election Commissioner", "An officer in charge of conducting voting at a polling station", "The candidate's representative at counting", "An observer appointed by the Supreme Court"],
        correct: 1,
        explanation: "The Presiding Officer supervises the polling station and ensures the poll is conducted smoothly and fairly."
    },
    {
        question: "EPIC stands for?",
        options: ["Election Process Identity Card", "Electors Photo Identity Card", "Electoral Participation Identity Certificate", "Electronic Poll Identity Card"],
        correct: 1,
        explanation: "EPIC (Electors Photo Identity Card) is the official Voter ID issued by the Election Commission of India."
    },
    {
        question: "In which year was the voting age reduced from 21 to 18 in India?",
        options: ["1985", "1989", "1991", "1995"],
        correct: 1,
        explanation: "The 61st Constitutional Amendment (1988) reduced the voting age, which came into effect in 1989."
    },
    {
        question: "What happens to a candidate's security deposit if they get less than 1/6th of votes?",
        options: ["It is returned with interest", "It is forfeited", "It is donated to charity", "It is held for the next election"],
        correct: 1,
        explanation: "A candidate loses their security deposit if they fail to secure at least one-sixth of the total valid votes polled."
    },
    {
        question: "What is the role of an Election Observer?",
        options: ["To campaign for a candidate", "To monitor the election process and ensure it is free and fair", "To count votes", "To register voters"],
        correct: 1,
        explanation: "Observers are senior civil servants appointed by ECI to monitor various aspects of the election for fairness."
    }
];

let currentQuestion = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const feedbackEl = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');

    function loadQuestion() {
        feedbackEl.style.display = 'none';
        nextBtn.style.display = 'none';
        
        const q = quizData[currentQuestion];
        questionEl.textContent = q.question;
        
        optionsEl.innerHTML = '';
        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn glass-btn';
            btn.textContent = opt;
            btn.onclick = () => checkAnswer(index, btn);
            optionsEl.appendChild(btn);
        });

        // Update progress
        const progress = ((currentQuestion) / quizData.length) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

        // Animate question enter
        gsap.fromTo(quizContainer, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5 });
    }

    window.checkAnswer = function(selectedIndex, btn) {
        // Disable all buttons
        const allBtns = optionsEl.querySelectorAll('.option-btn');
        allBtns.forEach(b => {
            b.disabled = true;
            b.style.pointerEvents = 'none';
        });

        const correctIndex = quizData[currentQuestion].correct;
        
        feedbackEl.style.display = 'block';
        
        if (selectedIndex === correctIndex) {
            btn.classList.add('correct');
            score++;
            feedbackEl.innerHTML = `<div class="feedback-correct"><i class="fa-solid fa-circle-check"></i> Correct!</div><p>${quizData[currentQuestion].explanation}</p>`;
        } else {
            btn.classList.add('wrong');
            allBtns[correctIndex].classList.add('correct');
            feedbackEl.innerHTML = `<div class="feedback-wrong"><i class="fa-solid fa-circle-xmark"></i> Incorrect!</div><p>${quizData[currentQuestion].explanation}</p>`;
        }

        gsap.from(feedbackEl, { opacity: 0, y: 20, duration: 0.4 });
        
        nextBtn.style.display = 'block';
        if (currentQuestion === quizData.length - 1) {
            nextBtn.textContent = 'See Results';
        }
    }

    nextBtn.addEventListener('click', () => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            gsap.to(quizContainer, { 
                opacity: 0, x: -50, duration: 0.3, 
                onComplete: loadQuestion 
            });
        } else {
            showResults();
        }
    });

    function showResults() {
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        const scoreEl = document.getElementById('final-score');
        const labelEl = document.getElementById('performance-label');
        
        scoreEl.textContent = `${score} / ${quizData.length}`;
        
        let label = '';
        if (score >= 12) label = 'Democracy Champion! 🏆';
        else if (score >= 7) label = 'Informed Voter 👍';
        else label = 'Novice Voter 🌱';
        
        labelEl.textContent = label;

        gsap.from(resultsContainer, { opacity: 0, scale: 0.9, duration: 0.8, ease: 'back.out(1.5)' });
    }

    document.getElementById('retry-btn').addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        resultsContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        loadQuestion();
    });

    // Start
    loadQuestion();
});
