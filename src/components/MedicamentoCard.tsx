function MedicamentoCard({id,nombre,descripcion,precio,stock,tipo,setDatosEditar,eliminar}:any){

    const manejarEliminar = () =>{
        const confirmar = window.confirm(`¿Seguro que quieres eliminar "${nombre}"?`)
        if (confirmar) {
            eliminar(id)
        }
    }

    return(
        <div className="card"> 
            <div className="card-body"> 
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <p className="precio">Precio: ${precio}</p>
                <p className="stock">
                    Stock: {stock} {/*condicional de alerta de stock*/}
                     {stock <= 5 && 
                        <span className="low-stock">¡Stock bajo!</span>
                    }
                    </p>
                <p className="tipo">Tipo: {tipo}</p>
                <div className="card-actions"> 
                    <button onClick={() => setDatosEditar({id,nombre,descripcion,precio,stock,tipo})}> 
                        Editar 
                    </button>
                    <button onClick={manejarEliminar}> 
                        Eliminar 
                    </button>
                </div>
            </div>                         
        </div>
    )
}
export default MedicamentoCard