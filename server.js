const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// Hardcoded documentation data
const docs = [
    {
        platform: "Segment",
        keywords: ["set up source", "add new source", "segment setup"],
        answer: "To set up a new source in Segment, go to the 'Sources' tab, click 'Add Source', and follow the instructions."
    },
    {
        platform: "mParticle",
        keywords: ["create user profile", "mparticle user", "profile creation"],
        answer: "To create a user profile in mParticle, use the Identify API to send user attributes and traits."
    },
    {
        platform: "Lytics",
        keywords: ["build audience", "create segment", "lytics audience"],
        answer: "In Lytics, go to 'Audience', click 'Create New Audience', apply filters, and save your segment."
    },
    {
        platform: "Zeotap",
        keywords: ["integrate data", "zeotap integration", "connect data"],
        answer: "Use Zeotap's API or dashboard to connect and integrate your data securely."
    }
];

// Function to find relevant answers
function getAnswer(question) {
    let answer = searchDocumentation(question); // Function that searches docs
    if (!answer) {
        return "Sorry, I couldn't find an answer to your question.";
    }
    return answer;
}


// API endpoint to handle chatbot queries
app.post("/ask", (req, res) => {
    const { question } = req.body;
    const answer = findAnswer(question);
    res.json({ answer });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
