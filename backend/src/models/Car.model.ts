import { Document, Schema, Model , model , Types } from 'mongoose';

interface ICar extends Document {
  dealer: Types.ObjectId;
  oemSpec: Types.ObjectId;
  carImage: string;
  odometer: number;
  majorScratches: string;
  originalPaint: boolean;
  noOfAccidents: number;
  noOfPreviousBuyers: number;
  registrationPlace: string;
}

const carSchema = new Schema<ICar>(
  {
    dealer: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
      immutable: true,
    },
    oemSpec: {
      type: Schema.Types.ObjectId,
      ref: 'oemSpec',
      required: true,
      immutable: true,
    },
    carImage: {
      type: String,
      required: true,
    },
    odometer: {
      type: Number,
      required: true,
    },
    majorScratches: {
      type: String,
      required: true,
    },
    originalPaint: {
      type: Boolean,
      default: true,
    },
    noOfAccidents: {
      type: Number,
      default: 0,
    },
    noOfPreviousBuyers: {
      type: Number,
      default: 1,
    },
    registrationPlace: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const CarModel: Model<ICar> = model<ICar>(
  'car',
  carSchema
);

export { CarModel };
