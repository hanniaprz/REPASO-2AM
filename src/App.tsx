import {useState} from "react"
import Formulario from "./components/Formulario"
import { MedicamentoCard } from "./components"
import useFarmacia from "./hooks/useFarmacia"
import "./App.css"

function App(){

  const {medicamentos,insertar,actualizar,eliminar}=useFarmacia()
  const [datosEditar,setDatosEditar]=useState(null)
  const [busqueda,setBusqueda]=useState("")
  const [tipoFiltro,setTipoFiltro]=useState("todas")
  
  const medicamentosFiltrados : any[] =medicamentos
  .filter(m=>tipoFiltro==="todas"||m.tipo===tipoFiltro)
  .filter(m=>m.nombre.toLowerCase().includes(busqueda.toLowerCase())) 

  const total=medicamentos.length
 const totalStock = medicamentos.reduce((sum, m) => sum + Number(m.stock), 0)

 return(
  <div>
    <h1>FARMACIA</h1>

    <p>Total de medicamentos: {total}</p>
    <p>Valor total: ${totalStock}</p>

    <Formulario
    insertar={insertar}
    actualizar={actualizar}
    datosEditar={datosEditar}
    setDatosEditar={setDatosEditar}
    />

    <input
    type="text"
    placeholder="Buscar medicamento"
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
    />
    
  <button onClick={() => setTipoFiltro("todas")}>Todas</button>
  <button onClick={() => setTipoFiltro("Analgésico")}>Analgésico</button>
  <button onClick={() => setTipoFiltro("Antibiotico")}>Antibiotico</button>
  <button onClick={() => setTipoFiltro("Antiinflamatorio")}>Antiinflamatorio</button>
  <button onClick={() => setTipoFiltro("Antihistaminico")}>Antihistaminico</button>
  <button onClick={() => setTipoFiltro("Antidiatetico")}>Antidiabetico</button>
  <button onClick={() => setTipoFiltro("Gastrointestinal")}>Gastrointestinal</button>

  {medicamentosFiltrados.map((m) => (
    <MedicamentoCard
      key={m.id}
      id={m.id}
      nombre={m.nombre}
      descripcion={m.descripcion}
      precio={m.precio}
      stock={m.stock}
      tipo={m.tipo}
      setDatosEditar={setDatosEditar}
      eliminar={eliminar}
    />
  ))}
  </div>
 )
}

export default App