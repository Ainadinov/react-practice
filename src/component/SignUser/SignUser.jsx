import './index.css'
import {useEffect, useState} from "react"


const usernames = ["joe", "adilet", 'ainadinov', "tabin", 'bake', "beka", "sake",];

const UserDebounce = (value, delay) =>{
    const [debounced, setDebounced] = useState(value)

    useEffect(()=> {
        const handler = setTimeout(()=>{
            setDebounced(value)
        }, delay)
        return ()=> clearTimeout(handler)
    })
    return debounced
}

function SignUser(){
    const [isValid, setIsValid] = useState(false)
    const [username, setUsername] = useState("")

    const debouncedUsername = UserDebounce(username, 500);

    const handleChange = e => {
        setUsername(e.target.value)
    };

    useEffect(()=>{
        setIsValid(!usernames.some(
            u => u === debouncedUsername));
    }, [debouncedUsername])

    return(
        <div className='validusername'>
            <h1>Validation User Name</h1>
            <Username
                isValid={isValid}
                handleChange={handleChange}
            />
        </div>      
    )
}

const Username = ({isValid, handleChange}) => {
    return (
        <>
            <div className="username">
                <input 
                    onChange={handleChange}
                    className="control"
                    placeholder="Username" 
                />
            </div>
            <div className={
                `validation ${!isValid 
                ? "invalid" 
                : ""}`
            }>
                Username already taken
            </div>
        </>
    )
}

export default SignUser