module.exports = {
	name: 'serverInfo',
	description: 'You go beep, I go blorp',
	 execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount} \nCreated: ${message.guild.createdAt}`);
	},
};