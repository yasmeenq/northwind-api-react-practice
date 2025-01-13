import { Accordion } from "../Accordion/Accordion";
import css from "./Quiz.module.css";

export function Quiz(): JSX.Element {

    const questions= [
        {question: 'What is the opposite of night?', answer: 'Day'},
        {question: 'What planet do we live on?', answer: 'Earth'},
        {question: 'How many sides does a triangle have?', answer: 'Three'}
    ];

    return (
        <div className={css.Quiz}>
            {
                questions.map((item, index) => 
                    <Accordion key={index} question={`${item.question}`} answer={`${item.answer}`}/>
                )
            }
        </div>
    );
}
