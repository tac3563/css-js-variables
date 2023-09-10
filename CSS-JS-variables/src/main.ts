import './main.scss'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

  </div>
`
const blurSlider = document.getElementById('blur-slider');

blurSlider?.addEventListener('change', inputHandler)
blurSlider?.addEventListener('mousemove', inputHandler)

function inputHandler(this: HTMLInputElement) {
 const suffix = this.dataset.sizing; // dataset returns an object containing any custom data-* attributes on the selected element.
 document.documentElement.style.setProperty(`--blur-filter`, this.value + suffix); // document.documentElement retrieves the root element (<html>) and setProperty() adds a property to the style object of the root element called --blur-filter and applies the value of this.value
}
