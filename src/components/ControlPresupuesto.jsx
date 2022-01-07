import {useEffect, useState} from 'react'
import {formatearCantidad} from '../helpers/index';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ( {
  gastos, 
  presupuesto, 
  setGastos, 
  setPresupuesto,
  setIsValidPresupuesto,
} ) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [percentage, setPercentage] = useState(100);

    useEffect(() => {
        // console.log('Componente listo o ha habido un cambio');
        const totalGastado = gastos.reduce( (total, gasto)=> gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;

        //Calcular el porcentaje gastado
        const nuevoPorcentaje = ((presupuesto - totalDisponible) / presupuesto ) * 100;
        setTimeout(() => {
          setPercentage(nuevoPorcentaje.toFixed(2));
        }, 750);
        setGastado(totalGastado);
        setDisponible(totalDisponible);
    }, [gastos])

  /*   const formatearCantidad = ( cantidad ) =>{
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD',
    
        })
    } */

    const handleResetApp = () =>{
      const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?')
      if(resultado){
        //Si el usuario desea resetar la App
        setGastos([])
        setPresupuesto(0)
        setIsValidPresupuesto(false)
        return
      }
    }
    
    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
              <CircularProgressbar 
                styles={buildStyles({
                    pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                  })}
                value={percentage} 
                text={`${percentage}% Gastado`} 
              />
            </div>
            <div className="contenido-presupuesto">
              <button
                className='reset-app'
                type='button'
                onClick={handleResetApp}
              >
                Resetear App
              </button>
                <p>Presupuesto: <span>{formatearCantidad(presupuesto)}</span></p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>Disponible: <span>{formatearCantidad(disponible)}</span></p>
                <p>Gastado: <span>{formatearCantidad(gastado)}</span></p>
            </div>

        </div>
    )
}

export default ControlPresupuesto
