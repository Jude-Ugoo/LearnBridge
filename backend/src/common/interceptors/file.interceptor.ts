import { CallHandler, ExecutionContext, NestInterceptor, NotFoundException } from "@nestjs/common";
import { Observable } from "rxjs";

export class FileUndefinedInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    if (!request.file) {
      throw new NotFoundException("File not provided");
    }

    return next.handle();
  }
}
