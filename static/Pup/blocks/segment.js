Blockly.Blocks['segment_init'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("引入segment");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(350);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['segment_at'] = {
    init: function() {
      this.appendValueInput("qq")
          .setCheck(null)
          .appendField("@ QQ号");
      this.setOutput(true, null);
      this.setColour(350);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['segment_dice'] = {
    init: function() {
      this.appendValueInput("id")
          .setCheck("Number")
          .appendField("骰子 点数");
      this.setOutput(true, null);
      this.setColour(350);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['segment_face'] = {
    init: function() {
      this.appendValueInput("id")
          .setCheck("Number")
          .appendField("经典表情 ID");
      this.setOutput(true, null);
      this.setColour(350);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };