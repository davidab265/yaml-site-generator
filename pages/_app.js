import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Tell Font Awesome to skip adding CSS automatically since we did it manually above
config.autoAddCss = false

// Import all icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// Add all icons to the library
library.add(fas, fab, far)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
