import {  useEffect,useState } from "react"

function Formulario({insertar,actualizar,datosEditar,setDatosEditar}: any ){

    const [nombre,setNombre] = useState(datosEditar?.nombre??"")
    const [descripcion,setDescripcion] = useState(datosEditar?.descripcion??"")
    const [precio,setPrecio] = useState(datosEditar?.precio??"")
    const [stock,setStock] = useState(datosEditar?.stock??"")
    const [tipo,setTipo] = useState(datosEditar?.tipo??"")

   useEffect(()=>{
    if (datosEditar){
        setNombre(datosEditar.nombre)
        setDescripcion(datosEditar.descripcion)
        setPrecio(datosEditar.precio)
        setStock(datosEditar.stock)
        setTipo(datosEditar.tipo)
    }else{
        setNombre("")
        setDescripcion("")
        setPrecio("")
        setStock("")
        setTipo("")
    }
   },[datosEditar])

    const manejarSubmit = (e: any) =>{
        e.preventDefault()
        if (nombre === ""){
            alert("El nombre es obligatorio")
            return  
        }
        if (precio  <=0){
            alert("El precio debe ser mayor a 0")
            return
        }
        if (stock <=0){
            alert("El stock debe ser mayor a 0")
            return  
        }
        if (datosEditar){
            actualizar(datosEditar.id,nombre,descripcion,precio,stock,tipo)
            setDatosEditar(null)            
        }else{
            insertar(nombre,descripcion,precio,stock,tipo)            
        }
        setNombre("")
        setDescripcion("")
        setPrecio("")
        setStock("")
        setTipo("")
    }

    return(
        <div>
            <form onSubmit={manejarSubmit}>
               <input
               type="text"
               placeholder="Nombre"
               value={nombre}
               onChange={(e)=>setNombre(e.target.value)}
               />
               <input
               type="text"
               placeholder="Descripcion"
               value={descripcion}
               onChange={(e)=>setDescripcion(e.target.value)}
               />
               <input
               type="number"
               placeholder="Precio"
               value={precio}
               onChange={(e)=>setPrecio(e.target.value)}
               />
               <input
               type="number"
               placeholder="Stock"  
               value={stock}
               onChange={(e)=>setStock(e.target.value)}
               />
               <select value={tipo} onChange={(e)=>setTipo(e.target.value)}>
                   <option value="Antibiótico">Antibiótico</option>
                   <option value="Analgésico">Analgésico</option>
                   <option value="Antiinflamatorio">Antiinflamatorio</option>
                   <option value="Antihistaminico">Antihistaminico</option>
                   <option value="Antidiabetico">Antidiabetico</option>
                   <option value="Gastrointestinal">Gastrointestinal</option>
                   <option value="Otros">Otros</option>

               </select>
              <button type="submit">
                    {datosEditar ? "Actualizar" : "Guardar"}
                </button>
                {datosEditar && (
                    <button type="button" onClick={() => setDatosEditar(null)}>
                        Cancelar
                    </button>
                )}
            </form>
        </div>
    )   }


export default Formulario
