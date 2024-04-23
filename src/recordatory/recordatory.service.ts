import { Injectable } from '@nestjs/common';
const PocketBase = require('pocketbase/cjs');
import {RecordatoryDto} from './recordatory.dto'


const pb = new PocketBase('http://127.0.0.1:8090');

@Injectable()
export class RecordatoryService {
    async getRecordatories(): Promise<JSON> {
        const result = await pb.collection('recordatories').getList(undefined,100)

        return JSON.parse(JSON.stringify(result.items));
    }

    async getRecordatory(id: string): Promise<JSON> {
        console.log("id", id);
        const result = await pb.collection('recordatories').getOne(`${id}`)
        return result;
    }

    async createRecordatory(params: RecordatoryDto): Promise<JSON> {
        const result = await pb.collection('recordatories').create(params);
        return result
    }
}   


