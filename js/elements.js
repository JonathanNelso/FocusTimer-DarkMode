const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonConffeeShop = document.querySelector('.coffeeShop')
const buttonFireplace = document.querySelector('.fireplace')

// Maneira que encontrei para que a barra de volume não interfira no audio. (TENHO QUE RESOLVER)
const buttonForestSvg = document.querySelector('.forest svg')
const buttonRainSvg = document.querySelector('.rain svg')
const buttonCoffeeSvg = document.querySelector('.coffeeShop svg')
const buttonFirePlaceSvg = document.querySelector('.fireplace svg')

// Teste volume
const forestVolume = document.querySelector('#forestVolume')
const rainVolume = document.querySelector('#rainVolume')
const coffeeShopVolume = document.querySelector('#coffeeShopVolume')
const fireplaceVolume = document.querySelector('#fireplaceVolume')

const buttonDarkMode = document.querySelector('.darkMode')
const buttonLightMode = document.querySelector('.lightMode')
const body = document.querySelector('body')

export {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonMore,
    buttonLess,
    minutesDisplay,
    secondsDisplay,
    buttonForest,
    buttonRain,
    buttonConffeeShop,
    buttonFireplace,

    buttonForestSvg,
    buttonRainSvg,
    buttonCoffeeSvg,
    buttonFirePlaceSvg,

    forestVolume,
    rainVolume,
    coffeeShopVolume,
    fireplaceVolume,

    buttonDarkMode,
    buttonLightMode,
    body
}