import admin from "../firebase/config";

export const isAuthorized = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const token = req.headers.authorization?.replace("Bearer ", "");

    const decodedToken = await admin.auth().verifyIdToken(token);

    if (decodedToken) {
      req.user = decodedToken;
      return next();
    }

    return res.status(403).json({ success: false, message: "Unauthorized" });
  } catch (err) {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }
};
