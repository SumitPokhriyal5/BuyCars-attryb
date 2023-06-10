import { Schema, model } from 'mongoose';
const carSchema = new Schema({
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
}, { versionKey: false, timestamps: true });
const CarModel = model('car', carSchema);
export { CarModel };
//# sourceMappingURL=Car.model.js.map