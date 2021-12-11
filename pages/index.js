import Head from 'next/head'
import Image from 'next/image'
import CommonSearch from '../components/Home/CommonSearch'
import Header from '../components/Home/Header'
import HighlightedDoctors from '../components/Home/HighlightedDoctors'
import Stepper from '../components/Home/Stepper'
import Testimonial from '../components/Home/Testimonial'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Navbar />
      <Header />
      <Stepper />
      <HighlightedDoctors />
      <Testimonial />
      <CommonSearch />
    </div>
  )
}
