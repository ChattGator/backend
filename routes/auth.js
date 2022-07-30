import express from "express";
const router = express.Router();
import passport from "passport";

const { CLIENT_URL } = process.env;

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: `${CLIENT_URL}/login`,
  })
);

router.get("/user", (req, res, next) => {
  console.log(req.isAuthenticated(), req.isUnauthenticated());
  if (req.user) {
    console.log("here")
    return res.status(200).json({ user: req.user });
  } else {
    return res.status(400).json({ user: null });
  }
});

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      res.status(400).json({ success: false, message: "Logout unsuccessful" });
    }
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.status(200).json({ success: true, message: "Logout successful" });
  });
});

export default router;
