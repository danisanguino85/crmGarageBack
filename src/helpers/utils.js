const jwt = require("jsonwebtoken");

const createToken = (usuario) => {
    //este objeto lo creo yo, yo elijo poner id y rol pero podria ser otra cosa
    const obj = {
        id: usuario.id,
        rol: usuario.rol,
    };
    return jwt.sign(obj, "en un lugar de la mancha");
};

module.exports = { createToken };
