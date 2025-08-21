# BTC Inscription Data Template

Fill out the `data/inscriptions.json` file with your actual Bitcoin inscription data.

## Required Fields for Each Artwork:

```json
{
  "id": 1,                           // Unique identifier (number)
  "title": "ZENJAKU #001 - The Witch", // Artwork title
  "description": "The first digital awakening", // Description
  "image": "/images/1-1/001.png",    // Path to image file
  "inscription": "644891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce517i0", // Full inscription ID
  "inscriptionNumber": "12345",      // Inscription number (as string)
  "tx": "644891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce517", // Transaction hash
  "block": "789012",                 // Block height (as string)
  "contentType": "image/png",        // MIME type
  "contentSize": "2.1 KB",          // File size
  "isPlaceholder": false             // true for upcoming/unrevealed pieces
}
```

## How to Get BTC Inscription Data:

1. **Inscription ID**: The full inscription identifier (ends with "i0")
2. **Inscription Number**: Sequential number when inscribed (from ordinals explorer)
3. **Transaction Hash**: Bitcoin transaction that created the inscription
4. **Block Height**: Bitcoin block number containing the inscription
5. **Content Type**: Usually "image/png", "image/jpeg", "text/plain", etc.
6. **Content Size**: File size of the inscribed content

## Tools to Find This Data:

- [Ordiscan.com](https://ordiscan.com) - Primary ordinals explorer
- [Ordinals.com](https://ordinals.com) - Alternative ordinals explorer
- [Ord.io](https://ord.io) - Another explorer option
- [Bitcoin Explorer](https://blockstream.info) - For transaction/block data

## Example Filled Entry:

The first entry in the JSON file shows an example with sample data. Replace all empty strings with your actual inscription data.

For placeholder/upcoming pieces, set `isPlaceholder: true` and use "UPCOMING" or "TBA" for the inscription fields.
