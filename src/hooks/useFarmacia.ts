import {useEffect,useState} from "react"
import { supabase } from "../utils/supabase"

function useFarmacia(){
    const [medicamentos,setMedicamentos]=useState([])

    const traer=async()=>{
        const {data}=await supabase.from("medicamentos").select("*")
        if(data){
            setMedicamentos(data)
        }
    }

    const insertar=async(nombre:any,descripcion:any,precio:any,stock:any,tipo:any)=>{
        try{
            const {error}=await supabase.from("medicamentos").insert([{nombre,descripcion,precio,stock,tipo}])
            if(error){
                console.log(error)
            }
            await traer()
        }catch(error){
            console.log(error)
        }
    }

    const actualizar=async(id:any,nombre:any,descripcion:any,precio:any,stock:any,tipo:any)=>{
        try{
            const {error}=await supabase.from("medicamentos").update({nombre,descripcion,precio,stock,tipo}).eq("id",id)
            if(error){
                console.log(error)
            }
            await traer()
        }catch(error){
            console.log(error)
        }
    }

    const eliminar=async(id:any)=>{
        try{
            const {error}=await supabase.from("medicamentos").delete().eq("id",id)
            if(error){
                console.log(error)
            }
            await traer()
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        traer()
    },[])

    return{medicamentos,insertar,actualizar,eliminar}
}

export default useFarmacia