import { observer } from 'mobx-react'
import { useWeb3ModalAccount } from '@web3modal/ethers/react'

import styles from './style.module.scss'
import Login from '@pages/Login'
import Main from '@pages/Main'
import Connect from '@pages/Connect'
import Header from '@components/Header'
import { useStore } from '@libs/store'

const App = observer(() => {
  const store = useStore()
  const { address } = useWeb3ModalAccount()

  const content = () => {
    if (!address) return <Login />
    if (!store.endpoint) return <Connect />
    return <Main />
  }

  return (
    <div className={styles.wrap}>
      <Header />
      <main className={styles.main}>{content()}</main>
    </div>
  )
})

export default App
