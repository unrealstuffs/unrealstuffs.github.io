getQuote();

function getQuote() {
    fetch('https://floral-band-50f9.eprst.workers.dev')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerHTML = data.quote
        })
}

