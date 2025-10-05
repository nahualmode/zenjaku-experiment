export const burnedNfts = [
    // Burned NFTs will be added here as they occur
];

// Calculate total burned value
export const calculateTotalBurned = () => {
    return burnedNfts.reduce((total, nft) => total + nft.burnValue, 0);
};

// Calculate total burned count
export const getBurnedCount = () => burnedNfts.length; 