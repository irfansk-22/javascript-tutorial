const name = 'John';
const age = 23;
const job = 'Web Developer';
const city = 'Miami';

//Without template strings (ES5)

html = '<ul>' + 
        '<li>Name: ' + name + 
        '</li><li>Age: ' + age + 
        ' </li><li> ' + job + 
        '</li><li>City: ' + city 
      + '</li></ul>'; //painful way, becomes tedious and messy when we deal with lot of html

//With template strings (ES6)

function hello() {
  return 'Hello';
}

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age >= 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;
