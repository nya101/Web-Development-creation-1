// retrieve HTML elements








const form = document.getElementById('calculator');
const total = document.getElementById('total');

const calculatorForm = document.querySelector('#calculator');
const clearButton = document.querySelector('#clear');

// attach event listener to form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission

  // retrieve values from input elements
  const area = parseFloat(document.getElementById('area').value);
  const services = document.getElementsByName('service');
  let totalCost = 0;

  // calculate the total cost based on the selected services
  for (let i = 0; i < services.length; i++) {
    if (services[i].checked) {
      switch (services[i].value) {
        case 'pruning':
          totalCost += area * 10;
          break;
        case 'fertilization':
          totalCost += area * 0.003;
          break;
        case 'thatching':
          totalCost += area * 0.004;
          break;
        case 'grass-cutting':
          totalCost += area * 0.004;
          break;
        case 'mulching':
          totalCost += area * 0.001;
          break;
        case 'seeding':
          totalCost += area * 0.007;
          break;
        case 'aeration':
          totalCost += area * 0.003;
          break;
        case 'tree-inspection':
          totalCost += 5 * services[i].dataset.count;
          break;
        case 'tree-trimming':
          totalCost += 40 * services[i].dataset.count;
          break;
        case 'shrub-pruning':
          totalCost += area * 10;
          break;
        case 'weed-management':
          totalCost += area * 10;
          break;
        case 'tree-removal':
          totalCost += 80 * services[i].dataset.count;
          break;
      }
    }
  }

  // display the total cost on the page
  total.innerHTML = `Total Cost: $${totalCost.toFixed(2)}`;
});


