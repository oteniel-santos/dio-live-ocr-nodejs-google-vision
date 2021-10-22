// importando a biblioteca para trabalhar com leitura de arquivos
const fs = require('fs');

// importanto a biblioteca para utilizar as funcoes do ocr do google
const vision = require('@google-cloud/vision');

// importando as credenciais do google a partir do arquivo de configuracao do google
const { client_email, private_key, project_id } = require('./google-cloud-credentials.json');

// criando uma instancia do google vision para trabalhar com imagem 
const client = new vision.ImageAnnotatorClient({
    credentials: {
        client_email,
        private_key,
        project_id
    }
});

// definindo uma funcao para extrair o texto das imagens e pdfs
module.exports.extract = async function(filepath = '', mimeType = '') {
    // ler o arquivo enviado por parametro
    const fileBuffer = fs.readFileSync(filepath);

    // faz a checagem do mimetype do arquivo
    const requestNeeded = ['application/pdf', 'image/gif', 'image/tiff'].some(e => e === mimeType);

    // cria um objeto para ser enviado no request posteriormente
    const inputConfig = {
        mimeType,
        content: fileBuffer
    }

    // cria um array com o tipo de acao que sera realizada
    const features = [{ type: 'DOCUMENT_TEXT_DETECTION' }];
    
    // cria um objeto de request com as configuracoes
    const request = {
        requests: [
            {
                inputConfig,
                features,
                pages: [1]
            }
        ]
    };

    // caso o requestNeeded seja true batchAnnotateFiles sera chamado e a extracao do pdf sera realizada
    // caso o requestNeeded seja false documentTextDetection sera chamado e a extracao da imagem sera realizada
    const [result] = requestNeeded ? await client.batchAnnotateFiles(request) : await client.documentTextDetection(fileBuffer);

    // trata a resposta retornada pelo google vision e define o texto extraido
    const fullTextAnnotation = result.fullTextAnnotation || result.responses[0].responses[0].fullTextAnnotation;

    // retorna o texto extraido para a funcao do endpoint
    return fullTextAnnotation.text;
}