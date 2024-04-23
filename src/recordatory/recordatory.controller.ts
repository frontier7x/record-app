import { Controller, Get, HttpCode, Param, Body, Post } from '@nestjs/common';
import {RecordatoryService} from './recordatory.service'
import {RecordatoryDto} from './recordatory.dto'

@Controller('recordatory')
export class RecordatoryController {

    constructor(private readonly recordatoryService: RecordatoryService) {}

    @HttpCode(200)
    @Get()
    async getRecordatories(): Promise<JSON> {
        return await this.recordatoryService.getRecordatories()
    }

    @HttpCode(200)
    @Get(':id')
    async getRecordatory(@Param('id') id: string): Promise<JSON> {
        return await this.recordatoryService.getRecordatory(id)
    }

    @Post()
    async createRecordatory(@Body() RecordatoryDto: RecordatoryDto){
        return await this.recordatoryService.createRecordatory(RecordatoryDto)
    }
}
