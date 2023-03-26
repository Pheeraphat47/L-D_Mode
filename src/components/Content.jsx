import light from '../assets/image/light.svg'
import dark from '../assets/image/dark.svg'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const Content = ()=>{
    const {theme} = useContext(ThemeContext)
    return(
        <main className={theme==="dark"?"dark":"light"}>
            <div>
                <h1>Road to Frontend Developer</h1>
                <p>What you have to learn ?</p>
            </div>
            <img src={theme==="dark"? dark : light} alt="Logo"/>
        </main>
    )
}

export default Content;