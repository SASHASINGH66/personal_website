import React from "react";
import Readingcomp from "../components/reading_comp";
import './reading.css';

export default function Reading(){
    return(
    <div className="reading-section">
        <h1 id="heading-book">my fave books so far this year</h1>
    <div>
    <Readingcomp title="everything is fucked: a book about hope" desc_book="this feels more 
    like a philosophy book than a self help one. the author basically just introduced a bunch
    of ideas (some his own, some not) about hope and purpose and argued for/against them. i especially loved when the author spoke about
    how ideological religions are often less supported than spiritual ones because they lack infallibility and can be 
    proven wrong. and when they are disproven, the people that supported the ideology have a crisis of hope."  />
    <Readingcomp title="a man called ove" desc_book="loved how the story was both humourous and somber,
    not only in a larger sense, but also in individual dialogue and sentences"  />
    <Readingcomp title="conversations with friends" desc_book="sally's characters are so flawed it makes them and
    and the stories they tell seem so real. this book kept me really captivated and got me out of a reading slump"  />
    <Readingcomp title="the great gatsby" desc_book="i feel like this book starts off kinda boring but eventually
    becomes so so interesting and captivating. i found it hard to put down once i got to the last third of the book"  />
    </div>
    </div>
    )
}