import {
  buttonDarkMode,
  buttonLightMode,
  body
} from './elements.js'

export default function DarkMode() {
  
  function darkModeOn() {
    body.classList.add('dark')
    buttonLightMode.classList.remove('hide')
    buttonDarkMode.classList.add('hide')
  }

  function darkModeOff() {
    body.classList.remove('dark')
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
  }

  return {
    darkModeOn,
    darkModeOff
  }
}