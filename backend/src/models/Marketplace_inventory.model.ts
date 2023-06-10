import { Document, Schema, Model , model , Types } from 'mongoose';
import { IOEMSpec } from './OEMSpecs.model.js';
import { IUser } from './User.model.js';

interface ICar extends Document {
  dealer: IUser;
  oemSpec: IOEMSpec;
  carImage: string;
  odometer: number;
  majorScratches: string;
  originalPaint: boolean;
  noOfAccidents: number;
  noOfPreviousBuyers: number;
  registrationPlace: string;
}

const marketplace_inventorySchema = new Schema<ICar>(
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

const marketplace_inventoryModel: Model<ICar> = model<ICar>(
  'marketplace_inventory',
  marketplace_inventorySchema
);

export { marketplace_inventoryModel };
