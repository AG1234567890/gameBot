
  module.exports = {
	name: 'userInfo',
	description: 'Returns stuff about user',
	 execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
            

	},
};