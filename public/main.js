const showHideLoader = function (id, showLoader) {
    const loader = document.querySelector(`.question-${id} #loading`);
    const hideButtons = document.querySelectorAll(`.question-${id} .button-feedback`);

    if (showLoader === true) {
        hideButtons.forEach(function (hideButton) {
            hideButton.classList.add("hidden");
        });
        loader.classList.remove("hidden");
    } else {
        setTimeout(function () {
            hideButtons.forEach(function (hideButton) {
                hideButton.classList.remove("hidden");
            });
            loader.classList.add("hidden");
        }, 500);
    }
}

const clickEvent = function (event) {
    const id = event.target.getAttribute('data-question-id');
    const helpful = JSON.parse(event.target.getAttribute('data-helpful'));
    showHideLoader(id, true);

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
    showHideLoader(res._id, false)
    const valueEls = document.querySelectorAll('.value-helpful');
    for (let valueEl of valueEls) {
        let valueElId = valueEl.getAttribute('data-question-id')
        if (res._id === valueElId) {
            let totalNumber = res.helpful + res.unhelpful;
            valueEl.innerHTML = res.helpful + '/' + totalNumber + ' people found this helpful. was this entry helpful';
        }
    }
}
const buttons = document.querySelectorAll('.button-feedback');
for (let button of buttons) {
    button.addEventListener('click', clickEvent);
}