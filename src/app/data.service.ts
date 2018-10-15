import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHero } from '../entities/IHero'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  public getHeroes() : Observable<IHero[]>
  {
    return this.http.get<IHero[]>('http://localhost:5000/api/values');
  }

}
