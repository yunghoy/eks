import express, {Request, Response} from 'express';
import {IntensiveCPULoad} from './Services/IntensiveCPULoad';

export class ExampleServer {

    public start(): void {
        const app = express();
        const port = 3000;

        app.get('/', (req: Request, res: Response) =>
            res.send(process.env));
        app.get('/ping', (req: Request, res: Response) =>
            res.send(`pong`));
        app.get('/cpuload', (req: Request, res: Response) =>
            IntensiveCPULoad.generateCpuLoad(req, res));

        app.listen(port, () => {
            console.log(`server started at http://localhost:${port}`);
        });
    }
}

(new ExampleServer()).start();
