const clickEvent = function (event) {
    const id = event.target.getAttribute('data-question-id');
    const helpful = event.target.getAttribute('data-helpful');

    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            helpful: helpful
        })
    };
    fetch("/rating", options)
        .then(response => response.json())
        .then(receiveResponse);
}
const receiveResponse = function (res) {
    const valueEls = document.querySelectorAll('.value-helpful');
    for (let valueEl of valueEls) {
        let valueElId = valueEl.getAttribute('data-question-id')
        if (res._id === valueElId) {
            let totalNumber = res.helpful + res.notHelpful;
            valueEl.innerHTML = res.helpful + '/' + totalNumber + 'people found this helpful. was this entry helpful';
        }
    }
}
const buttons = document.querySelectorAll('.button-feedback');
for (let button of buttons) {
    button.addEventListener('click', clickEvent);
}