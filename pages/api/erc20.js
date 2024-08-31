// pages/api/erc20.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { address } = req.query;

    if (!address) {
      return res.status(400).json({ error: 'Address parameter is required' });
    }

  
    const apiUrl = 'https://opencampus-codex.blockscout.com/api';


    const params = {
      module: 'account',
      action: 'tokentx',
      address: address,
      startblock: 0,
      endblock: 99999999,
      page: 1,
      offset: 20,
      sort: 'desc',
      // apikey: apiKey,
    };

    const response = await axios.get(apiUrl, { params });
    res.json(response.data);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).send('Internal Server Error');
  }
}
