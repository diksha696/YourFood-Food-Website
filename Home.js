import React from 'react'
import Desserts from './Desserts';
import "./style.css";

const Home = () => {
    let pic="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    let picture ="https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    let pict2 ="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    let pict3="https://images.pexels.com/photos/12737916/pexels-photo-12737916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    
    return (
    // <div>Home</div>
<>

<nav class="navbar navbar-expand-lg navbar-light bg-dark" id="mynav">
  <div className="container-fluid">
    <a className="navbar-brand text-light text-center" id="logo" href="/">YourFood.com</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="/Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="/">BreakFast</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="/">Lunch</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="/">Evening-Snacks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="/">Dinner</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" id="gy1" href="/Desserts.js" onClick={<Desserts/>}>Desserts</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-light" type="submit"  id="mybtn1">Search</button>
      </form>
    </div>
  </div>
</nav>

<section id="fruit">
  <section id="py"></section>
        <h2 id="by">Welcome to YourFood</h2>
        <section id="my"></section>
        <div id="content">
        <img src= {pic} alt=" " id="mypic"/>
        {/* <br/> */}
        <p id="cy">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea id rem veritatis voluptate quae reiciendis suscipit molestias quibusdam, 
        vitae, sed totam labore eveniet in, 
  quasi molestiae nisi eum. Explicabo et error architecto ipsa
  quaerat, rerum dolorum quidem autem velit. Repudiandae asperiores
   placeat voluptatibus ducimus porro incidunt
   orem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea id rem veritatis voluptate quae reiciendis suscipit molestias quibusdam, 
        vitae, sed totam labore eveniet in, 
  quasi molestiae nisi eum. Explicabo et error architecto ipsa
  quaerat, rerum dolorum quidem autem velit. Repudiandae asperiores
   placeat voluptatibus ducimus porro incidunt
   orem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ea id rem veritatis voluptate quae reiciendis suscipit molestias quibusdam, 
        vitae, sed totam labore eveniet in, 
  quasi molestiae nisi eum. Explicabo et error architecto ipsa
  quaerat, rerum dolorum quidem autem velit. Repudiandae asperiores
   placeat voluptatibus ducimus porro incidunt
  consequuntur ipsum doloribus maxime, est voluptatum commodi sit nesciunt amet ratione eum, temporibus accusantium
  dolor nobis, explicabo culpa! 

        </p>
        </div>
        </section>

        <section id="ty"></section>
    <div id="mycontainer">
    <div className="card">

  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div className="card-bodyy">
    <h5 class="card-title1">BreakFast</h5>
    <p class="card-text1">Enjoy Delicious meal with us order on YourFood.com.
    Enjoy your Meal!</p>
    <button class="btn btn-light" type="submit"id="mybtn2">Search</button>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>

<div className="card" id="mycard">

  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div className="card-bodyy">
    <h5 class="card-title1">Lunch</h5>
    <p class="card-text1">Enjoy Delicious meal with us order on YourFood.com.
    Enjoy your Meal!</p>
    <button class="btn btn-light" type="submit" id="mybtn2">Search</button>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>

<div className="card" id="mycard">

  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div className="card-bodyy">
    <h5 class="card-title1">Evening Snacks</h5>
    <p class="card-text1">Enjoy Delicious meal with us order on YourFood.com.
    Enjoy your Meal!</p>
    <button class="btn btn-light" type="submit" id="mybtn2">Search</button>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>

<div className="card" id="mycard">

  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div className="card-bodyy">
    <h5 class="card-title1">Dinner</h5>
    <p class="card-text1">Enjoy Delicious meal with us order on YourFood.com.
    Enjoy your Meal!</p>
    <button class="btn btn-light" type="submit"  id="mybtn2">Search</button>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
</div>

<section id="ry">Our Special Meals</section>
    

    <div id="demo" class="carousel slide" data-bs-ride="carousel">


<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div class="carousel-inner">
  <div class="carousel-item active">
  < img src={picture} alt="New York" class="d-block" id="coro"/>
    <div class="carousel-caption">
      <h3>Paneer Butter Masala</h3>
      <p>Happy Eating!</p>
    </div>
  </div>


  <div class="carousel-item">
  < img src={pict2} alt="New York" class="d-block" id="coro"/>
    <div class="carousel-caption">
      <h3>Samosa</h3>
      <p>Happy Eating!</p>
    </div> 
  </div>



  <div class="carousel-item">
    < img src={pict3} alt="New York" class="d-block" id="coro"/>
    <div class="carousel-caption">
      <h3>Dal Makhni</h3>
      <p>Happy Eating!</p>
    </div>  
  </div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>


<section id="py1"></section>
    {/* <!-- Footer --> */}
<footer class="text-center text-lg-start bg-dark text-muted">
  {/* <!-- Section: Social media --> */}
  
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 class="text-uppercase fw-bold mb-4" id="head">
                YourFood
          </h6>
          <p id="cye">
            Welcome to YourFood.com!
          Enjoy Delicious meal with us order on YourFood.com. 
          <br/>
          We serve you 100% Pure Veg. Meal.
          <br/>
          Enjoy your Meal!
          </p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4" id="cye1">
            MENU
          </h6>
          <p>
            <a href="#!" class="text-reset" id="menu">BreakFast</a>
          </p>
          <p>
            <a href="#!" class="text-reset" id="menu">Lunch</a>
          </p>
          <p>
            <a href="#!" class="text-reset" id="menu">Evening Snacks</a>
          </p>
          <p>
            <a href="#!" class="text-reset" id="menu">Dinner</a>
          </p>
          <p>
            <a href="#!" class="text-reset" id="menu">Cakes & Desserts</a>
          </p>
        </div>
       
    
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4" id="cye1">Contact</h6>
          <p id="menu"> Shop Number-17, Elante Mall, Industrial Area, Phase 1, Chandigarh</p>
          <p id="menu">
            
            YourFood.com
          </p>
          <p id="menu"> + 01 234 567 88</p>
          <p id="menu"> + 01 234 567 89</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-4" id="cye">
  <b>  © 2022 Copyright: YourFood Website build using REACT by Diksha.</b>
  </div>
  {/* <!-- Copyright --> */}
</footer>
</>

  )
}

export default Home