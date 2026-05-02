const botKnowledge = [
    { keywords: ["evm", "what is evm", "electronic voting machine"], answer: "EVM stands for Electronic Voting Machine. It is used to record votes electronically in Indian elections. It consists of the Ballot Unit and Control Unit. It runs on a 6V battery and works without electricity." },
    { keywords: ["how to vote", "cast vote", "using evm", "press button"], answer: "Enter the voting booth, find your candidate's name and symbol on the Ballot Unit, and press the blue button next to their name. A beep sound and a red light confirm your vote has been recorded." },
    { keywords: ["vvpat", "paper audit trail", "slip", "print"], answer: "VVPAT stands for Voter Verifiable Paper Audit Trail. When you vote, it prints a paper slip showing your candidate's name and symbol. The slip is visible for 7 seconds through a glass window, then drops into a sealed box." },
    { keywords: ["change vote", "cancel vote", "reverse vote"], answer: "No. Once you press the button on the Ballot Unit, your vote is final and cannot be changed or reversed." },
    { keywords: ["nota", "none of the above", "reject all"], answer: "NOTA means 'None of the Above.' It allows you to officially reject all candidates. Introduced in 2013, your vote is counted but does not benefit any candidate." },
    { keywords: ["how many votes", "evm capacity", "maximum votes"], answer: "One EVM can record a maximum of 2,000 votes. Up to 24 Ballot Units can be connected to one Control Unit, supporting up to 384 candidates." },
    { keywords: ["internet", "wifi", "bluetooth", "wireless", "connected"], answer: "No. EVMs are completely standalone machines with no internet, Bluetooth, or wireless connectivity. All votes are stored in non-volatile internal memory." },
    { keywords: ["tamper", "hack", "secure", "safe"], answer: "The Election Commission of India has declared EVMs tamper-proof. Before every election, a Mock Poll is conducted to verify the machine is working correctly." },
    { keywords: ["mock poll", "test vote"], answer: "A Mock Poll is a test conducted before actual voting begins. Sample votes are entered to confirm the machine is accurate and uncompromised." },
    { keywords: ["manufacture", "who makes evm", "bel", "ecil"], answer: "EVMs are manufactured exclusively by two government undertakings — Bharat Electronics Limited (BEL), Bengaluru, and Electronic Corporation of India Limited (ECIL), Hyderabad." },
    { keywords: ["eci", "election commission of india", "who conducts"], answer: "The Election Commission of India (ECI) is an independent constitutional body established on 25th January 1950 under Article 324. It conducts elections to Parliament and State Legislatures." },
    { keywords: ["cec", "chief election commissioner", "who heads"], answer: "The Election Commission is headed by the Chief Election Commissioner (CEC), assisted by two Election Commissioners." },
    { keywords: ["remove cec", "impeachment"], answer: "The CEC can only be removed by impeachment — the same process used to remove a Supreme Court Judge. This ensures complete independence." },
    { keywords: ["tenure", "term length", "cec term"], answer: "The CEC serves for 6 years or until reaching the age of 65, whichever comes earlier." },
    { keywords: ["headquarters", "where is eci", "location"], answer: "The ECI is headquartered at Nirvachan Sadan, Ashoka Road, New Delhi — 110 001." },
    { keywords: ["mcc", "model code of conduct", "rules"], answer: "The MCC is a set of guidelines issued by ECI that all political parties, candidates, and governments must follow from the date of the election announcement to prevent misuse of power." },
    { keywords: ["eligible", "who can vote", "age limit"], answer: "Any Indian citizen who is 18 years of age or above on the qualifying date (1st January of the election year) and is not disqualified is eligible to vote." },
    { keywords: ["register", "apply voter", "new voter", "form 6"], answer: "You can register online at voters.eci.gov.in by filling Form 6, or visit your local Booth Level Officer (BLO)." },
    { keywords: ["electoral roll", "voter list", "name missing"], answer: "The Electoral Roll is the official list of registered voters. If your name is missing, you can apply using Form 6. You must be on this list to vote." },
    { keywords: ["documents", "id proof", "what to bring", "aadhaar"], answer: "You need valid photo ID. Voter ID (EPIC) is primary, but Aadhaar, PAN card, passport, driving licence, etc., are also accepted." },
    { keywords: ["postal ballot", "vote by mail", "senior citizen vote"], answer: "A Postal Ballot allows armed forces, senior citizens (85+), and persons with disabilities to vote by mail." },
    { keywords: ["ink", "indelible ink", "finger mark"], answer: "Indelible ink is applied to the left index finger to prevent double voting. It is manufactured by Mysore Paints and Varnish Limited." },
    { keywords: ["stages", "election process", "steps"], answer: "Stages: Announcement -> Notification -> Nominations -> Scrutiny -> Withdrawal -> Campaigning -> Silent Period -> Polling Day -> Counting Day -> Results." },
    { keywords: ["silent period", "48 hours", "stop campaign"], answer: "All election campaigning must stop 48 hours before polling ends to give voters a peaceful time to think." },
    { keywords: ["delimitation", "boundaries", "redraw"], answer: "Delimitation is the process of redrawing constituency boundaries based on updated census data." },
    { keywords: ["malfunction", "evm broken", "machine stop"], answer: "If an EVM malfunctions, it is immediately replaced. Votes recorded in the old machine's memory up to that point are preserved." },
    { keywords: ["returning officer", "ro", "who conducts constituency"], answer: "A Returning Officer oversees elections in a specific constituency, accepting nominations and declaring results." },
    { keywords: ["lok sabha", "rajya sabha", "difference"], answer: "Lok Sabha members are directly elected by citizens every 5 years. Rajya Sabha members are indirectly elected by State MLAs." },
    { keywords: ["law", "act", "rpa 1951"], answer: "Elections are governed by the Representation of the People Act, 1951 & 1950, and Article 324-329 of the Constitution." },
    { keywords: ["petition", "challenge result", "dispute"], answer: "An Election Petition is a legal challenge filed in the High Court disputing an election result on grounds of malpractice." },
    { keywords: ["anti defection", "10th schedule", "party change"], answer: "The Anti-Defection Law (10th Schedule) disqualifies any legislator who votes against their party's direction or leaves the party." },
    { keywords: ["booth capturing", "force", "take over"], answer: "Booth capturing is a criminal act where individuals forcibly take control of a polling booth. It is a non-bailable offence." },
    { keywords: ["expenditure limit", "spending limit", "how much money"], answer: "The expenditure limit is Rs. 95 lakhs per Lok Sabha constituency and Rs. 40 lakhs per Assembly constituency." },
    { keywords: ["disqualification", "barred", "criminal"], answer: "Candidates can be disqualified for criminal conviction, holding office of profit, insolvency, or under the Anti-Defection law." },
    { keywords: ["statistics", "data", "how many seats"], answer: "Lok Sabha: 543 seats. Rajya Sabha: 245 seats. Voting Age: 18. First election: 1951-52." },
    { keywords: ["forms", "form 6", "form 7", "form 8"], answer: "Form 6: New Registration. Form 6A: Overseas Voter. Form 7: Deletion. Form 8: Correction. Form 20: Final result sheet." },
    { keywords: ["articles", "constitution", "article 324"], answer: "Article 324: ECI Powers. Article 326: Adult Suffrage (vote at 18). 10th Schedule: Anti-Defection Law." }
];

