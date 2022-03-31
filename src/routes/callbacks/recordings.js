// recordingStatusCallback endpoint, ie. send this recording sid to Intelligence
const https = require("https");
const config = require("../../config");

const recordingsCallbackHandler = (req, res) => {
  console.log("recordingsCallbackHandler");

  const intelligenceSid = config.twilio.intelligence_sid;
  const basicAuth = config.twilio.basic_auth;
  const recordingSid = req.body.RecordingSid;
  const data = `RecordingSid=${recordingSid}`;

  const options = {
    protocol: "https:",
    hostname: "ai.twilio.com",
    path: `/v1/Services/${intelligenceSid}/Transcripts`,
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
  };

  // GET Call direction and participant info
  // Use recordingStatusCallback to GET participant data via callSid to configure 

  // POST to Twilio Intelligence
  // for demo purposes only, recommended to use a Promise or separate service
  const reqIntel = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => process.stdout.write(d));
  });

  reqIntel.on('error', e => console.error(e));
  reqIntel.write(data);
  reqIntel.end();

  res.sendStatus('200');
};

module.exports = recordingsCallbackHandler;