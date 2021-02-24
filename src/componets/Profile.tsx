import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/mcorreiam.png" alt="Marco Correia" />
            <div>
                <strong>Marco Magalhaes</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}