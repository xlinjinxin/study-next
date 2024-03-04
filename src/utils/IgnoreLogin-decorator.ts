import { SetMetadata } from '@nestjs/common';

export const IgnoreLogin = () => SetMetadata('ignore-login', true);
