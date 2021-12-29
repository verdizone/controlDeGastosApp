import { useState } from 'react';
import Mensaje from './Mensaje'
import IconoCerrarModal from '../img/cerrar.svg'

const Modal = ( {setModal, animarModal, setAnimarModal} ) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleCerrarModal = () => {
      console.log('Cerrar modal activado');
      setTimeout(() => {
          setModal(false);
          
        }, 500);
      setAnimarModal(false)
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      
      //Validar campos vacíos
      if([nombre, cantidad, categoria].includes('')){
        setMensaje('Todos los campos son obligatorios');
        setTimeout(() => {
          setMensaje('');
          
        }, 3000);
        return;
      }
      setMensaje('')


    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={IconoCerrarModal} alt="IconoCerrarModal" 
                  onClick={handleCerrarModal}
                />
            </div>

            <div>
                <form 
                  onSubmit={handleSubmit}
                  className={`formulario ${animarModal ? 'animar': 'cerrar'}`}  
                >
                  {
                    mensaje &&  <Mensaje tipo='error'>
                                  {mensaje}
                                </Mensaje>
                  }
                    <legend>
                        Nuevo Gasto
                    </legend>
                    <div className="campo">
                      <label htmlFor="nombre">Nombre Gasto</label>
                      <input 
                        id='nombre'
                        type="text"
                        placeholder='Ej: Visita al médico'
                        value={nombre}
                        onChange={e=>setNombre(e.target.value)}

                      />
                    </div>
                    <div className="campo">
                      <label htmlFor="cantidad">Cantidad</label>
                      <input 
                        id='cantidad'
                        type="number"
                        placeholder='Ej: 200'
                        value={cantidad}
                        onChange={e=>setCantidad(Number(e.target.value))}

                      />
                    </div>
                    <div className="campo">
                      <label htmlFor="categoria">Categoría</label>
                       <select
                        id='categoria'
                        value={categoria}
                        onChange={e=>setCategoria(e.target.value)}
                       >
                         <option value="">---Seleccione---</option>
                         <option value="ahorro">Ahorro</option>
                         <option value="comida">Comida</option>
                         <option value="casa">Casa</option>
                         <option value="varios">Varios</option>
                         <option value="ocio">Ocio</option>
                         <option value="salud">Salud</option>
                         <option value="suscripciones">Suscripciones</option>

                       </select>

                      
                    </div>
                    <div>
                      <input 
                        type="submit" 
                        value='Añadir Gasto' 
                      />
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default Modal
