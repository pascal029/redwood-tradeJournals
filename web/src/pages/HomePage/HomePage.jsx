import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const HomePage = () => {
  const {logOut} = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
    </>
  )
}

export default HomePage
