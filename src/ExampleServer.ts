import express, {Request, Response} from 'express';
import {IntensiveCPULoad} from './Services/IntensiveCPULoad';

export class ExampleServer {

    public start(): void {
        const app = express();
        const port = 3000;

        app.get('/', (req: Request, res: Response) => IntensiveCPULoad.generateLoad(req, res));

        app.listen(port, () => {
            console.log(`server started at http://localhost:${port}`);
        });
    }
}

(new ExampleServer()).start();
