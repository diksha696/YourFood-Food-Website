import React from 'react'
import "./style.css";

const Tello = () => {
let img="https://images.pexels.com/photos/9778158/pexels-photo-9778158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let img2="https://images.pexels.com/photos/7816718/pexels-photo-7816718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let img3="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  
    return (
    <>
     <section id="by"></section>
    
    {/* full main div starts from here */}
    <div id="mainbox">

    {/* first card box  */}
    <div class="card1 mb-3" id="img-box">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" id="cardimg" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Chocolate-Walnut & Almonds Fudge Cake</h5>
        <br/>
        <p class="card-text">Enjoy Delicious Cakes & Desserts now by placing order on our official site YourFood.com!</p>
        <br/><br/>
        <p class="card-text"><small class="text-muted">Order online on YourFood.com</small></p>
      </div>
    </div>
  </div>
</div>


<div class="card1 mb-3" id="img-box">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img2} class="img-fluid rounded-start" id="cardimg" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"> Chocolate Blueberry Muffins </h5>
        <br/>
        <p class="card-text">Enjoy Delicious Cakes & Desserts now by placing order on our official site YourFood.com!</p>
        <br/><br/>
        <p class="card-text"><small class="text-muted">Order online on YourFood.com</small></p>
      </div>
    </div>
  </div>
</div>

<div class="card1 mb-3" id="img-box">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img3} class="img-fluid rounded-start" id="cardimg" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Dark-Chocolate Creamy Fudge</h5>
        <br/>
        <p class="card-text">Enjoy Delicious Cakes & Desserts now by placing order on our official site YourFood.com!</p>
        <br/><br/>
        <p class="card-text"><small class="text-muted">Order online on YourFood.com</small></p>
      </div>
    </div>
  </div>
</div>
{/* full main div ends here */}
</div>
   </>
  )
}

export default Tello