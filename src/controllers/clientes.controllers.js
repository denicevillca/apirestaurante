import {pool} from '../db.js'

export const postCliente= async(req,res) =>{
    const {nombre} = req.body
try{
    const [rows] = await pool.query('insert into categoria (nombre) values(?)',[nombre])
    res.json(rows)
}catch(error){
    return res.send('error')
}
}


    
export const getCliente = async(req,res) => {
    try{
        const[rows] = await pool.query('select * from categoria')
        res.json(rows)
    }catch(error){
        return res.send('hay un error')
    }
}



export const patchCliente = async(req,res) => {
    const {id}= req.params
    const {nombre}= req.body
    
    try{
        const[rows] = await pool.query('update categoria set nombre = IFNULL (?,nombre) where idcategoria=?',[nombre,id])
    
        if(rows.affectedRows === 0)
        return res.send('no encontrado')
        res.json(rows)
    }catch(error){
        return res.send('hay un error')
    }
}

export const deleteCliente = async (req,res) => {

        try{
            const[rows] = await pool.query('delete from categoria where idcategoria=?'
            ,req.params.id)
            if(rows.affectedRows === 0)
            return res.send('no encontrado')
            res.json(rows)
        }catch(error){
            return res.send('hay un error')
        }
    }