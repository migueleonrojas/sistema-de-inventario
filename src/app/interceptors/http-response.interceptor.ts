import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, catchError, filter, findIndex, firstValueFrom, lastValueFrom, map, EMPTY } from 'rxjs';
import { HttpError } from '../interfaces/http-error-response/http-error.interface';
import swal from'sweetalert2';
import { HttpSuccessful } from '../interfaces/http-sucessful-response/http-sucessful.interface';
@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorResponse: HttpError = err.error;
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorResponse.message
        });
        return EMPTY;
      }),
      filter((response:HttpEvent<any>) => response instanceof HttpResponse),
      map((data:HttpResponse<any>) => {
        let httpSuccessful:HttpSuccessful = data.body;
        swal.fire({
          icon: 'success',
          title: 'Exito',
          text: httpSuccessful.message
        });
        return data;
      })
    );
  }

}