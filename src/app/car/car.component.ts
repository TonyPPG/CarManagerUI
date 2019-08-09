import { Component, OnInit } from '@angular/core';
import { Car } from 'app/model/Car';
import { CarService } from 'app/services/car/car.service';
import { BODYTYPES } from 'app/model/BodyType'
import { MAKES } from 'app/model/Make'
import { COLORS } from 'app/model/Color'
import { MatSnackBar, MatDialog } from '@angular/material';
import { NewCarComponent } from 'app/new-car/new-car.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['../app.component.css', './car.component.css']
})
export class CarComponent implements OnInit {

  showLoading: boolean
  cars: Car[]
  searchTerm: string
  
  getCars(): void {
    this.cars = undefined
    this.showLoading = true
    this.carService.getCars()
      .subscribe(cars => {
        this.cars = cars as Car[]
        console.log(this.cars)
        this.showLoading = false
      })
  }

  

  createNewCar(): void {
    const dialogRef = this.dialog.open(NewCarComponent, {
      width: '500px',
      data: {
        car: new Car()
      }
    })

    dialogRef.afterClosed().subscribe(() => {
      console.log("Car added successful")
      this.getCars()
    })
  }

  constructor( private carService: CarService, public snackBar: MatSnackBar, private dialog: MatDialog ) { }

  ngOnInit() {
    this.getCars()
  }

}
