Blockly.JavaScript['segment_init'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `const segment = require('@pupbot/core').segment;\n`;
    return code;
  };
  Blockly.JavaScript['segment_at'] = function(block) {
    var value_qq = Blockly.JavaScript.valueToCode(block, 'qq', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `segment.at(${value_qq})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['segment_dice'] = function(block) {
    var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `segment.dice(${value_id})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['segment_face'] = function(block) {
    var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `segment.face(${value_id})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };