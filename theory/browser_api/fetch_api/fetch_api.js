document.getElementById('fetch-btn').addEventListener('click', fetchData);

function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data.slice(0, 5)); 
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(arra) {
    const output = document.getElementById('output');
    output.innerHTML = '';

    arra.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h2>Post ID: ${post.id}</h2>
            <h3>Title: ${post.title}</h3>
            <p>${post.body}</p>
        `;
        output.appendChild(postDiv);
    });
}
