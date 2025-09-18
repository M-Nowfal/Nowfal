export const checkAdmin = async (req, res, next) => {
  try {
    const { password } = req.body;
    if (String(process.env.ADMIN_PASSWORD) === String(password))
      return res.status(200).json({ authorized: true });
    res.status(409).json({ message: "Unauthorized, Incorrect password" });
  } catch (err) {
    next(err);
  }
};
