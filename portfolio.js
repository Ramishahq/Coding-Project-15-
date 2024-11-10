import { assets } from './asset.js';

// Function to calculate total portfolio value
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + (asset.price * asset.quantity), 0);
}

// Function to get portfolio allocation for each asset
export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        asset: asset.name,
        percentage: ((asset.price * asset.quantity) / totalValue) * 100
    }));
}
