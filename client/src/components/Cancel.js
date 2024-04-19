import React from 'react'

const Cancel = () => {
  return (
   <div class="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
  <div class="card text-center p-4">
   <img src='https://cdn-icons-png.freepik.com/256/6711/6711656.png?semt=ais_hybrid' alt='cancel' style={{display:"flex",justifyContent:"center",alignItems:"center"}}/>
    <div>
      <h3 class="text-danger">Payment Cancelled</h3>
      <p class="text-muted">Your payment was not completed.</p>
      <p>Please try again later.</p>
      <div class="mt-4">
        <a href="/" class="btn btn-primary">GO BACK</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Cancel