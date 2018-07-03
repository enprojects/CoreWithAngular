import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpServiceService {
   
  private API_URL: string = '/api/values';
  constructor(private httpServ: HttpClient) { }

  getPostList(): Observable<string[]> {
    return this.httpServ.get<string[]>(this.API_URL);
  }

}
