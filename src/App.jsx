import {useState} from 'react'
import Header from '../src/components/Header.jsx'
import './App.css'
import Gallery from "./components/Gallery";
import Card from "./components/Card.jsx";
import data from "./data.js";

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                title={item.title}
                photo={item.photo}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                cuisine={item.cuisine}
                isPopular={item.isPopular}
            />
        )
    })
    return (
        <>
            <Header/>
            <Gallery/>
            <section className="cards-list">
                {cards}
            </section>
        </>
    )
}
