const soapRequest = require('easy-soap-request');
const fs = require('fs');

// example data
const url = 'https://gee.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx';
const headers = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'http://ws.sdde.bccr.fi.cr/ObtenerIndicadoresEconomicos',
};
const xml = fs.readFileSync('envelope.xml', 'utf-8');

// usage of module
(async () => {
  try {
    const { response } = await soapRequest(url, headers, xml);
    const { body, statusCode } = response;
    console.log(body);
    console.log(statusCode);
  } catch (error) {
    console.log(error)
  }
  
})();