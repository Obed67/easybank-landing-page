
import { Outlet } from 'react-router-dom'
import Header from '../components/elements/header'
import Footer from '../components/navigation/footer'
import Navbar from '../components/navigation/navbar'


export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
