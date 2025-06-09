export const burnedNfts = [
    {
        id: 1,
        title: "ZENJAKU #001 - The First Sacrifice",
        description: "The first digital transcendence",
        image: "/images/1-1/001.png",
        mintAddress: "So11111111111111111111111111111111111111112",
        burnDate: "2024-03-15",
        burnTx: "burn_tx_hash_here",
        originalOwner: "owner_wallet_address",
        burnBlock: "123456789",
        burnValue: 6.9 // in SOL
    },
    {
        id: 2,
        title: "ZENJAKU #002 - The Second Sacrifice",
        description: "The second digital transcendence",
        image: "/images/1-1/001.png",
        mintAddress: "So11111111111111111111111111111111111111113",
        burnDate: "2024-03-16",
        burnTx: "burn_tx_hash_here_2",
        originalOwner: "owner_wallet_address_2",
        burnBlock: "123456790",
        burnValue: 6.9
    },
    {
        id: 3,
        title: "ZENJAKU #003 - The Third Sacrifice",
        description: "The third digital transcendence",
        image: "/images/1-1/001.png",
        mintAddress: "So11111111111111111111111111111111111111114",
        burnDate: "2024-03-17",
        burnTx: "burn_tx_hash_here_3",
        originalOwner: "owner_wallet_address_3",
        burnBlock: "123456791",
        burnValue: 6.9
    },
    {
        id: 4,
        title: "ZENJAKU #004 - The Fourth Sacrifice",
        description: "The fourth digital transcendence",
        image: "/images/1-1/001.png",
        mintAddress: "So11111111111111111111111111111111111111115",
        burnDate: "2024-03-18",
        burnTx: "burn_tx_hash_here_4",
        originalOwner: "owner_wallet_address_4",
        burnBlock: "123456792",
        burnValue: 6.9
    },
    {
        id: 5,
        title: "ZENJAKU #005 - The Fifth Sacrifice",
        description: "The fifth digital transcendence",
        image: "/images/1-1/001.png",
        mintAddress: "So11111111111111111111111111111111111111116",
        burnDate: "2024-03-19",
        burnTx: "burn_tx_hash_here_5",
        originalOwner: "owner_wallet_address_5",
        burnBlock: "123456793",
        burnValue: 6.9
    },
    {
        id: 6,
        title: "ZENJAKU #006 - The Sixth Sacrifice",
        description: "The sixth digital transcendence",
        image: "/images/1-1/001.png",
        mintAddress: "So11111111111111111111111111111111111111117",
        burnDate: "2024-03-20",
        burnTx: "burn_tx_hash_here_6",
        originalOwner: "owner_wallet_address_6",
        burnBlock: "123456794",
        burnValue: 6.9
    },
    {
        id: 7,
        title: "ZENJAKU #007 - The Seventh Sacrifice",
        description: "The seventh digital transcendence",
        image: "/images/1-1/001.png",
        mintAddress: "So11111111111111111111111111111111111111118",
        burnDate: "2024-03-21",
        burnTx: "burn_tx_hash_here_7",
        originalOwner: "owner_wallet_address_7",
        burnBlock: "123456795",
        burnValue: 6.9
    },
    {
        id: 8,
        title: "ZENJAKU #008 - The Eighth Sacrifice",
        description: "The eighth digital transcendence",
        image: "/images/1-1/001.png",
        mintAddress: "So11111111111111111111111111111111111111119",
        burnDate: "2024-03-22",
        burnTx: "burn_tx_hash_here_8",
        originalOwner: "owner_wallet_address_8",
        burnBlock: "123456796",
        burnValue: 6.9
    },
    {
        id: 9,
        title: "ZENJAKU #009 - The Ninth Sacrifice",
        description: "The ninth digital transcendence",
        image: "/images/1-1/001.png",
        mintAddress: "So11111111111111111111111111111111111111120",
        burnDate: "2024-03-23",
        burnTx: "burn_tx_hash_here_9",
        originalOwner: "owner_wallet_address_9",
        burnBlock: "123456797",
        burnValue: 6.9
    },
    {
        id: 10,
        title: "ZENJAKU #010 - The Tenth Sacrifice",
        description: "The tenth digital transcendence",
        image: "/images/1-1/001.png",
        mintAddress: "So11111111111111111111111111111111111111121",
        burnDate: "2024-03-24",
        burnTx: "burn_tx_hash_here_10",
        originalOwner: "owner_wallet_address_10",
        burnBlock: "123456798",
        burnValue: 6.9
    }
];

// Calculate total burned value
export const calculateTotalBurned = () => {
    return burnedNfts.reduce((total, nft) => total + nft.burnValue, 0);
};

// Calculate total burned count
export const getBurnedCount = () => burnedNfts.length; 