import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {

    const { counter, increment, } = useCounter();

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    //si tenemos...
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Multpliple</h1>
            <hr />

            {
                isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote}/>
            }



            <button
                className="btn btn-primary"
                onClick={() => increment(1)}>
                Next Message
            </button>

        </>
    );
};

