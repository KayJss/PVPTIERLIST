const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Config values set directly below
const DISCORD_TOKEN = '';
const CLIENT_ID = '';
const GUILD_ID = '';
const API_URL = 'http://localhost:3000/api/add-tier';
const API_TOKEN = 'your-secret-token';

const badgePoints = {
  ht1: 100, lt1: 90, ht2: 80, lt2: 70, ht3: 60, lt3: 50, ht4: 40, lt4: 30, ht5: 20, lt5: 10
};

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [
  new SlashCommandBuilder()
    .setName('addtier')
    .setDescription('Bir oyuncuyu tier listesine ekle')
    .addStringOption(opt =>
      opt.setName('tab')
        .setDescription('Tab adı')
        .setRequired(true)
        .addChoices(
          { name: 'Vanilla', value: 'vanilla' },
          { name: 'UHC', value: 'uhc' },
          { name: 'Pot', value: 'pot' },
          { name: 'NethOP', value: 'nethop' },
          { name: 'SMP', value: 'smp' },
          { name: 'Sword', value: 'sword' },
          { name: 'Axe', value: 'axe' },
          { name: 'Mace', value: 'mace' }
        )
    )
    .addStringOption(opt => 
      opt.setName('player')
        .setDescription('Oyuncu adı')
        .setRequired(true)
    )
    .addStringOption(opt =>
      opt.setName('badges')
        .setDescription('Rozet seç (HT1-LT5)')
        .setRequired(true)
        .addChoices(
          { name: 'HT1', value: 'ht1' },
          { name: 'LT1', value: 'lt1' },
          { name: 'HT2', value: 'ht2' },
          { name: 'LT2', value: 'lt2' },
          { name: 'HT3', value: 'ht3' },
          { name: 'LT3', value: 'lt3' },
          { name: 'HT4', value: 'ht4' },
          { name: 'LT4', value: 'lt4' },
          { name: 'HT5', value: 'ht5' },
          { name: 'LT5', value: 'lt5' }
        )
    ),
  new SlashCommandBuilder()
    .setName('removetier')
    .setDescription('Bir oyuncunun tier kaydını sil')
    .addStringOption(opt =>
      opt.setName('tab')
        .setDescription('Tab adı')
        .setRequired(true)
        .addChoices(
          { name: 'Vanilla', value: 'vanilla' },
          { name: 'UHC', value: 'uhc' },
          { name: 'Pot', value: 'pot' },
          { name: 'NethOP', value: 'nethop' },
          { name: 'SMP', value: 'smp' },
          { name: 'Sword', value: 'sword' },
          { name: 'Axe', value: 'axe' },
          { name: 'Mace', value: 'mace' }
        )
    )
    .addStringOption(opt =>
      opt.setName('tier')
        .setDescription('Tier adı')
        .setRequired(true)
        .addChoices(
          { name: 'Tier 1', value: 'tier1' },
          { name: 'Tier 2', value: 'tier2' },
          { name: 'Tier 3', value: 'tier3' },
          { name: 'Tier 4', value: 'tier4' },
          { name: 'Tier 5', value: 'tier5' }
        )
    )
    .addStringOption(opt =>
      opt.setName('player')
        .setDescription('Oyuncu adı')
        .setRequired(true)
    ),
];

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands.map(cmd => cmd.toJSON()) }
    );
    console.log('Slash komutları yüklendi.');
  } catch (err) {
    console.error(err);
  }
})();

// BADGE'den tier hesaplama fonksiyonu
function badgeToTier(badge) {
  if (badge === 'ht1' || badge === 'lt1') return 'tier1';
  if (badge === 'ht2' || badge === 'lt2') return 'tier2';
  if (badge === 'ht3' || badge === 'lt3') return 'tier3';
  if (badge === 'ht4' || badge === 'lt4') return 'tier4';
  if (badge === 'ht5' || badge === 'lt5') return 'tier5';
  return 'tier1';
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'addtier') {
    // Check for role ID 1413294505234403440
    const member = interaction.member;
    if (!member.roles.cache.has('1413294505234403440')) {
      await interaction.reply({ content: 'Bu komutu kullanmak için yetkin yok.', ephemeral: true });
      return;
    }
    const tab = interaction.options.getString('tab');
    const player = interaction.options.getString('player');
    const badge = interaction.options.getString('badges');
    const tier = badgeToTier(badge);

    const badges = [badge];
    let points = 0;
    badges.forEach(b => { if (badgePoints[b]) points += badgePoints[b]; });
    // Send to API
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-token': API_TOKEN },
      body: JSON.stringify({ tab, tier, player: { name: player, badges, points } })
    });
    if (res.ok) {
      await interaction.reply(`${player} başarıyla eklendi! Toplam puan: ${points}`);
    } else {
      await interaction.reply('Bir hata oluştu.');
    }
  } else if (interaction.commandName === 'removetier') {
    const member = interaction.member;
    if (!member.roles.cache.has('1413294505234403440')) {
      await interaction.reply({ content: 'Bu komutu kullanmak için yetkin yok.', ephemeral: true });
      return;
    }
    const tab = interaction.options.getString('tab');
    const tier = interaction.options.getString('tier');
    const player = interaction.options.getString('player');
    // API'ye silme isteği gönder
    const res = await fetch('http://localhost:3000/api/remove-tier', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-token': API_TOKEN },
      body: JSON.stringify({ tab, tier, playerName: player })
    });
    if (res.ok) {
      await interaction.reply(`${player} başarıyla silindi!`);
    } else {
      const err = await res.json().catch(()=>({error:'Bilinmeyen hata'}));
      await interaction.reply(`Silme başarısız: ${err.error || 'Bir hata oluştu.'}`);
    }
  }
});

client.login(DISCORD_TOKEN);
