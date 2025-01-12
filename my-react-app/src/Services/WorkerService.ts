import axios from "axios"
import { WorkerModel } from "../Models/WorkerModel"
import { appConfig } from "../Utils/AppConfig"
import { store } from "../Redux/store"
import { workerAction } from "../Redux/slices";

class WorkerService{
    public async getAllWorkers():Promise<WorkerModel[]>{
        if(store.getState().workers.length>0){
            return store.getState().workers;
        }
        const response = await axios.get(appConfig.workersUrl);
        const allWorkers = await response.data;

        store.dispatch(workerAction.init(allWorkers));
        return allWorkers;
    }
} 

export const workerService = new WorkerService();