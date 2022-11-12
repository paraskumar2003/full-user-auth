import {Link} from 'react-router-dom';

const Navbar = ({user})=>{
    const logout = ()=>{
        window.open('http://localhost:4500/auth/logout','_self');
    };
    console.log(user);
return <div className="navbar">
<Link to={`/`} style={{color:'inherit',textDecoration:'none'}}><span className="logo">Lama App</span></Link>
{user ? <ul className="list">
<li className="listItem" style={{marginLeft:'auto'}}>
<img src={user.photos[0].value} alt="" className="avatar" />
</li>
<li className="listItem" style={{marginLeft:'auto'}}>{user.displayName}</li>
<li className="listItem" style={{marginLeft:'auto'}} onClick={logout}>Logout</li>
</ul> : <ul className='list'>
<li className='listItem'>
<Link style={{color:'inherit',textDecoration:'none'}} to={`/login`}>
Login
</Link>
</li>
</ul>}


</div>;
}

export default Navbar;

