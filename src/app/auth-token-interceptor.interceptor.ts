import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, take, tap } from 'rxjs';
import { PostService } from './post.service';

@Injectable()
export class AuthTokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private authservice:PostService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
   return this.authservice.userSub.pipe(take(1),switchMap((respose)=>{
    if(!respose){
      return next.handle(request)
    }
      let modifiedReq=request.clone({
        params:request.params.append('auth',respose.token)
      })
      return next.handle(modifiedReq);
    }))

  }
}