function findAnswer(query) {
    const q = query.toLowerCase();
    
    // Greeting check
    if (q.match(/^(hi|hello|hey|greetings)/)) {
        return "Hello! I am BotChat, your personal election assistant. Ask me anything about EVMs, Voter Registration, the Election Commission, or Electoral Laws!";
    }

    let bestMatch = null;
    let maxMatches = 0;

    for (let item of botKnowledge) {
        let matches = 0;
        for (let kw of item.keywords) {
            // Check if the query contains the keyword (basic matching)
            if (q.includes(kw)) {
                matches += kw.split(' ').length; // Give weight to multi-word keywords
            }
        }
        if (matches > maxMatches) {
            maxMatches = matches;
            bestMatch = item;
        }
    }

    if (bestMatch) {
        return bestMatch.answer;
    }
    
    return "I'm not exactly sure about that. Try asking about EVMs, Voter Registration (Form 6), the Model Code of Conduct, or specific election laws.";
}

// UI Interaction
function toggleBotChat() {
    const chatWindow = document.getElementById('botChatWindow');
    if (chatWindow.style.display === 'flex') {
        chatWindow.style.display = 'none';
    } else {
        chatWindow.style.display = 'flex';
        document.getElementById('botChatInput').focus();
    }
}

function handleBotChatInput(event) {
    if (event.key === 'Enter') {
        sendBotChatMessage();
    }
}

function sendBotChatMessage() {
    const input = document.getElementById('botChatInput');
    const msg = input.value.trim();
    if (!msg) return;

    appendMessage('user', msg);
    input.value = '';

    // Show typing
    const typingId = appendMessage('bot', '...', true);
    
    setTimeout(() => {
        const response = findAnswer(msg);
        updateMessage(typingId, response);
    }, 600);
}

function appendMessage(sender, text, isTyping = false) {
    const messagesDiv = document.getElementById('botChatMessages');
    const msgDiv = document.createElement('div');
    const id = 'msg-' + Date.now();
    msgDiv.id = id;
    msgDiv.className = `chat-message ${sender}-message`;
    
    if (isTyping) {
        msgDiv.classList.add('typing');
    }
    
    msgDiv.innerText = text;
    messagesDiv.appendChild(msgDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    return id;
}

function updateMessage(id, text) {
    const msgDiv = document.getElementById(id);
    if (msgDiv) {
        msgDiv.classList.remove('typing');
        msgDiv.innerText = text;
    }
}
