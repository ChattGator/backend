import admin from "../config/firebase";

export const isAuthorized = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    const decodedToken = await admin.auth().verifyIdToken(token);

    if (decodedToken) {
      req.user = decodedToken;
      return next();
    }

    return res.status(401).json({ success: false, message: "Unauthorized" });
  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
