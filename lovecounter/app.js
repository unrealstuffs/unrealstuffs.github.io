document.querySelector('#getMessages').addEventListener('click', getMessages);
const count = document.querySelector('#count')

function getMessages() {
    fetch(`messages/combined.txt`)
        .then(res => res.text())
        .then(data => {
            const re = /[лl][oаую][бvв ][eило ][вуютшл ]/gi;
            const result = data.match(re);
            let start = 0;
            const end = result.length;
            const timer = setInterval(() => {
                count.innerHTML = start++
                if (start > end) {
                    clearInterval(timer);
                }
            }, 1)
        })
}