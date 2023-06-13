export interface ICreateCar {
    oemSpec: string
    carImage: string;
    odometer: number;
    majorScratches: string;
    originalPaint: boolean;
    noOfAccidents?: number;
    noOfPreviousBuyers?: number;
    registrationPlace: string;
}
export interface ICarData {
    carImage: string;
    dealer: { username: string };
    majorScratches: string;
    noOfAccidents: number;
    noOfPreviousBuyers: number;
    odometer: number;
    oemSpec: {
      brand: string;
      model: string;
      listPrice: number;
      maxSpeed: number;
      mileage: string;
      power: string;
      year: number;
      colors: string[];
    };
    originalPaint: boolean;
    registrationPlace: string;
    _id: string;
  }