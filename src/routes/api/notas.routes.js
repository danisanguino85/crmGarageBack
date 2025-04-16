const router = require("express").Router();
const {
    getAllNotas,
    getNotaById,
    createNota,
    getNotaByReparacion,
    getReparacionAllNotas,
    updateNota,
    deleteNota
} = require("../../controllers/notas.controllers");

router.get("/", getAllNotas);
router.get("/:notaId", getNotaById);
router.get('/nota/:reparacionId', getReparacionAllNotas);

router.put('/:notaId', updateNota)
router.delete('/:notaId', deleteNota)


router.post("/", createNota);
router.post("/rep", getNotaByReparacion);


module.exports = router;

/* SELECT notas.* FROM crm_garage.notas 
join reparaciones on reparaciones.id = notas.reparaciones_id
where reparaciones.id=1;

INSERT INTO crm_garage.notas (notas, reparaciones_id)
VALUES ('Texto de la nota', 1);

UPDATE crm_garage.notas
SET notas = 'Nuevo contenido de la nota'
WHERE id = 1;

delete from crm_garage.notas where notas.id = 1;
 */