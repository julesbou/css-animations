
const template = ({ title, uid, date, from, template, css, scss }, singlePage) => {
  return `
    <article id='${uid}'>
      <h1 class='title'><a href='#${uid}'>${title}</a></h1>
      <span class='date'>${new Date(date).toLocaleDateString()}</span>
      <div class='anim'>${template}</div>
      <style>${css}</style>
      <p class='notice'>
        <span class='from'><b>Inspired from:</b><br> <a href='${from}'>${from}</a></span>
      </p>
      <footer>
        ${singlePage ? '' : `<p class='permalink'><a href='#${uid}'>See alone</a></p>`}
        <p class='viewsource'><a>SCSS code of animation</a></p>
      </footer>
      <div class='source'>
        <pre>${scss}</pre>
        <!--<pre>${template.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</pre>-->
      </div>
    </article>
  `
}

const $main = document.querySelector('main')
const $list = $main.querySelector('ul.animations')
const $back = $main.querySelector('.back')

function displayAnimations() {
  $list.innerHTML = ''

  // only show active animations
  let displayedAnimations = animations.filter(anim => anim.active)

  // in case we want to display just a single animation
  const hash = window.location.hash.replace(/^#/, '')
  displayedAnimations = displayedAnimations.filter(anim => {
    return hash ? anim.uid === hash : anim
  })

  // sort by date
  displayedAnimations.sort((a, b) => {
    return a.date < b.date ? 1 : -1
  })

  // remove animations not supported by current browser
  const browser = browserName()
  displayedAnimations = displayedAnimations.filter(anim => {
    return !anim.disable || anim.disable.indexOf(browser) === -1
  })

  // animation not found
  if (hash && !displayedAnimations.length) {
    console.error('animation not found')
    window.location.hash = ''
    return
  }
  
  // toggle back navigation link
  $back.style.display = displayedAnimations.length === 1 ? 'flex' : 'none'

  // keep loader on screen a few extra ms
  setTimeout(function() {

    // render each animation
    displayedAnimations.forEach(animation => {
      $list.insertAdjacentHTML('beforeend', template(animation, !!hash))
    })

    setTimeout(() => document.body.classList.remove('standby'), 800)
    
  }, animations.length === 1 ? 0 : 500)
}

displayAnimations()

$main.addEventListener('click', function(event) {

  // toggle source
  if (event.target.parentNode.classList.contains('viewsource')) {
    const $source = event.target.parentNode.parentNode.parentNode.querySelector('.source')
    $source.style.display = $source.style.display !== 'block' ? 'block' : 'none'
  }
})

window.onhashchange = () => displayAnimations()

function browserName() {
  const agent = window.navigator.userAgent.toLowerCase()
  switch (true) {
    case agent.indexOf('edge') > -1: return 'edge';
    case agent.indexOf('edg') > -1: return 'chrome'; // chromium based edge
    case agent.indexOf('opr') > -1 && !!window.opr: return 'opera';
    case agent.indexOf('chrome') > -1 && !!window.chrome: return 'chrome';
    case agent.indexOf('trident') > -1: return 'ie';
    case agent.indexOf('firefox') > -1: return 'firefox';
    case agent.indexOf('safari') > -1: return 'safari';
    default: return 'other';
  }
}