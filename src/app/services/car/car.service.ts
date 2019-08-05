import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Car } from '../../model/car';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class CarService {

  private carUrl = environment.vehicleManagerApiUrl+'/cars'

  getCars(): Observable<Car[]>{
    console.log(this.carUrl)
    return this.http.get<Car[]>(this.carUrl)
  }

  addCar( car: Car ): Observable<any>{
    return this.http.post<any>(this.carUrl+'/add-car', car)
  }

  updateCar( car: Car ): Observable<any>{
    return this.http.put<any>(this.carUrl+'/'+car.id, car)
  }

  deleteCar( car: Car ): Observable<any>{
    return this.http.delete<any>(this.carUrl+'/'+car.id)
  }

  searchCar( term: string ): Observable<any>{
    return this.http.post<any>(this.carUrl+'/search', {term: term})
  }

  constructor(
    private http: HttpClient
  ) { }

}
