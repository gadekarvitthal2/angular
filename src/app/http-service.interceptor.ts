import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let modifiedRequest=request.clone({
      //headers:request.headers.append('name','vitthal'),
      //params:request.params.append('indian','echonomy'),
      // url:'https://www.google.com' We can change the url also
    })
    return next.handle(modifiedRequest);
  }
}
