import { Router } from "express"

const candidatosRoutes = Router ()

let candidatos = [
    {
        id: Math.floor (Math.random () * 100),
        nome: "Bonsonario",
        partido: "Aleatorio",
        idade: 22,
        segundo: false,
        propostas:  [
            "aumento do salário minimo",
            "redução de impostos",
            "mais investimentos na educação",
        ]
    },
    {
        id: Math.floor (Math.random () * 100),
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

]

candidatosRoutes.get("/", (req, res) => {
    return res.status(200)
    .send(candidatos)
})

candidatosRoutes.post("/", (req, res) => {
    const { nome, partido, idade, segundo, propostas } = req.body;

    if ( !nome || !partido) {
        return res.status(400).send({message: "Preencha todos os campos"})
    }

    if (idade < 18) {
        return res.status(400).send({message: "Idade inválida"})
    }

    const novoCandidato = {
        id: Math.floor(Math.random() * 100),
        nome,
        partido,
        idade,
        segundo,
        propostas,
    }

    candidatos.push(novoCandidato);
    return res.status(201).json({
        message: "Candidato cadastrado com sucesso",
        novoCandidato,
    });
});
candidatosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const candidato = candidatos.find((politico) => politico.id == id);

    if (!candidato) {
        return res.status(404).send({ message: "Candidato não encontrado" });
    }

    return res.status(200).json(candidato);
});


export default candidatosRoutes