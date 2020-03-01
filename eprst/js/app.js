getQuote();

function getQuote() {
    fetch('https://api.eprst.workers.dev')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerHTML = data.quote
        })
}

