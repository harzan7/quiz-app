
function Quiz() {
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "London", "Paris", "Rome"],
            answer: "Paris",
        },
        {
            question: "Which language is used for web apps?",
            options: ["PHP", "Python", "Javascript", "All"],
            answer: "All",
        },
        {
            question: "What does JSX stand for?",
            options: [
                "JavaScript XML",
                "Java Syntax eXtension",
                "Just a Simple eXample",
                "None of the above",
            ],
            answer: "JavaScript XML",
        },
    ]
    return <div>Quiz</div>
}

export default Quiz;