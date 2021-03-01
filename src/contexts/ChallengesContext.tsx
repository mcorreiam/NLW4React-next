import { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengeProviderProps{
    children: ReactNode
  }

interface Challenge {
    type: "body" | "eye";
    description: string;
    amount: number;
}


interface ChallengesContextData{
    level: number; 
    currentExperience: number; 
    chalengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

export function ChallengesProvider({children}: ChallengeProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [chalengesCompleted, setChalengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const experienceToNextLevel = Math.pow((level + 1)*4, 2);


    function levelUp(){
        setLevel(level + 1);
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    return (
        <ChallengesContext.Provider 
            value={{
                level, 
                currentExperience, 
                chalengesCompleted, 
                activeChallenge,
                experienceToNextLevel,
                startNewChallenge,
                resetChallenge,
                levelUp, 
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}