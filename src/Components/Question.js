import { useState } from "react";

export default function Question({ question }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <section className="section_questions">
            <div className={isOpen ? "open" : "closed"}>
                <h4>{question.title}</h4>
                <button className="question_btn" onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
            </div>
            {isOpen && <p>{question.info}</p>}
        </section>
    );
}
