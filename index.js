import express from "express"

const app = express()
const PORT = 8000

app.use(express.json())

let estudiantes = [
    {
        id: 1,
        nombre: "Fatima",
        edad: 25
    },
    {
        id: 2,
        nombre: "Elias",
        edad: 20
    }
]

app.get("/api/estudiantes", (req, res) => {
    res.status(200).json({
        total: estudiantes.length,
        estudiantes
    })
})

app.get("/api/estudiantes/:id", (req, res) => {
    const id = Number(req.params.id)

    const estudiante = estudiantes.find(e => e.id === id)

    if (!estudiante) {
        return res.status(404).json({
            message: "Estudiante no encontrado"
        })
    }

    res.status(200).json(estudiante)
})

app.post("/api/estudiantes", (req, res) => {
    const { nombre, edad } = req.body

    if (!nombre || !edad) {
        return res.status(400).json({
            message: "Nombre y edad son obligatorios"
        })
    }

    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre,
        edad
    }

    estudiantes.push(nuevoEstudiante)

    res.status(201).json({
        message: "Estudiante creado",
        estudiante: nuevoEstudiante
    })
})

app.put("/api/estudiantes/:id", (req, res) => {
    const id = Number(req.params.id)

    const index = estudiantes.findIndex(e => e.id === id)

    if (index === -1) {
        return res.status(404).json({
            message: "Estudiante no encontrado"
        })
    }

    estudiantes[index] = {
        ...estudiantes[index],
        ...req.body
    }

    res.status(200).json({
        message: "Estudiante actualizado",
        estudiante: estudiantes[index]
    })
})

app.delete("/api/estudiantes/:id", (req, res) => {
    const id = Number(req.params.id)

    const index = estudiantes.findIndex(e => e.id === id)

    if (index === -1) {
        return res.status(404).json({
            message: "Estudiante no encontrado"
        })
    }

    const eliminado = estudiantes[index]

    estudiantes.splice(index, 1)

    res.status(200).json({
        message: "Estudiante eliminado",
        estudiante: eliminado
    })
})

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT} 🚀`)
})