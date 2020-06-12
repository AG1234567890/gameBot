module.exports = {
	name: 'beepBlorp',
	description: 'You go beep, I go blorp',
	 execute(message, args) {
		message.channel.send('Blorp');
	},
};