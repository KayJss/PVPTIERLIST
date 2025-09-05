<!-- Tabs: English | Türkçe -->

<div style="text-align:center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, sans-serif; margin: 20px 0;">
  <a href="#english"
     aria-current="page"
     style="
       display: inline-block;
       padding: 12px 16px;
       margin: 0 10px;
       color: #0366d6;
       font-weight: 600;
       text-decoration: none;
       border-bottom: 2px solid #0366d6;
       cursor: pointer;
       transition: color 0.2s ease, border-color 0.2s ease;
     "
     onmouseover="this.style.color='#0056b3'; this.style.borderColor='#0056b3';"
     onmouseout="this.style.color='#0366d6'; this.style.borderColor='#0366d6';"
  >
    English
  </a>
  <a href="#türkçe"
     style="
       display: inline-block;
       padding: 12px 16px;
       margin: 0 10px;
       color: #586069;
       font-weight: 600;
       text-decoration: none;
       border-bottom: 2px solid transparent;
       cursor: pointer;
       transition: color 0.2s ease, border-color 0.2s ease;
     "
     onmouseover="this.style.color='#0366d6'; this.style.borderColor='#0366d6';"
     onmouseout="this.style.color='#586069'; this.style.borderColor='transparent';"
  >
    Türkçe
  </a>
</div>



---

## <a id="english"></a>English

# Minecraft Crystal PvP Tier List

A modern, responsive leaderboard web app for Minecraft PvP servers.  
Displays player tiers, badges, and points for different PvP kits.

### Features

- Modern, mobile-friendly UI (Tailwind CSS)
- Dynamic leaderboard (Overall & per-kit tabs)
- Discord-style badges and player avatars
- Easy server IP copy
- API integration for real-time data

### Demo

![screenshot](https://i.imgur.com/1Q9Z1ZB.png) <!-- Replace with your own screenshot if needed -->

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/KayJss/PVPTIERLIST
   cd minecraft-tier-site
   ```

2. **Install backend dependencies:**
   ```
   npm install express cors
   ```

3. **Start the backend API:**
   ```
   node server.js
   ```
   - The API will run at `http://localhost:3000/api/tiers`

4. **Serve the frontend:**
   - You can use any static server, e.g.:
     ```
     npx serve .
     ```
   - Or open `index.html` with Live Server (VSCode extension) or similar.

### Usage

- The site fetches player tier data from the backend API.
- Use the tabs to view leaderboards for each kit or overall.
- Click the server IP to copy it.
- The backend (`server.js`) manages the `tiers.json` file for player data.

### API

- `GET /api/tiers` — Returns all tier data as JSON.
- `POST /api/add-tier` — Adds or updates a player's tier (used by Discord bot).
- `POST /api/remove-tier` — Removes a player's tier (used by Discord bot).

### Customization

- Change the server IP in `index.html` (`your.server.ip`).
- Edit colors, badges, or kits as needed in the HTML/JS files.
- Update the Discord bot integration as needed.

### Security

- No sensitive data or tokens are included in this repo.
- Do **not** expose your API token or Discord bot token publicly.

### License

MIT — Free to use and modify.

---
Designed by KayJs

---

## <a id="türkçe"></a>Türkçe

# Minecraft Crystal PvP Tier Listesi

Minecraft PvP sunucuları için modern, duyarlı bir liderlik tablosu web uygulaması.  
Farklı PvP kitleri için oyuncu tier'larını, rozetlerini ve puanlarını gösterir.

### Özellikler

- Modern, mobil uyumlu arayüz (Tailwind CSS)
- Dinamik liderlik tablosu (Genel ve kit bazlı sekmeler)
- Discord tarzı rozetler ve oyuncu avatarları
- Kolay sunucu IP kopyalama
- Gerçek zamanlı veri için API entegrasyonu

### Kurulum

1. **Projeyi klonlayın:**
   ```
   git clone https://github.com/KayJss/PVPTIERLIST
   cd minecraft-tier-site
   ```

2. **Backend bağımlılıklarını yükleyin:**
   ```
   npm install express cors
   ```

3. **Backend API'yi başlatın:**
   ```
   node server.js
   ```
   - API şu adreste çalışacak: `http://localhost:3000/api/tiers`

4. **Frontend'i başlatın:**
   - Herhangi bir statik sunucu kullanabilirsiniz, örneğin:
     ```
     npx serve .
     ```
   - Veya `index.html` dosyasını Live Server (VSCode eklentisi) ile açabilirsiniz.

### Kullanım

- Site, oyuncu tier verilerini backend API'den çeker.
- Sekmeleri kullanarak her kit veya genel liderlik tablosunu görüntüleyin.
- Sunucu IP'sine tıklayarak kopyalayabilirsiniz.
- Backend (`server.js`), oyuncu verilerini `tiers.json` dosyasında tutar.

### API

- `GET /api/tiers` — Tüm tier verilerini JSON olarak döner.
- `POST /api/add-tier` — Bir oyuncunun tier'ını ekler/günceller (Discord botu kullanır).
- `POST /api/remove-tier` — Bir oyuncunun tier'ını siler (Discord botu kullanır).

### Özelleştirme

- `index.html` dosyasındaki sunucu IP'sini (`your.server.ip`) değiştirin.
- Renkleri, rozetleri veya kitleri HTML/JS dosyalarında düzenleyin.
- Discord bot entegrasyonunu ihtiyaca göre güncelleyin.

### Güvenlik

- Bu repoda hassas veri veya token yoktur.
- API tokenınızı veya Discord bot tokenınızı **asla** herkese açık paylaşmayın.

### Lisans

MIT — Ücretsiz kullanabilir ve değiştirebilirsiniz.

---
Tasarım: KayJs
