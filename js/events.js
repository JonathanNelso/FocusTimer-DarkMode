import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonMore,
    buttonLess,
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
    buttonLightMode
} from "./elements.js"
import DarkMode from './darkMode.js'

export function Events({
    timer,
    sound
}) {

    function togglePlay(myAudio) {
        return myAudio.paused ? myAudio.play() : myAudio.pause()
      }

    buttonPlay.addEventListener('click', function() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        timer.countdown()
    })

    buttonPause.addEventListener('click', function() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        timer.pause()
    })
    
    buttonStop.addEventListener('click', function() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        timer.stop()
    })
    
    buttonMore.addEventListener('click', function() {
        timer.moreFive()
    })
    
    buttonLess.addEventListener('click', function() {
        timer.lessFive()
    })

    // Audio buttons ()
    // buttonForest.addEventListener('click', function() {
    //     togglePlay(sound.pressFlorest)
    //     buttonForest.classList.toggle('selected')
    // })

    // buttonRain.addEventListener('click', function() {
    //     togglePlay(sound.pressRain)
    //     buttonRain.classList.toggle('selected')
    // })

    // buttonConffeeShop.addEventListener('click', function() {
    //     togglePlay(sound.pressConffeeShop)
    //     buttonConffeeShop.classList.toggle('selected')
    // })

    // buttonFireplace.addEventListener('click', function() {
    //     togglePlay(sound.pressFireplace)
    //     buttonFireplace.classList.toggle('selected')
    // })

    // Audio SVG - Maneira que encontrei para que a barra de volume não interfira no audio. (TENHO QUE RESOLVER)
    buttonForestSvg.addEventListener('click', function() {
        togglePlay(sound.pressFlorest)
        buttonForest.classList.toggle('selected')
        toggleForestVolume()
    })

    buttonRainSvg.addEventListener('click', function() {
        togglePlay(sound.pressRain)
        buttonRain.classList.toggle('selected')
        toggleRainVolume()
    })

    buttonCoffeeSvg.addEventListener('click', function() {
        togglePlay(sound.pressCoffeeShop)
        buttonConffeeShop.classList.toggle('selected')
        toggleCoffeeShopVolume()
    })

    buttonFirePlaceSvg.addEventListener('click', function() {
        togglePlay(sound.pressFireplace)
        buttonFireplace.classList.toggle('selected')
        toggleFirePlaceVolume()
    })

    // Teste volume - TENHO QUE MOVER PARA sounds.js
    function toggleForestVolume() {
        forestVolume.addEventListener('change', function () {
          const { pressFlorest } = sound;
          pressFlorest.volume = forestVolume.value / 100
        });
    }

    function toggleRainVolume() {
        rainVolume.addEventListener('change', function () {
          const { pressRain } = sound;
          pressRain.volume = rainVolume.value / 100
        });
    }

    function toggleCoffeeShopVolume() {
        coffeeShopVolume.addEventListener('change', function () {
          const { pressCoffeeShop } = sound;
          pressCoffeeShop.volume = coffeeShopVolume.value / 100
        });
    }

    function toggleFirePlaceVolume() {
        fireplaceVolume.addEventListener('change', function () {
          const { pressFireplace } = sound;
          pressFireplace.volume = fireplaceVolume.value / 100
        });
    }

    // Dark Mode
    buttonDarkMode.addEventListener('click', function() {
        DarkMode().darkModeOn()
    })

    buttonLightMode.addEventListener('click', function() {
        DarkMode().darkModeOff()
    })
}
