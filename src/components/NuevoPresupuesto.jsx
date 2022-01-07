import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ( {presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto} ) => {
    
    const [mensaje, setMensaje] = useState('')
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log('Enviando form...');

        // Validar si el campo no esta vacio

        if(!presupuesto || presupuesto<0){
            setMensaje('No es un presupuesto válido');
            setIsValidPresupuesto(false)
            return;
        }
        // En caso de que sea válido
        setMensaje('')
        setIsValidPresupuesto(true)


    }

    return (
        <div className="nuevo-presupuesto contenedor sombra">
            <form 
              onSubmit={handleSubmit}
              className="formulario"

            >
                <div className="campo">
                    <label htmlFor="">
                        Definir Presupuesto
                    </label>
                    <input 
                      type="number"
                      className="nuevo-presupuesto"
                      placeholder="Añade tu presupuesto"
                      value={presupuesto}
                      onChange={e => setPresupuesto(Number(e.target.value))}


                    />
                </div>
                <div className="">
                    <input 
                      type="submit" 
                      value="Agregar Presupuesto "
                    />
                </div>

            </form>
            {
                mensaje && <Mensaje tipo="error">
                                {mensaje}
                           </Mensaje>
            }
        </div>
    )
}

export default NuevoPresupuesto
