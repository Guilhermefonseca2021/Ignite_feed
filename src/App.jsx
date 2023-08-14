import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post }  from './components/Post'

import './Global.css'
import styles from './App.module.css'

const posts = [
  {
      id: 1,
      author: {
          avatarURL: 'https://github.com/diego3g.png',
          name: 'Diego Fernandes',
          role: 'CTO @ Rocketseat'
      },

      content: [
          
          { type: 'paragraph', content: 'Fala turma!!' },
          { type: 'paragraph', content: 'Vi um um projeto simples de um dos nosso alunos tive que parabenizar. É muito maneiro conheci na NLW return, evento da rocketseat. abre o link abaixo para conhecer' },
          { type: 'link', content: 'https://portfolio-gamma-dun-62.vercel.app/' },
      ],

      publishedAt: new Date('2023-08-15 20:40:35'),
  },

  {
      id: 2,
      author: {
          avatarURL: 'https://github.com/maykbrito.png',
          name: 'Mayk Brito',
          role: 'Educator @ Rocketseat'
      },

      content: [
          { type: 'paragraph', content: 'Fala turma!!' },
          { type: 'paragraph', content: 'incriveel tive que repostar. muito show, evento da rocketseat. abre o link e da so uma olhada' },
          { type: 'link', content: 'https://portfolio-gamma-dun-62.vercel.app/' },
      ],

      publishedAt: new Date('2023-08-20 19:03:03'),
  },

]


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            {posts.map(post => {
              return (
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />)
            })}
        </main>
      </div>
    </div>
  )
}

export default App
