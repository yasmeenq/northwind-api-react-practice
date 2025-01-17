import { useState } from "react";
import css from "./Accordion.module.css";

type AccordionProps = {
    question: string;
    answer: string
}

export function Accordion({ question, answer }: AccordionProps): JSX.Element {

    const [visible, setVisible] = useState<boolean>(false);

    function toggleVisibility() {
        setVisible(!visible);
    }

    return (
        <div className={css.Accordion}>

            <div className={css.question} onClick={toggleVisibility}>
                <p>{question}</p>
            </div>

            {visible && (
                <div className={css.answer}>
                    <p>{answer}</p>
                    <button onClick={toggleVisibility}>close</button>
                </div>
            )}

        </div>

    );
}
