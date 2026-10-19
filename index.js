// Importa o Express para criar o servidor
const express = require('express')
// Importa o Handlebars para criar páginas HTML dinâmicas
const exphbs = require('express-handlebars')
//const path = require('path');
// Cria a aplicação usando o Express
const app = express()
// Define a porta onde o servidor vai funcionar
const port = 3000
// Configura o Handlebars como mecanismo de visualização
app.engine('handlebars', exphbs.engine())
// Define o Handlebars como view engine do projeto
app.set('view engine', 'handlebars')
//Adiciona o CSS presente na pasta public
app.use(express.static('public'))
const produtos = [
        // Cria um objeto com informações do produto 1
    produto1 = {    
        name: "Aurum Go",
        product_description: "Fones de ouvido Bluetooth intra-auriculares com cancelamento ativo de ruído inteligente, resistência à água IPX7 e bateria com duração de até 32 horas com o estojo.",
        price: 499.00,
        id: 1
    },
    // Cria um objeto com informações do produto 1
    produto2 = {    
        name: "Lumina Smart Desk",
        product_description: "Luminária de mesa LED dobrável com carregador por indução embutido, ajuste de temperatura de cor e controle de iluminação por toque ou aplicativo.",
        price: 280.00,
        id: 2
    },
    // Cria um objeto com informações do produto 1
    produto3 = {    
        name: "Thermos Pro Peak",
        product_description: "Garrafa térmica de aço inoxidável de 1 litro com isolamento a vácuo de parede dupla, mantendo bebidas geladas por 24 horas e quentes por 12 horas.",
        price: 189.00,
        id: 3
    },
    // Cria um objeto com informações do produto 1
    produto4 = {    
        name: "NeoFit Pulse",
        product_description: "Smartwatch esportivo com monitoramento de frequência cardíaca 24/7, medição de oxigênio no sangue, GPS integrado e mais de 50 modos de treino.",
        price: 350.00,
        id: 4
    }
]
// Cria uma rota para a página inicial "/"
app.get('/', (req, res)=>{
    // Renderiza a página home e envia os dados para ela
    res.render('home', {produtos})
})

app.get('/produto/:id', (req, res) => {
    const id = req.params.id
    // Procura o produto correspondente pelo ID
    const produto = produtos.find(p => p.id == id)

    // Se o produto não for encontrado, trata o erro ou redireciona
    if (!produto) {
        return res.status(404).send('Produto não encontrado')
    }

    // Renderiza o template de produto individual passando os dados do produto encontrado
    res.render('produtos', { produto })
})

app.listen(port, ()=>{
    // Mostra uma mensagem no terminal quando o servidor iniciar
    console.log(`O servidor está rodando na porta ${port}`)
})