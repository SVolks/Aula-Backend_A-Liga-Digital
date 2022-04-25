const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;


// PARA EFETUAR A PESQUISA DEVE-SE COLOCAR: localhost:3000/hello?nome=ste(qlquer nome)
app.get ('/hello', (req, res) => {
    res.send(`Hello ${req.query.nome}!`);
    // SEND É EQUIVALENTE AO END
});




const server = http.createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    const parametrosConsulta = urlParse.query;
    console.log(JSON.stringify(parametrosConsulta));

    console.log(req.url);
    if (req.url.startsWith('/bye') || req.url.startsWith('/tchau') == true) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Tchau Sr.(a) ${parametrosConsulta.nome}`);
        return;
    } else if (req.url.startsWith('/ola')) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        //res.end(`Bem-vindo (a)` + parametrosConsulta.nome + ' ' + parametrosConsulta.sobrenome+'!');
        res.end(`Bem-vindo (a) ${parametrosConsulta.nome} ${parametrosConsulta.sobrenome}!`);
        return;
    }
    
    //console.log(`Requisicao: ${JSON.stringify(req.headers)}`);
    //console.log(req);
    
    // Original
    //res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/plain');
    //res.end(`Bem-vindo (a) ${parametrosConsulta.nome} ${parametrosConsulta.sobrenome}!`);
    
    // Caso não entre nas condições das linhas 12 e 17,
    // Status code HTTP 200(ok), 404(pag ñ encontrada), 5xx...
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Pagina nao encontrada ${req.url}`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});

//URL
//Protocolo: http | https
//Hostname: 127.0.0.1 | localhost | domínio (Ex.: g1.globo.com)
//Portas: 3000 | 80 (padrão http) | 443 (padrão https) | de 1 à 65535 (abaixo de 1000/2000 precisa de permissão de administrador para usar, acima de 1000/2000 pode usar direto) | 8080 (padrão de algumas linguagens)
//Path: /hello | /mundo/ao-vivo/....
//Search: ?chave=valor (valores que vem depois da ?)