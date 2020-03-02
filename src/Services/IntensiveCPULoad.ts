import {Request, Response} from 'express';
import * as _ from 'lodash';

export class IntensiveCPULoad {

    public static generateCpuLoad(req: Request, res: Response): void {
        for (let i = 1; i <= 1000; i++) {
            console.log(this.getLargestPrimeNumber(i));
        }
        res.send('CpuLoadGenerated');
    }

    /**
     * Naive prime number generator. This algorithm should use intensive cpu power as much as possible.
     * @param limit
     */
    private static getLargestPrimeNumber(limit: number): number {
        if (limit < 2) return 0;
        let table: boolean[] = _.fill(Array(limit + 1), true);

        for (let i = 2; i <= limit; i++) {
            if (!table[i]) continue;
            for (let j = i + i; j <= limit; j += i) {
                table[j] = false;
            }
        }

        for (let i = limit; i >= 2; i--) {
            if (table[i]) return i;
        }
        return 0;
    }
}
