Blockly.Blocks['pup_init'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("初始化 Pupbot 插件");
        this.setNextStatement(true, null);
        this.setColour(195);
        this.setTooltip("初始化 Pupbot 插件");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['pup_new'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("创建 Pupbot 插件");
        this.appendValueInput("name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("插件名称");
        this.appendValueInput("version")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("插件版本");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(195);
        this.setTooltip("创建 Pupbot 插件");
        this.setHelpUrl("");
    }
}
Blockly.Blocks['pup_export'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("导出 Pupbot 插件");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setColour(195);
   this.setTooltip("导出 Pupbot 插件");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pup_onmounted'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("当插件被挂载");
      this.appendStatementInput("action")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(195);
   this.setTooltip("Pupbot 事件");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pup_onunmounted'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("当插件被卸载");
      this.appendStatementInput("action")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(195);
   this.setTooltip("Pupbot 事件");
   this.setHelpUrl("");
    }
  };