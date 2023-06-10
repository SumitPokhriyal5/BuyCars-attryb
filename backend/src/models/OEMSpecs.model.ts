import { Document, Schema, Model , model } from 'mongoose';

interface IOEMSpec extends Document {
  brand: string;
  model: string;
  year: number;
  listPrice: number;
  colors?: string[];
  mileage: number;
  power: number;
  maxSpeed: number;
}

const oemSpecSchema = new Schema<IOEMSpec>(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    listPrice: {
      type: Number,
      required: true,
    },
    colors: [String],
    mileage: {
      type: Number,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    maxSpeed: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const OEMSpecModel: Model<IOEMSpec> = model<IOEMSpec>('oemSpec', oemSpecSchema);

export { OEMSpecModel };
