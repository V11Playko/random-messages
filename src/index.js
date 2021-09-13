const messages = [
    "Oscar",
    "Francisco",
    "Laura",
    "Karol"
];

const randomMsg = ( ) => {
    const messages = messages[Math.floor(Math.random() *
        messages.length)];
        console.log(message);
};

module.exports = {randomMsg};