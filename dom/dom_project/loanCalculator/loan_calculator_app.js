//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {

  //Hide results
  document.getElementById('results').style.display = 'none';

  //Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1500);
  e.preventDefault();

});

//Calulate Results
function calculateResults() {
  
  //UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100/12;
  const calculatedPayment = parseFloat(years.value) * 12;

  //Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal * x * calculatedInterest)/(x-1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(5);
    totalPayment.value = (monthly * calculatedPayment).toFixed(5);
    totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(5);

    //Show result
    document.getElementById('results').style.display = 'block';

    //Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {

    //Hide loader
    document.getElementById('loading').style.display = 'none';

    showError('Please check your numbers');
  }

}

//Show Error
function showError(errorMsg) {
  
  //Create a div
  const errorDiv = document.createElement('div');

  //Add class
  errorDiv.className = 'alert alert-danger';

  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(errorMsg));

  //Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Insert error above heading
  card.insertBefore(errorDiv, heading);

  //Clear error after 3 seconds
  setTimeout(clearError, 3000);

}

//Clear Error
function clearError() {
  document.querySelector('.alert').remove();
}