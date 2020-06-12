
  module.exports = {
	name: 'kill',
	description: 'Kill a user',
	 execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply("you need to tag a user in order to kill them!");
          }
          const taggedUser = message.mentions.users.first();
      
          message.channel.send(`You killed ${taggedUser.username}`);
          message.react("😱");
          message.react("🍎")



	},
};