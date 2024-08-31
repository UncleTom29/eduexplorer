// pages/api/edu-price.js
import axios from 'axios';

export default async function handler(req, res) {
  const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';
  const apiKey = '021a35e6-f28d-4dbf-9220-81090822996f'; // Replace with your CoinMarketCap API key

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
      params: {
        symbol: 'EDU',
        convert: 'USD',
      },
    });

    const eduPrice = response.data.data.EDU.quote.USD.price;
    res.json({ price: eduPrice });
  } catch (error) {
    console.error('Error fetching Open Campus price:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}
