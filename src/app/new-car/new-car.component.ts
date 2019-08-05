import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from '../model/car';
import { BODYTYPES } from '../model/BodyType'
import { MAKES } from '../model/Make'
import { COLORS } from '../model/Color'
import { CarService } from '../services/car/car.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent {

  carValidator = Car.isValid
  //not a good way to map body type, modal, make etc, should grab from database at backend
  bodyTypes = BODYTYPES
  makes = MAKES
  colors = COLORS
  car: Car

  constructor(public dialogRef: MatDialogRef<NewCarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private carService: CarService) { 
      this.car = data.car
    }

  onNoClick(): void {
    this.dialogRef.close()
  }

  createCar(): void {
    this.carService.addCar(this.car)
      .subscribe(result => {
        console.log(result)
        this.onNoClick()
      })
  }
}
