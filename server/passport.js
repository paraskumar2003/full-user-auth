import Google from 'passport-google-oauth20';
import * as GitHub from 'passport-github';
import * as Facebook from 'passport-facebook';
import * as Linkedin from 'passport-linkedin-oauth2';
import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();




const GoogleStrategy = Google.Strategy;
const GitHubStrategy  = GitHub.Strategy;
const FacebookStrategy  = Facebook.Strategy;
const LinkedInStrategy  = Linkedin.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null,profile);
}
));


passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: "/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null,profile);
}
));


passport.use(new LinkedInStrategy({
  clientID: LINKEDIN_CLIENT_ID,
  clientSecret: LINKEDIN_CLIENT_SECRET,
  callbackURL: "/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}));




passport.serializeUser((user, done) => {
  console.log('work');
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});