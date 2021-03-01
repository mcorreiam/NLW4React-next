import { createContext, ReactNode, useState } from "react";

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengeProviderProps{
    children: ReactNode
  }


interface ChallengesContextData{
    level: number; 
    currentExperience: number; 
    chalengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}

export function ChallengesProvider({children}: ChallengeProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [chalengesCompleted, setChalengesCompleted] = useState(0);


    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        console.log('New challenge')
    }

    return (
        <ChallengesContext.Provider 
            value={{
                level, 
                levelUp, 
                currentExperience, 
                chalengesCompleted, 
                startNewChallenge
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}