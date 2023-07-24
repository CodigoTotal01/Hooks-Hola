import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ author, quote }) => {

    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({
        with: 0,
        height: 0,
    });
    //Disparo de forma sincrono despues de las mutaciones del dom, nos dara las mediciones de un contenedor po rejemplo- no se recomuiendam mucho
    useLayoutEffect(() => {
        const { height, width} = pRef.current.getBoundingClientRect();
        setBoxSize({height, width})

    }, [quote])

    return (
        <blockquote className="blockquote text-end"
            style={{ display: 'flex' }}>
            <p ref={pRef} className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>

            <code>{JSON.stringify(boxSize)}</code>
        </blockquote>
    )
}