const messages = {
    firstRandomMessage: ['fMessage01', 'fMessage02', 'fMessage03'],
    secondRandomMessage: ['SMessage01', 'SMessage02', 'SMessage03'],
    thirdRandomMessage: ['TMessage01', 'TMessage02', 'TMessage03'],
}

const randomMessage = (message) => {
    const firstMessage = message.firstRandomMessage[Math.floor(Math.random() * messages.secondRandomMessage.length)];
    const secondMessage = message.secondRandomMessage[Math.floor(Math.random() * messages.secondRandomMessage.length)];
    const thirdRandomMessage = messages.thirdRandomMessage[Math.floor(Math.random() * messages.thirdRandomMessage.length)];
    return console.log(`${firstMessage}${secondMessage}${thirdRandomMessage}`);
}

randomMessage(messages);