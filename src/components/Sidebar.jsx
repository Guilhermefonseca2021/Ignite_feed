import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import profilePicture from '../images/perfil.jpg'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src='https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='profile picture'></img>
            <Avatar src='https://avatars.githubusercontent.com/u/92196697?v=4' />

            <div className={styles.profile}>
                <strong>Guilherme Fonseca</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    editar seu perfil
                </a>
            </footer>
        </aside>
    );
}