import admin from "../config/firebase";
import Developer from "../models/developer";
import DeveloperService from "../services/v1/DeveloperService";
const developerService = new DeveloperService(Developer);

export const isAuthorized = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    const decodedToken = await admin.auth().verifyIdToken(token);

    if (decodedToken) {
      const user = await developerService.findByEmailOrCreateIfNotFound(decodedToken);
      console.log(user)
      req.user = user;
      return next();
    }

    return res.status(401).json({ success: false, message: "Unauthorized" });
  } catch (err) {
    console.log(err)
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
