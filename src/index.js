const messages = [
    "Te quiero",
    "Ten Disciplina",
    "Guapa",
    "Ella si te ama",
    "Eres el mejor",
    "Esfuerzate más",
    "Lo puedes lograr",
    "Me gusta lo que haces"
];

const randomMsg = ( ) => {
    const message = messages[Math.floor(Math.random() *
        messages.length)];
        console.log(message);
};
/*Aqui se exporta el modulo */
module.exports = {randomMsg};