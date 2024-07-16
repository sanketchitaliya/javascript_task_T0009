const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const submitBtn = document.getElementById('submit');

    const endpoint = 'https://dummyjson.com/quotes';

    let count = 0;

    const fetchData = async () => {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                console.error("api is not found");
            }
            const data = await response.json();
            const dataQuote =data.quotes;
            displayData(dataQuote[count].quote, dataQuote[count].author);
        } catch (error) {
            console.error('fetching quote:',error);
            alert('data not found');
        }
        count++;
    };

    
    const displayData = (quote, author) => {
        quoteText.textContent = `"${quote}"`;
        authorText.textContent = `— ${author}`;
    };

    submitBtn.addEventListener('click', fetchData);

    fetchData();
