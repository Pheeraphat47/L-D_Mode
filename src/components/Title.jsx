import { useContext, useState } from "react"
import Switch from "react-switch"
import { ThemeContext } from "../App"
const Title = ()=>{
    const {theme,setTheme} = useContext(ThemeContext)

    const toggleSwitch = (checked) =>{
        setTheme(
            theme === "light" ? "dark" : "light"
        )
        document.documentElement.classList.toggle('dark', theme === 'light')
    }
    return(
        <header className={theme==="dark"?"dark":"light"}>
            <span>Mode [{theme}]</span>
            <Switch
                onChange = {toggleSwitch} 
                checked = {theme==="dark"}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#ffa500'}
            />
        </header>
    )
}

export default Title;