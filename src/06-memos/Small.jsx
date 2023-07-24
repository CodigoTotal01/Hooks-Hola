

//Memo es una funcion para memorizar un compoenente, solo cuando los properties cambia se ejecuta
//vaicamente algu notro ocmpoenente que lo tenga si no acvmbia os pasa un nuevo valor no se volvera a redibujar

import { memo } from "react";

//props siempre como objeto
export const Small = memo(({ value }) => {

    console.log('Me volvi a dibujar');

    return (
        <small>{value}</small>
    )
})
