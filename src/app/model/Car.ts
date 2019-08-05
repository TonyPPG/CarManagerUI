export class Car {

  id: string

  model: string

  make: string
  
  year: number
  
  price: number
  
  color: string
  
  stock: number

  body: string

  //not a good way of validation, should have create a helper
  public static isValid(car: Car): boolean {
    let isValid = true

    if (car.price == null || car.price <= 0 || 
        car.stock == null || car.stock <= 0 ) {
      isValid = false
    }

    if (!car.model == null || !car.make == null || !car.color == null || !car.body  == null) {
      isValid = false
    }

    let currentYear = new Date().getFullYear()
    if (!car.year || car.year > currentYear || car.year < 1900) {
      isValid = false
    }
    
    return isValid
  }
}