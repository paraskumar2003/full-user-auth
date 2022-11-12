



const Login = () =>{

const google = ()=>{
    window.open('http://localhost:4500/auth/google','_self')
}
const github = ()=>{
    window.open('http://localhost:4500/auth/github','_self')
}
const facebook = ()=>{
    window.open('http://localhost:4500/auth/facebook','_self')
}

return<div className="login">
<h1 className="loginTitle">Choose a Login Method</h1>
<div className="wrapper" >
<div className="left">
<div className="loginButton google" onClick={google}>
<img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className="icon"/>
Google 
</div>
<div className="loginButton facebook" onClick={facebook}>
<img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" className="icon"/>
Facebook
</div>
<div className="loginButton github" onClick={github}>
<img src="https://banner2.cleanpng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg" alt="" className="icon"/>
Github 
</div>
</div>
<div  className="center">
<div className="line"></div>
<div className="or">OR</div>
</div>
<div className="right">
<input type='text' name="username" placeholder="Username"/>
<input type='text' name="password" placeholder="Password"/>
<button className="submit">Login</button>
</div>
</div>
</div>
}
export default Login;