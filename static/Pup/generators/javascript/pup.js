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