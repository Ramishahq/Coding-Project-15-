// Array of assets
export const assets = [
    { id: 1, name: 'Shein', type: 'stock', price: 150, quantity: 50 },
    { id: 2, name: 'Amazon', type: 'bond', price: 100, quantity: 30 },
    { id: 3, name: 'Temu', type: 'stock', price: 200, quantity: 10 },
];

// Function to get asset 
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}