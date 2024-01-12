const { User } = require("../DB_connection");

module.exports = async (req, res) => {
     console.log("hola", req.query);
  try {
    const { email, password } = req.query;

    const logUser = await User.findOne({
      where: { email },
    });

    console.log("LOG USER", logUser);

    if (email === "camilasarra@gmail.com" && password === "pass1234"){
      res.status(200).json({ access: true })
    }}catch(e){console.log(e)}

    /* if (!email || !password)
      return res.status(400).json({ error: "Faltan datos" });

    const logUser = await User.findOne({
      where: { email },
    });

    if (!logUser)
      return res.status(404).json({ message: "Usuario no encontrado" });

    // console.log(logUser.email);
    return logUser.password === password
      ? res.status(200).json({ access: true })
      : res
          .status(401)
          .json({ access: false, message: "Usuario o contraseña incorrecta" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } */
};
