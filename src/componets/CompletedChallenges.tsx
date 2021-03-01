import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
    const { chalengesCompleted } = useContext(ChallengesContext);
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{chalengesCompleted}</span>
        </div>
    )
}