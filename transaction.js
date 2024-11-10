import { getAssetById } from './asset.js';

export class Transaction {
    constructor(assetId, type, quantity) {
        const asset = getAssetById(assetId);

        if (!asset) {
            throw new Error('Sorry, asset not found');
        }

        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.assetName = asset.name;
        this.pricePerUnit = asset.price;

        // Update the asset quantity 
        if (type === 'buy') {
            asset.quantity += quantity;
        } else if (type === 'sell') {
            if (asset.quantity < quantity) {
                throw new Error(`Sorry, insufficient quantity for sale of ${asset.name}`);
            }
            asset.quantity -= quantity;
        } else {
            throw new Error('Invalid transaction type.');
        }
    }

    // Show receipt for the transaction
    getReceipt() {
        const action = this.type === 'buy' ? 'Bought' : 'Sold';
        const totalValue = this.pricePerUnit * this.quantity;
        return `${action} ${this.quantity} of ${this.assetName} at $${this.pricePerUnit} each. Total: $${totalValue.toFixed(2)}`;
    }
}