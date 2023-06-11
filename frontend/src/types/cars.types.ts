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