import { Button } from '@arco-design/web-react'
import { observer } from 'mobx-react'
import { useWeb3Modal } from '@web3modal/ethers/react'

import styles from './style.module.scss'

const Login = observer(() => {
  const modal = useWeb3Modal()

  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <Button
          type="primary"
          long
          size="large"
          shape="round"
          onClick={() => modal.open()}
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  )
})

export default Login
