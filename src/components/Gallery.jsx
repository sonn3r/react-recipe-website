import Image from '../../public/images/gallery.png';

export default function Gallery() {
    return (
        <section className='gallery-section'>
            <img src={Image} alt="Recipe gallery"/>
            <h1>
                Delicious Recipes
            </h1>
            <p>Embark on a culinary adventure with hands-on cooking experiences guided by exceptional chefs - right from
                your kitchen.
            </p>
        </section>
    );
}