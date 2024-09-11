document.getElementById('fetchData').addEventListener('click', () => {
    fetch('http://localhost:3000')
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').textContent = 'Error fetching data';
    });
});
