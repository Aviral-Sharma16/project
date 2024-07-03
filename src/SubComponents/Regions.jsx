import React from 'react'

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>OUR CLIENTS</h1>
        <p>Our company has clients originating from different industries. We have a strong client connections with Big MNC's across different industries. </p>
        <div className="region_container">
        <div className="card">
         <img src="/Airtel.png" alt="Airtel" />
        </div>
        <div className="card">
        <img src="/Kotak.png" alt="kotak" />
        </div>
        <div className="card">
        <img src="/equitas.png" alt="Equitas" />
        </div>
        <div className="card">
        <img src="/jio.png" alt="jio" />
        </div>
        <div className="card">
        <img src="HDFC.png" alt="HDFC Bank" />
        </div>
        <div className="card">
        <img src="/Cafe_Coffee_Day.png" alt="ccd" />
        </div>
        <div className="card">
        <img src="/Aditya_Birla.png" alt="ab" />
        </div>
        <div className="card">
        <img src="/TCI.png" alt="tci" />
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions
