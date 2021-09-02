import type { NextPage } from 'next'
import Link from 'next/link'
import MainLayout from '../layouts/MainLayout'
import s from '../styles/Home.module.scss'


const Home: NextPage = () => {
  return (
    <MainLayout title='Main'>
      <div className={s.container}>
        <h1 className={s.main}>Welcome to best music player in the World!</h1>
        <h2 className={s.second}>It's full stack application, when you can find all best tracks!</h2>
        <div className={s.btn}>
          <Link href='/track-list'>Get Started!</Link>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
