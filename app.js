// require the discord.js module
const fs = require("fs");
const Discord = require("discord.js");

// create a new Discord client
const config = require("./config.json");
const { prefix, token } = require("./config.json");

const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

let fortune = "";
let num = 0;
let splitCommand = [];

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
  console.log("Discord Bot Started!");
});

// login to Discord with your app's token

// the rest of your code

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === `ping`) {
    client.commands.get("ping").execute(message, args);
  } else if (command === (`beep`)) {
    client.commands.get("beepBlorp").execute(message, args);
  } else if (command === `server-info`) {
    client.commands.get("serverInfo").execute(message, args);
  } else if (command === `user-info`) {
    client.commands.get("userInfo").execute(message, args);
  }  else if (command === "kill") {
    client.commands.get("kill").execute(message, args);
  }  else if (command === "crystalball") {
    client.commands.get("crystalBall").execute(message, args);
  }else if (command === "helpmeidumb"){
    client.commands.get("help").execute(message,args)
  }else if (command === "addnum"){
    client.commands.get("number").execute(message,args) 
  }
  else if (message.content.startsWith("g.")){
    message.channel.send("That's Not a Command, Try n!helpmeidumb for a list of commands")
  }
});

client.login(token);
