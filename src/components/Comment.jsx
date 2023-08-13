import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src='https://avatars.githubusercontent.com/u/2254731?v=4' alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time dateTime='2023-12-08'>Cerca de 1h atras</time>
                        </div>

                        <button title='Deletar comentario'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, Parabens!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}