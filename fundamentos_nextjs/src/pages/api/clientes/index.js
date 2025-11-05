

export default function cliente(req, res) {

    if (req.method === 'GET') {
        handleGet(req, res)
    } else {
        res.status(405).json({ erro: 'Método não permitido' })
    }
    
}

function handleGet(req, res) {
    res.status(200).json({
        id: 3,
        nome: "Ana Clara",
        email: 'mariaamir@email.com'
    })
}