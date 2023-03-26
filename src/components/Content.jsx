import light from '../assets/image/light.svg';
import dark from '../assets/image/dark.svg';

function Content(){
    return(
        <main>
            <div>
                <h1>Road to Frontend Dev</h1>
                <p>what you have to learn ? </p>
            </div>
            <img src={light} alt="logo" />
        </main>
    )
}

export default Content;