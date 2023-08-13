import styles from './Header.module.css'
import igniteLogo from '../images/ignite-logo.png'

console.log(styles)
export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt='logotipo ad Ignite' />
            <strong >Ignite Feed</strong>
        </header>
    );
}