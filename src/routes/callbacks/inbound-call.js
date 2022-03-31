// handle inbound calls to Frontline, eg. route to IVR
//
// Example TwiMl:
// <Response>
//     <Say>Ahoy there! Please wait while we connect you.</Say>
//     <Connect action='url/to/callbacks/conversations-action'>
//         <Conversation 
//             serviceInstanceSid='ISXXX' 
//             record='record-from-answer-dual' 
//             trim='do-not-trim' 
//             recordingStatusCallback='url/to/callbacks/recordings'/>
//     </Connect>
// </Response>
const config = require("../../config");

const inboundCallCallbackHandler = (req, res) => {
  console.log("inboundCallCallbackHandler");

  const connectAction = 'https://h1build.ngrok.io/callbacks/conversations-action';
  const conversationServiceInstanceSid = config.twilio.conversation_service_instance_sid;
  const recordingStatusCallback = 'https://h1build.ngrok.io/callbacks/recordings';
  
  const twiml = `<Response><Say>Ahoy there! Please wait while we connect you.</Say><Connect action='${connectAction}'><Conversation serviceInstanceSid='${conversationServiceInstanceSid}' record='record-from-answer-dual' trim='do-not-trim' recordingStatusCallback='${recordingStatusCallback}'/></Connect></Response>`;

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml);
}

module.exports = inboundCallCallbackHandler;