// pages/api/marketcap.js
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
      },
    });

    const MarketCap = response.data.data.EDU.quote.USD.market_cap;
    const formattedMarketCap = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(MarketCap);

    res.json({ price: formattedMarketCap });
  } catch (error) {
    console.error('Error fetching EDU market cap:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}