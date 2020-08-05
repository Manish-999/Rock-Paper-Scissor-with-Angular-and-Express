import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {demo,demo1, demo3} from './models/data'

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http :HttpClient) { }

  getData(){
    return this.http.get<demo>('http://localhost:3000/startCalculation')
  }

  getAlldata(){
    return this.http.get<demo1>('http://localhost:3000/completeDetail')
  }

  getReset(){
    return this.http.get<demo3>('http://localhost:3000/reset')
  }
}
