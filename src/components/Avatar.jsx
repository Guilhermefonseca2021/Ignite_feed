import styles from './Avatar.module.css'

export function Avatar(props) {

    const hasBorder = props.hasBorder != false;
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}  
            src={props.src}
        />
    );
}


// const user = { name: 'Diego'}
// qro propriedade nome do nosso objeto user
// const { name } = user;

// com conceito desestruturacao consigo aplicar valor default '='
// export function Avatar({hasborder = true, src}) 
