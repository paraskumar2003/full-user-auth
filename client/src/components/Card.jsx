import {Link} from 'react-router-dom';

const Card = ({key,post})=>{

    return <div className="card">
    <Link style={{color:'inherit',textDecoration:'none'}} to={`/post/${post.id}`}>
    <span className="title">{post.title}</span>
    <img className="img" src={post.img} alt='post-img' />
    <p className="desc">{post.desc}</p>
    <button className="cardButton">Read More</button>
    </Link>
    </div>;
}

export default Card;