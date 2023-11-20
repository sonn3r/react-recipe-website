import Photo from '../assets/recipe-logo.png';

export default function Header() {
    return (
        <header>
            <img src={Photo} alt="Website logo"/>
            <p>Recipe Book</p>
        </header>
    )
}