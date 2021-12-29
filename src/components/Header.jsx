import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from './ControlPresupuesto'

const Header = ( {presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto} ) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {
                isValidPresupuesto ? (
                  <>
                    <ControlPresupuesto 
                      presupuesto={Number(presupuesto)}
                    />
                  </>
                ) : (
                <>
                  <NuevoPresupuesto 
                    presupuesto={Number(presupuesto)}
                    setPresupuesto={setPresupuesto}
                    isValidPresupuesto={isValidPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                  />
                </>
                    
                )
            }
        </header>
    )
}

export default Header
