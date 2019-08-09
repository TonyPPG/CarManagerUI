import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Car } from 'app/model/Car';
import { BODYTYPES } from 'app/model/BodyType'
import { MAKES } from 'app/model/Make'
import { COLORS } from 'app/model/Color'
import { CarService } from 'app/services/car/car.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent {

  carValidator = Car.isValid
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

  onUploadHandler(info: any): void {
    this.car.imageUrl = info.cdnUrl
  }
}
