const User = require("../models/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Tüm alanları doldurun" });
    };

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Şifre en az 8 karakter olmalıdır" });
    };

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Bu email zaten kullanılıyor" });
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role
    });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ status: "success", message: "Kullanıcı başarıyla oluşturuldu", ...user, token });
  } catch (error) {
    res.status(500).json({ message: "Hata var :" + error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Tüm alanları doldurun" });
    };

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Bu email ile kayıtlı bir kullanıcı bulunamadı" });
    };

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Şifre yanlış" });
    };

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ status: "success", message: "Giriş başarılı", ...user, token });
  } catch (error) {
    res.status(500).json({ message: "Hata var :" + error.message });
  };
};

  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const token = req.headers.authorization.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "Token bulunamadı" });
      };

      const user = await User.findById(id);

      if (!user) {
        return res.status(400).json({ message: "Bu id ile kayıtlı bir kullanıcı bulunamadı" });
      };

      await User.findByIdAndDelete(id);

      res.status(200).json({ status: "success", message: "Kullanıcı başarıyla silindi" });

    } catch (error) {
      res.status(500).json({ message: "Hata var :" + error.message });
    };
  };


module.exports = { registerUser, loginUser, deleteUser };
