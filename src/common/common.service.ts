import { Injectable } from '@nestjs/common';
import { CreateCommonDto } from './dto/create-common.dto';
import { UpdateCommonDto } from './dto/update-common.dto';
import { Cron, CronExpression } from '@nestjs/schedule';
import { createTransport, Transporter } from 'nodemailer';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class CommonService {
  transporter: Transporter;
  constructor(private configService: ConfigService) {
    this.transporter = createTransport({
      host: 'smtp.qq.com',
      port: 587,
      secure: false,
      auth: {
        user: '993740196@qq.com',
        pass: 'fpavkrnkhkyybfji',
      },
    });
  }
  @Cron(CronExpression.EVERY_5_SECONDS)
  create(createCommonDto: CreateCommonDto) {
    this.transporter.sendMail({
      from: {
        name: '系统邮件',
        address: '993740196@qq.com',
      },
      to: '993740196@qq.com',
      subject: 'null',
      html: '12313',
    });
    console.log(123213);
  }
}
