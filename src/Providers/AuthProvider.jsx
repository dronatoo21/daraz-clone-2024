import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password)
    }

    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider); 
    }
    
    const userLogout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(true)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {user, loginUser, googleLogin, userLogout, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;