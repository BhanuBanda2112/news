import 'bootstrap-icons/font/bootstrap-icons.css';



export const Navbar = ({setcategory}) => {

[]
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand bi bi-newspaper bi-megaphone-fill" href="#" style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}>   BeeWrites..</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <div>
       <a className="nav-link active" aria-current="page" href="#" onClick={()=>setcategory("general")}>Home</a>
       
       </div>
       <div>
       <a className="nav-link active" aria-current="page" href="#" onClick={()=>setcategory("sports")}>Sports</a>
       
       </div>
       <div>
       <a className="nav-link active" aria-current="page" href="#" onClick={()=>setcategory("entertainment")}>Entertainment</a>
       
       </div>
       <div>
       <a className="nav-link active" aria-current="page" href="#" onClick={()=>setcategory("health")}>Health</a>
       
       </div>
       
       <div>
       <a className="nav-link active" aria-current="page" href="#" onClick={()=>setcategory("business")}> business</a>
       
       </div>
       <div>
       <a className="nav-link active" aria-current="page" href="#" onClick={()=>setcategory("science")}>science</a>
       
       </div>
       <div>
       <a className="nav-link active" aria-current="page" href="#" onClick={()=>setcategory("technology")}>technology</a>
       
       </div>
      
      </div>
    </div>
  </div>
</nav>
  )
}
