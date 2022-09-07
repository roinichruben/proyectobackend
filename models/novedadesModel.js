var pool = require('./bd');

async function getNovedades() {
    var query = 'select * from novedades order by id DESC limit 6'; //con limit limitamos el listado de novedades a imprimir en pantalla
    var rows = await pool.query(query);
    return rows;
}
async function insertNovedad(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
    }
}
async function deleteNovedadesById(id) {
    var query = "delete from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}
async function getNovedadesById(id) {
    var query = 'select * from novedades where id = ? ';
    var rows = await pool.query(query, [id]);
    return rows[0];
}
async function modificarNovedadById(obj, id) {
    try {
        console.log(obj,id);
       
        var query = "update novedades set titulo='"+obj.titulo+"', subtitulo='"+obj.subtitulo+"', cuerpo='"+obj.cuerpo+"', img_id='"+obj.img_id+"' where id="+id;
        var rows = await pool.query(query);
        

        return rows;
    } catch (error) {
        throw error;
    }
}



module.exports = { getNovedades, insertNovedad, deleteNovedadesById, getNovedadesById, modificarNovedadById }