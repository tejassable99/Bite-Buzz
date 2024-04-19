import React from 'react';

const Success = () => {
  return (
    <div class="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
  <div class="card text-center p-4">
    <svg viewBox="0 0 24 24" class="text-success w-16 h-16 mx-auto my-4">
      <path fill="currentColor" d="M12 0A12 12 0 1 0 24 12 12.014 12.014 0 0 0 12 0Zm6.927 8.2-6.845 9.289a1.011 1.011 0 0 1-1.43.188L5.764 13.769a1 1 0 1 1 1.25-1.562l4.076 3.261 6.227-8.451A1 1 0 1 1 18.927 8.2Z"></path>
    </svg>
    <div>
      <h3 class="text-success">Payment Done!</h3>
      <p class="text-muted">Thank you for completing your secure online payment.</p>
      <p>Have a great day!</p>
      <div class="mt-4">
        <a href="/" class="btn btn-primary">GO BACK</a>
      </div>
    </div>
  </div>
</div>

  );
};

export default Success;
