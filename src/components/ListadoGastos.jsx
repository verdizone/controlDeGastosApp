import Gasto from "./Gasto"

const ListadoGastos = ( {gastos, setGastoEditar} ) => {
    console.log(gastos);
    return (
        <div className="listado-gastos contenedor">
            <h2>{gastos.length ? 'Gastos': 'No hay gastos'}</h2>
            {
              gastos.map(gasto=>(
                  <Gasto 
                    gasto={gasto}
                    key={gasto.id}
                    setGastoEditar={setGastoEditar}

                  />
              ))
            }
        </div>
    )
}

export default ListadoGastos
