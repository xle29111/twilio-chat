exports.handler = function (context, event, callback) {
  const assets = Runtime.getAssets();
  const privateMessageAsset = assets['/message.js'];
  const privateMessagePath = privateMessageAsset.path;
  const privateMessage = require(privateMessagePath);

  const response = new Twilio.Response();

  // Configurar encabezados para CORS
  response.appendHeader('Access-Control-Allow-Origin', '*'); // Permitir todas las solicitudes de cualquier origen
  response.appendHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type'); // Encabezados permitidos
  response.appendHeader('Content-Type', 'application/json'); // Tipo de contenido

  const twiml = new Twilio.twiml.MessagingResponse();
  twiml.message(privateMessage());

  response.setBody(twiml.toString()); // Devuelve la respuesta con TwiML
  callback(null, response);
};
