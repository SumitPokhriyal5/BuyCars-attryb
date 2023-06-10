import { Schema, model } from 'mongoose';
const marketplace_inventorySchema = new Schema({
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
const marketplace_inventoryModel = model('marketplace_inventory', marketplace_inventorySchema);
export { marketplace_inventoryModel };
//# sourceMappingURL=Marketplace_inventory.model.js.map