import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post }  from './components/Post'

import './Global.css'
import styles from './App.module.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Post 
            author="Guilherme fsantos" 
            content="lorerme rifnre groegrng regnrg" />
            <Post
              author="Gabriel buzzi"
              content="Um novo post aviao legal">
            </Post>
        </main>
      </div>
    </div>
  )
}

export default App
