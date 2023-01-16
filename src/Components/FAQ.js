import Question from "./Question";
import "./FAQ.css";

export default function App() {
    return (
        <>
            {/* <h1 className="faq_head">FAQ/Accordion</h1> */}
            <div className="container_faq">
                <h2>Frequently Asked Questions</h2>
                <div className="questions">
                    {questions.map((question) => (
                        <Question key={question.id} question={question} />
                    ))}
                </div>
            </div>
        </>
    );
}

const questions = [
    {
        id: 1,
        title: "Is this a good platform to report stuff?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 2,
        title: "How much does it cost?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 3,
        title: "Can I get notifaction when a new alert comes in?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 4,
        title: "How can i report an alert?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
];
