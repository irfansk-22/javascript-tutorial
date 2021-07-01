document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadPlayers);

function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      // parsing as an object
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  };

  xhr.send();
}

//Load Players
function loadPlayers() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'players.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const players = JSON.parse(this.responseText);

      let output = '';
      players.forEach(function (player) {
        output += `
        <ul>
          <li>ELITE GROUP RANK: ${player.fab4}</li>
          <li>Name: ${player.name}</li>
          <li>Country: ${player.country}</li>
          <li>Jersy No: ${player.jersy_no}</li>
        </ul>
      `;
      });

      document.getElementById('players').innerHTML = output;
    }
  };

  xhr.send();
}
