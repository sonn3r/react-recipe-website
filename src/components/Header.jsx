import Photo from '../../public/images/recipe-logo.png';

export default function Header() {
    return (
        <header>
            <img src={Photo} alt="Website logo"/>
            <p>Recipe Book</p>
        </header>
    )
}