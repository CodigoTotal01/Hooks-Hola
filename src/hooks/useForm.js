import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })

    }

    const onResetForm = () => {
        setFormState(initialForm);
    }


    //Exponer al mundo exterior
    return {
        //crea nuestras propiedades
        ...formState,
        setFormState,
        formState,
        onInputChange,
        onResetForm
    }
};