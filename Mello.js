import React from 'react'

const Mello = () => {
  let picture ="https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  let pict2 ="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let pict3="https://images.pexels.com/photos/12737916/pexels-photo-12737916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  
  return (
<>

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
</>
  )
}

export default Mello