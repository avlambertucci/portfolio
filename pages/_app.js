import '../styles/globals.css'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
