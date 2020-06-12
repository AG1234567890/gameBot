let fortuneCookies = [
    "You will Die",
    "You will reap too early",
    "An Unlit Candle Scares No Monkies",
    "You will slip on a banna peel",
    "The button will be pressed"
  ];
module.exports = {
	name: 'crystalBall',
	description: 'big shiny ball that giv u dark future',
	 execute(message, args) {
		message.channel.send("" + fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)])
            

	},
};

//message.channel.send("" + fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)])