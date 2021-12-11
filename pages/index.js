import Head from 'next/head'
import CommonSearch from '../components/Home/CommonSearch'
import Header from '../components/Home/Header'
import HighlightedDoctors from '../components/Home/HighlightedDoctors'
import Stepper from '../components/Home/Stepper'
import Testimonial from '../components/Home/Testimonial'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Doctor</title>
      </Head>
      <Navbar />
      <Header />
      <Stepper />
      <HighlightedDoctors />
      <Testimonial />
      <CommonSearch />
    </>
  )
}
