let storedData = {
  videoUrls: [],
  socials: [],
  aboutText: '',
  showsList: '',
  logoURL: ''
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(storedData);
  } else if (req.method === 'POST') {
    const newData = req.body;
    storedData = { ...storedData, ...newData };
    res.status(200).json({ message: 'Data saved', storedData });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}