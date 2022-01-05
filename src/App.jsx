import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarFecha, generarId } from './helpers/index'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


const App = () => {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([]);

  const [gastoEditar, setGastoEditar] = useState({});
  // const [gastoEliminar, setGastoEliminar] = useState({});
  
  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
            
        setTimeout(() => {
          console.log('animando modal');
          setAnimarModal(true)
          
        }, 500);
    }
  }, [ gastoEditar ])

  const handleNuevoGasto = () => {
    
  setModal(true)
  setGastoEditar({})
  
    setTimeout(() => {
      console.log('animando modal');
      setAnimarModal(true)
      
    }, 500);

  }

  const guardarGasto = ( gasto ) => {

    if(gasto.id){
      //Actualizar 
      const gastosActualizados = gastos.map( gastoState => gastoState.id === 
      gasto.id ? gasto :  gastoState)
      setGastos(gastosActualizados);
    }else{
      //Nuevo Gasto
      gasto.id = generarId();
      // gasto.fecha = generarFecha();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false);
      
    }, 500);

  }

  return (
    <div className={ modal ? 'fijar' : '' }>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
      />

      {
        isValidPresupuesto && (
          <>
            <main>
              <ListadoGastos 
                gastos={gastos}  
                setGastoEditar={setGastoEditar}  
              />
            </main>
            <div className='nuevo-gasto'>
              <img src={IconoNuevoGasto} alt="Nuevo Gasto" 
                onClick={handleNuevoGasto}
              />
            </div>
          </>
        )
      }
      {
        modal && (
          <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          />
        )
      }


    </div>
    
  )
}

export default App
