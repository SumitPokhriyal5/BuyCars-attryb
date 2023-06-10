import { Schema, model } from 'mongoose';
const oemSpecSchema = new Schema({
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
}, { versionKey: false, timestamps: true });
const OEMSpecModel = model('oemSpec', oemSpecSchema);
export { OEMSpecModel };
//# sourceMappingURL=OEMSpecs.model.js.map