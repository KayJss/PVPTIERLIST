const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const TIERS_FILE = path.join(__dirname, 'tiers.json');
const SECRET_TOKEN = process.env.TIER_API_TOKEN || 'your-secret-token';

app.use(cors()); // CORS middleware'i en başta
app.use(express.json());

// Load tiers from file
function loadTiers() {
  if (!fs.existsSync(TIERS_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(TIERS_FILE, 'utf8'));
  } catch {
    return {};
  }
}

// Save tiers to file
function saveTiers(data) {
  fs.writeFileSync(TIERS_FILE, JSON.stringify(data, null, 2));
}

// API: Add tier entry (only bot with correct token)
app.post('/api/add-tier', (req, res) => {
  const token = req.headers['x-api-token'] || req.body.token;
  if (token !== SECRET_TOKEN) return res.status(403).json({error: 'Forbidden'});
  const { tab, tier, player } = req.body;
  if (!tab || !tier || !player) return res.status(400).json({error: 'Missing fields'});
  const tiers = loadTiers();
  if (!tiers[tab]) tiers[tab] = {};
  // Oyuncunun aynı kitteki tüm tierlerden silinmesi
  for (const t of Object.keys(tiers[tab])) {
    tiers[tab][t] = tiers[tab][t].filter(p => p.name !== player.name);
  }
  // Yeni tierde sadece yeni kaydı ekle (önce silindiği için push yeterli)
  if (!tiers[tab][tier]) tiers[tab][tier] = [];
  tiers[tab][tier].push(player);
  saveTiers(tiers);
  res.json({success: true});
});

// API: Remove tier entry (only bot with correct token)
app.post('/api/remove-tier', (req, res) => {
  const token = req.headers['x-api-token'] || req.body.token;
  if (token !== SECRET_TOKEN) return res.status(403).json({error: 'Forbidden'});
  const { tab, tier, playerName } = req.body;
  if (!tab || !tier || !playerName) return res.status(400).json({error: 'Missing fields'});
  const tiers = loadTiers();
  if (!tiers[tab] || !tiers[tab][tier]) return res.status(404).json({error: 'Kayıt bulunamadı'});
  const idx = tiers[tab][tier].findIndex(p => p.name === playerName);
  if (idx >= 0) {
    tiers[tab][tier].splice(idx, 1);
    saveTiers(tiers);
    return res.json({success: true});
  }
  res.status(404).json({error: 'Oyuncu bulunamadı'});
});

// API: Get all tiers
app.get('/api/tiers', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // CORS header garanti olsun
    res.setHeader('Cache-Control', 'no-store'); // Her zaman yeni veri döndür
    fs.readFile(TIERS_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Veri okunamadı.' });
        try {
            res.json(JSON.parse(data));
        } catch {
            res.status(500).json({ error: 'Veri formatı hatalı.' });
        }
    });
});

app.listen(PORT, () => {
  console.log(`Tier API running on http://localhost:${PORT}`);
});
  console.log(`Tier API running on http://localhost:${PORT}`);
  console.log(`Tier API running on http://localhost:${PORT}`);
