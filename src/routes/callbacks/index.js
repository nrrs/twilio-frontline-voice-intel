const twilioWebhookMiddleware = require('../../middlewares/twilio-webhook');
const conversationsCallbackHandler = require('./twilio-conversations');
const routingCallbackHandler = require('./routing');
const outgoingConversationCallbackHandler = require('./outgoing-conversation');
const crmCallbackHandler = require('./crm');
const templatesCallbackHandler = require('./templates');
const conversationsActionCallbackHandler = require('./conversations-action');
const inboundCallCallbackHandler = require('./inbound-call');
const outboundCallCallbackHandler = require('./outbound-call');
const recordingsCallbackHandler = require('./recordings');

module.exports = router => {
    router.post("/callbacks/conversations", twilioWebhookMiddleware, conversationsCallbackHandler);
    router.post("/callbacks/routing", twilioWebhookMiddleware, routingCallbackHandler);
    router.post("/callbacks/outgoing-conversation", twilioWebhookMiddleware, outgoingConversationCallbackHandler);
    router.post("/callbacks/crm", twilioWebhookMiddleware, crmCallbackHandler);
    router.post("/callbacks/templates", twilioWebhookMiddleware, templatesCallbackHandler);
    router.post("/callbacks/conversations-action", twilioWebhookMiddleware, conversationsActionCallbackHandler);
    router.post("/callbacks/inbound-call", twilioWebhookMiddleware, inboundCallCallbackHandler);
    router.post("/callbacks/outbound-call", twilioWebhookMiddleware, outboundCallCallbackHandler);
    router.post("/callbacks/recordings", twilioWebhookMiddleware, recordingsCallbackHandler);
};
