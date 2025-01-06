import axios from "axios"
import { WorkerModel } from "../Models/WorkerModel"
import { appConfig } from "../Utils/AppConfig"


class WorkerService{
    public async getAllWorkers():Promise<WorkerModel[]>{
        const response = await axios.get(appConfig.workersUrl);
        const allWorkers = await response.data;
        return allWorkers;
    }
} 

export const workerService = new WorkerService();