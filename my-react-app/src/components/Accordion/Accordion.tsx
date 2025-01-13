import { useState } from "react";
import css from "./Accordion.module.css";

type AccordionProps = {
    question: string;
    answer: string
}

export function Accordion({ question, answer }: AccordionProps): JSX.Element {

    const [visible, setVisible] = useState<Boolean>(false);

    function toggleVisibilty() {
        setVisible(!visible);
    }

    return (
        <div className={css.Accordion}>

            <div className={css.question} onClick={toggleVisibilty}>
                <p>{question}</p>
            </div>

            {visible && (
                <div className={css.answer}>
                    <p>{answer}</p>
                    <button onClick={toggleVisibilty}>close</button>
                </div>
            )}

        </div>

    );
}
