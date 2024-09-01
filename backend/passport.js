// backend/passport.js

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User'); // Your user model (make sure to adjust the path)

// Configure the local strategy for authentication
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // Field name for email (change if needed)
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        if (!user.validatePassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user); // Authentication successful
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Serialize user data for sessions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user data from sessions
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
