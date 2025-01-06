import css from "./WorkerCard.module.css";
import { WorkerModel } from "../../../Models/WorkerModel";

type WorkerCardProp = {
    worker: WorkerModel;
}

export function WorkerCard(props: WorkerCardProp): JSX.Element {
    return (
        <div className={css.WorkerCard}>
            <img 
            src={props.worker.imageUrl} 
            alt={props.worker.firstName}
            /> 
           <p>Name: {props.worker.firstName} {props.worker.lastName}</p>
          </div>
    );
}
