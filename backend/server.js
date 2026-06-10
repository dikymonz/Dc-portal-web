const express = require("express");
const cors = require("cors");
const { Client, GatewayIntentBits } = require("discord.js");

const app = express();
app.use(cors());

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

const TOKEN = "MTUxNDIxODI3MTUzOTMzMTI0Mw.G6Yo1X.HRt-akbM0h8Hw8vPqlACAf-QN2Nl7cH2soqOHI";
const GUILD_ID = "1232172280813981737";

client.login(TOKEN);

client.once("ready", () => {
  console.log(`Bot login sebagai ${client.user.tag}`);
});

app.get("/api/server", async (req, res) => {
  try {
    const guild = await client.guilds.fetch(GUILD_ID);

    const data = {
      name: guild.name,
      icon: guild.iconURL(),
      memberCount: guild.memberCount,
    };

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("API running di http://localhost:5000");
});