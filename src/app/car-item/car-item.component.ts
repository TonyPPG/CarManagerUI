import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'app/model/Car';
import { CarService } from 'app/services/car/car.service';
import { BODYTYPES } from 'app/model/BodyType'
import { MAKES } from 'app/model/Make'
import { COLORS } from 'app/model/Color'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input() car: Car
  @Output() refresh: EventEmitter<any> = new EventEmitter()

  carValidator = Car.isValid

  //not a good way to map body type, modal, make etc, should grab from database at backend
  bodyTypes = BODYTYPES
  makes = MAKES
  colors = COLORS
  constructor(private carService: CarService, public snackBar: MatSnackBar) { }

  saveCar( car: Car ): void {
    this.carService.updateCar(car)
      .subscribe(result => {
        this.openSnackBar( result.message, 'Ok')
      })
  }

  deleteCar( car: Car): void {
    this.carService.deleteCar(car)
      .subscribe(result => {
        console.log(result)
        this.openSnackBar( result.message, 'Ok')
        this.refresh.emit()
      })
  }

  onUploadHandler(info: any): void {
    this.car.imageUrl = info.cdnUrl
    this.saveCar(this.car)
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

}
