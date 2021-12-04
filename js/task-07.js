// const controlSize = document.querySelector('#font-size-control');
// const textSize = document.querySelector('#text');
// controlSize.value = 16;
// controlSize.addEventListener('input', onInput);
// function onInput() {
//     textSize.style.fontSize = `${controlSize.value}px`;
// }

const refs = {
    rangeInput: document.querySelector('#font-size-control'),
    textBelongInput: document.querySelector('#text'),
};

const onRangeChange = (event) => {
    const { value } = event.target;
    refs.textBelongInput.style.fontSize = `${value}px`;
};

refs.rangeInput.addEventListener('input', onRangeChange);
