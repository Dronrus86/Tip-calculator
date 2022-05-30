const moneyInput = document.querySelector('.calculator_money_input');
const buttonCount = document.querySelector('.calculator_button_count');
const buttonReset = document.querySelector('.calculator_button_reset');
const numberPeople = document.querySelector('.number_people');
const qualityService = document.querySelector('.quality_service');
const tipsTitle = document.querySelector('.tips_title');
const totalTitle = document.querySelector('.total_title');

buttonCount.addEventListener('click', () => {

    if (moneyInput.value !== "" && qualityService.value !== "" && numberPeople.value !== "" && qualityService.value) {
        countTps = (+moneyInput.value / 100) * +qualityService.value / +numberPeople.value
        count = (countTps * numberPeople.value) + +moneyInput.value
        tipsTitle.innerText = "";
        tipsTitle.append(countTps.toFixed(2))
        console.log(countTps)
        totalTitle.innerText = "";
        totalTitle.append(count)
    } else {
        alert('Заполните все воля')
    }


})


function clear() {
    buttonReset.addEventListener('click', () => {
        moneyInput.value = null;
        qualityService.value = null;
        numberPeople.value = null;
        tipsTitle.innerText = "___";
        totalTitle.innerText = "___";

    })
}

clear();
