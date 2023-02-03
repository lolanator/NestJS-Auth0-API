import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// When an Auth guard has been applied, this will return the user object
export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
