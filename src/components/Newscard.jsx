
import logo from '../assets/logo.png'
export const Newscard = ({title,description,src,url}) => {
  return (
    <div className="card bg-info text-dark mb-3 d-inline-block my-3 mx-3 shadow-sm" style={{height:"200px ", width:"360px"}}>
  <img src={src ? src : logo}  className="card-img-top" alt="card-img-top" style={{ objectFit: 'cover', width: '100%', height: '100%' }}></img>
  <div className="card-body">
    <h5 className="card-title">{title?title.slice(0,34):'latest news'}</h5>
    <p className="card-text">{description?description.slice(0,90):"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."}</p>
    <a className="btn btn-info" href={url}>Read More..</a>
  </div>
</div>
  )
}
