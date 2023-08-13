import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/2254731?v=4"></img>
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time dateTime='2023-12-08'>Publicado ha 2h</time>
            </header>

            <div className={styles.content}>
                <p>Fala turma!!</p>
                <p>Vi um um projeto simples de um dos nosso alunos tive que parabenizar. É muito maneiro conheci na NLW return, evento da rocketseat. clica no link abaixo para conhecer</p>

                <p><a href='https://portfolio-gamma-dun-62.vercel.app/' target='_blank'>Guilherme.web/project </a></p>

                <p>
                    <a href=''> #novosprojetos </a>{' '}
                    <a href=''> #nlw </a>{' '}
                    <a href=''> #rocketseat </a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                    placeholder="Deixe seu comentario"
                />
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                
            </div>
        </article>
    )
}