import {useEffect, useState} from 'react'
import {formatearCantidad} from '../helpers/index';

const ControlPresupuesto = ( {gastos, presupuesto} ) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        console.log('Componente listo o ha habido un cambio');
        const totalGastado = gastos.reduce( (total, gasto)=> gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        setGastado(totalGastado);
        setDisponible(totalDisponible);
    }, [gastos])

  /*   const formatearCantidad = ( cantidad ) =>{
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD',
    
        })
    } */
    
    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                Gráfica aquí
            </div>
            <div className="contenido-presupuesto">
                <p>Presupuesto: <span>{formatearCantidad(presupuesto)}</span></p>
                <p>Disponible: <span>{formatearCantidad(disponible)}</span></p>
                <p>Gastado: <span>{formatearCantidad(gastado)}</span></p>
            </div>

        </div>
    )
}

export default ControlPresupuesto
