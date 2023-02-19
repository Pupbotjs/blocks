Blockly.JavaScript['pup_init'] = function(block) {
    var code = `const { PupPlugin } = require('@pupbot/core');\n`;
    return code;
  };
  Blockly.JavaScript['pup_new'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_version = Blockly.JavaScript.valueToCode(block, 'version', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `const plugin = new PupPlugin(${value_name}, ${value_version});\n`;
    return code;
  };
  Blockly.JavaScript['pup_export'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `module.exports = { plugin };\n`;
    return code;
  };
  Blockly.JavaScript['pup_onmounted'] = function(block) {
    var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = `plugin.onMounted((bot) => {\n${statements_action}\n})\n`;
    return code;
  };
  Blockly.JavaScript['pup_onunmounted'] = function(block) {
    var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = `plugin.onUnmounted((bot) => {\n${statements_action}\n})\n`;
    return code;
  };
  Blockly.JavaScript['pup_onmessage'] = function(block) {
    var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = `plugin.onMessage((event) => {\n${statements_action}\n})\n`;
    return code;
  };
  Blockly.JavaScript['pup_raw_message'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'event.raw_message';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['pup_admins'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'plugin.admins';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['pup_reply'] = function(block) {
    var value_reply = Blockly.JavaScript.valueToCode(block, 'reply', Blockly.JavaScript.ORDER_ATOMIC);
    var value_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `event.reply(${value_reply},${value_t})\n`;
    return code;
  };
  Blockly.JavaScript['pup_sendprivatemessage'] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qq = Blockly.JavaScript.valueToCode(block, 'qq', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `bot.sendPrivateMsg(${value_qq},${value_text})\n`;
    return code;
  };
  Blockly.JavaScript['pup_sendgroupmessage'] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qq = Blockly.JavaScript.valueToCode(block, 'qq', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `bot.sendGroupMsg(${value_qq},${value_text})\n`;
    return code;
  };
  Blockly.JavaScript['pup_mainadmin'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'bot.mainAdmin';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['pup_ongroupmessage'] = function(block) {
    var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = `plugin.onGroupMessage((event) => {\n${statements_action}\n})\n`;
    return code;
  };
  Blockly.JavaScript['pup_onprivatemessage'] = function(block) {
    var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
    // TODO: Assemble JavaScript into code variable.
    var code = `plugin.onPrivateMessage((event) => {\n${statements_action}\n})\n`;
    return code;
  };
  Blockly.JavaScript['pup_sender'] = function(block) {
    var dropdown_type = block.getFieldValue('type');
    // TODO: Assemble JavaScript into code variable.
    var code = `event.sender.${dropdown_type}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };