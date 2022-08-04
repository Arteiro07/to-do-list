import React, { useEffect, useState } from 'react'
import styles from "./Auth.module.css"
import {GrClose} from 'react-icons/gr'

export default function Auth() {
    const[loggedIn, setLoggedIn] = useState(false);
    const[menu, setMenu] = useState(<></>);
    const[showMenu, setShowMenu] = useState(false);

    useEffect(()=>{
        if(loggedIn){
            setMenu(
                <div className={styles.frostedBackground}>
                    <div className={styles.menuContainer}>
                        <GrClose 
                            className={styles.close}
                            onClick={()=>setShowMenu(false)}    
                        />
                        <button onClick={()=>setLoggedIn(false)}>Logout</button>
                        <button>Edit</button>
                    </div>
                </div>
            );
        }
        else{
            setMenu(
                <div className={styles.frostedBackground}>
                    <div className={styles.menuContainer}>
                        <GrClose 
                            className={styles.close}
                            onClick={()=>setShowMenu(false)}    
                        />
                        <button onClick={()=>setLoggedIn(true)} >Login</button>
                        <button>Create Account</button>
                    </div>
                </div>            
            );
        }
    },[loggedIn]);

    return (
        <>
            {showMenu
                ?(menu)
                :<button 
                    className={styles.auth}
                    onClick={()=>{setShowMenu(true)}}
                >
                    AUTH
                </button>
                
            }
        </>
    )
}
