import Formulario from "./Components/Formulario/Formulario"
import Buscador from "./Components/Buscador/Buscador"
import Listado from "./Components/Listados/Listado"
import { BaseColaboradores } from "./colaboradoresIniciales"
import { useState } from "react"
import Alert from "./Components/ALert/Alert"

const App = () => {
 
  const [clientes, setClientes] = useState(BaseColaboradores) 
  const [mostrarMensaje, setMostrarMensaje] = useState(false)
  const [clase, setClase] = useState('')
  const [mensaje, setMensaje] = useState('')

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Buscador clientes={clientes} setClientes={setClientes}/>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <Listado clientes={clientes}/>
        </div>
        <div className="col">
          <Formulario 
            clientes={clientes} 
            setClientes={setClientes} 
            setMostrarMensaje={setMostrarMensaje} 
            setMensaje={setMensaje}
            setClase={setClase}
          />
          <Alert mostrarMensaje={mostrarMensaje} clase={clase} mensaje={mensaje} />
        </div>
      </div>
    </div>
  )
}

export default App
