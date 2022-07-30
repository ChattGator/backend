import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import Developer from "../models/developer.schema";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const strategy = new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/v1/auth/google/callback",
  },
  function (token, tokenSecret, profile, done) {
    
    const { id, displayName, photos, emails } = profile;

    // console.log(id, displayName, photos, emails);

    Developer.findOne({ "google.googleId": id }, (err, developerMatch) => {
      if (err) {
        console.log("error in finding",err)
        return done(null, false);
      }

      if (developerMatch) {
        console.log("duplicate")
        return done(null, developerMatch);
      }

      const developer = new Developer({
        name: displayName,
        google: {
          googleId: id,
        },
        avatar: photos[0].value,
        email: emails[0].value,
      });

      developer.save((err, savedDeveloper) => {
        if (err) {
          console.log("error in saving",err)
          return done(null, false);
        } else {
          return done(null, savedDeveloper);
        }
      });
    });
  }
);

export default strategy;
