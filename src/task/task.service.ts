import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SchedulerRegistry } from '@nestjs/schedule';

import { CronJob } from 'cron';
import { CommonService } from 'src/common/common.service';
type pageProp = { current: number; pageSize: number };

@Injectable()
export class TaskService extends Repository<Task>{
  @InjectRepository(Task)
  public repository: Repository<Task>;
  @Inject(SchedulerRegistry)
  schedulerRegistry: SchedulerRegistry

  @Inject(CommonService)
  private commonService:CommonService

  public queryList<T, U>(
    query: U  & pageProp,
    queryMap?: {
      // [P in keyof queryProp<T>]?: P extends keyof T ? P : keyof T;
      [P in keyof T]?: Exclude<keyof U, keyof pageProp>;
    },
  ) {
    let string = '';
    let stringMap: any = {};
    for (const key in queryMap) {
      if (Object.prototype.hasOwnProperty.call(queryMap, key)) {
        const element = queryMap[key];
        let curString = `item.${key} like :${key}`;
        string += curString;
        stringMap[key] = `%${query[element]}%`;
      }
    }
    const { current, pageSize } = query;
    return this.repository
      .createQueryBuilder('item')
      .where(string, stringMap)
      .skip((current - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();
  }

  public createOrUpdateTask = async (createTaskDto: CreateTaskDto) => {
    let task
    if(createTaskDto.id){
      task=createTaskDto
    }else{
        task=createTaskDto
        task.creator='admin'
    }
    
    try {
      const job = new CronJob(createTaskDto.triggerTime, () => {
        console.log(123123123123)
        this.commonService.create(createTaskDto)

      });
      let doesExist=this.schedulerRegistry.doesExist('cron',createTaskDto.name)
      if(doesExist){
        this.schedulerRegistry.deleteCronJob(createTaskDto.name)
      }
      this.schedulerRegistry.addCronJob(createTaskDto.name,job)
    job.start()
    await this.repository.save(task);
      return 'success';
    } catch (error) {
      return 'fail';
    }
  };
}
