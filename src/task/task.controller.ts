import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags,ApiOperation,ApiResponse } from '@nestjs/swagger';
import { RequirePermission } from 'src/utils/permission.decorator';
import { Result } from 'src/utils/result.vo';
import { QueryDto } from 'src/utils/query.dto';
import { Task } from './entities/task.entity';
import { IgnoreLogin } from 'src/utils/IgnoreLogin-decorator';

@Controller('task')
@ApiTags('任务模块')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}


  @Post('list')
  @ApiOperation({ summary: '任务列表' })
  @RequirePermission('2')
  async list(@Body() query: QueryDto) {
    console.log(this.taskService.repository);
    // let data = await this.userService.repository.findAndCount(listDto);
    let data = await this.taskService.queryList<Task, QueryDto>(query, {
      
    });
    return new Result().success({
      list: data[0],
      total: data[1],
    });
  }

  @Post('/createOrUpdate')
  // @IgnoreLogin()
  @ApiOperation({ summary: '创建或更新任务' })
  async createOrUpdate(@Body() createTaskDto: CreateTaskDto) {
    //创建操作
    try {
      await this.taskService.createOrUpdateTask(createTaskDto);
      return new Result().success('创建成功');
    } catch (error) {
      return new Result().err(error.message, 500);
    }
  }
}
