import express, {application} from 'express';
import passport from 'passport';


const CLIENT_URL = "http://localhost:3000/";
    export const router = express.Router();

    router.get('/login/failed',(req,res)=>{
        res.status(401).json({success:false,message:'failure'})
    })
    router.get('/login/success',(req,res)=>{
        if(req.user){
            res.status(200).json({success:true,message:'success',user:req.user});
        }
        else{
            res.redirect('/login/failed');
        }
    })
    
    router.get("/logout",(req,res)=>{
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect(CLIENT_URL);
          })
    })
    
    router.get("/google", passport.authenticate("google", { scope: ["profile","email"] }));
    router.get("/google/callback",passport.authenticate("google",{
        successRedirect:'http://localhost:3000/',
        failureRedirect:'/login/failed',
    }))


    router.get("/github",passport.authenticate('github',{scope:["profile","email"]}));
    router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login/failed' }),
      function(req, res) {
    res.redirect('http://localhost:3000');
  });


    router.get("/facebook",passport.authenticate('facebook',{scope:["profile","email"]}));
    router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login/failed' }),
      function(req, res) {
    res.redirect('http://localhost:3000');
  });


    router.get("/linkedin",passport.authenticate('linkedin',{scope:["profile","email"]}));
    router.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login/failed' }),
      function(req, res) {
    res.redirect('http://localhost:3000');
  });


export default router;
