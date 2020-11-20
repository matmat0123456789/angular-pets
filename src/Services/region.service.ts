import { Injectable } from '@angular/core';
import {Service} from './base.service'; //TODO do poprawki
import {Region} from '../Models/region';
import {Observable, of } from 'rxjs';

@Injectable({providedIn:'root'})
export class RegionService extends Service<Region>{

   GetAllRegions():Observable<Region[]> { //poczytac o observables w serwisach(ale narazie to taki await)
    return super.getData("someString");
  }
}

//TODO !!! brakuje najprawodpodobniej importow od rxjs w app.component ale nie moge w tym kurestwie tego spraqwdzic