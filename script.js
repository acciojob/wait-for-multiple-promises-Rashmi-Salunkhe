//your JS code here. If required.
const output = document.getElementById('output');

function randomTime() {
  return Math.floor(Math.random() * 3) + 1;
}

function createPromise(name) {
  return new Promise((resolve) => {
    const time = randomTime();
    setTimeout(() => {
      resolve({ name, time });
    }, time * 1000);
  });
}

const promises = [
  createPromise('Promise 1'),
  createPromise('Promise 2'),
  createPromise('Promise 3'),
];

Promise.all(promises)
  .then((results) => {
    output.innerHTML = ''; // Clear existing content

    let totalTime = 0;
    results.forEach((result) => {
      totalTime += result.time;
      const row = output.insertRow();
      const nameCell = row.insertCell();
      const timeCell = row.insertCell();
      nameCell.textContent = result.name;
      timeCell.textContent = result.time;
    });

    const totalRow = output.insertRow();
    const totalNameCell = totalRow.insertCell();
    const totalTimeCell = totalRow.insertCell();
    totalNameCell.textContent = 'Total';
    totalTimeCell.textContent = totalTime.toFixed(3); // Format to 3 decimal places
  })
  .catch((error) => {
    console.error(error);
  });