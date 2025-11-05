
export default function cliente(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Maria ${codigo}`,
        email: `mariamaria${codigo}@email.com`
    })
}