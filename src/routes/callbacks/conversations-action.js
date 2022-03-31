// Frontline call termination action, eg. confirm success and handle accordingly with IVR
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const conversationsActionCallbackHandler = (req, res) => {
  console.log("conversationsActionCallbackHandler");
  
  const twiml = new VoiceResponse();
  twiml.say('Thanks for reaching out. Goodbye.');
  
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
}

module.exports = conversationsActionCallbackHandler;
