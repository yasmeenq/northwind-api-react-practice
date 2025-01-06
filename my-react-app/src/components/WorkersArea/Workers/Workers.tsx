import { useEffect, useState } from "react";
import { WorkerModel } from "../../../Models/WorkerModel";
import { WorkerCard } from "../WorkerCard/WorkerCard";
import css from "./Workers.module.css";
import { workerService } from "../../../Services/WorkerService";
import { notify } from "../../../Utils/Notify";

export function Workers(): JSX.Element {

    const [workers, setWorkers] = useState<WorkerModel[]>([]);

    useEffect(() => {
        async function getAllWorkers() {
            try {
                const workers = await workerService.getAllWorkers();
                setWorkers(workers);
            }
            catch (err: any) {
                notify.error(err);
            }
        }
        getAllWorkers();
    }, [])

    return (
        <div className={css.Workers}>
            <div>
                <p>workers count: {workers.length}</p>
            </div>
            <div className={css.WorkersList}>
            {
                workers.map(w => <WorkerCard key={w.id} worker={w} />)

            }
            </div>
        </div>
    );
}
