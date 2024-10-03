import { Router } from "express"

const candidatosRoutes = Router ()

let candidatos = [
    {
        id: Math.random() * 1000000,
        nome: "Bonsonario",
        partido: "Aleatorio",
        idade: 22,
        segundo: false,
        propostas:  [
            "webhwdbhwdb",
        ]

    },
    {
        id: 2,
        nome: "Capitã Lucimara",
        partido: "PSD",
        idade: 24,
        segundo: true,
        propostas: [
            "aumento do salario minimo",
            "redução de impostos",
            "Mais investimentos na educação",
        ]
    },
    {
        id: 3,
        nome: ""
    }
   
]
//rota para buscar todas as emoções
candidatosRoutes.get("/", (req, res) => {
    return res.status(200).send(candidatos)
})

export default candidatosRoutes