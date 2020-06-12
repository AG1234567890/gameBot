let number = 0;
module.exports = {
  name: "number",
  description: "numba",
  execute(message, args) {
          number++;
    message.channel.send(`Number increased to ${number}. This is a useless feature`);

  },
};
