import passport from "passport";
import GoogleStrategy from "./googleStrategy";
import User from "../models/user.schema";

// passport.serializeUser((user, done) => {
//   console.log("hereee",user);
//   done(null, { _id: user._id });
// });

// passport.deserializeUser((id, done) => {
//   console.log("here",id);
//   User.findOne({ _id: id }, (err, user) => {
//     done(null, user);
//   });
// });
passport.serializeUser((user, done) => {
  console.log("hereee", user)
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("hereee111", user)
  done(null, user);
});
// ==== Register Strategies ====
passport.use(GoogleStrategy);

export default passport;
