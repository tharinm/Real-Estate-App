import bcrypt from "bcrypt";
import prisma from "../lib/prima.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //HASH PWD
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    // CREATE A NEW USER AND SAVE TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
    res.status(201).json({ message: "User create successfully" })
  }
  catch (error){
    res.status(500).json({message:"Failed to create user"})
  }
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
