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
/*Aqui se exporta el modulo*/
module.exports = {randomMsg};