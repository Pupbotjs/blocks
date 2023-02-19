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
          .appendField("插件被挂载后");
      this.appendStatementInput("action")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(195);
   this.setTooltip("所有的积木块（当插件被卸载除外）都要放到这里面！");
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
  Blockly.Blocks['pup_onmessage'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("当收到消息(任意类型)");
      this.appendStatementInput("action")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(195);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pup_raw_message'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("纯文本消息内容");
      this.setOutput(true, null);
      this.setColour(195);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pup_admins'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("管理员列表");
      this.setOutput(true, null);
      this.setColour(195);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pup_reply'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("回复消息");
      this.appendValueInput("reply")
          .setCheck(["String", "Array"])
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("内容");
      this.appendValueInput("t")
          .setCheck("Boolean")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("是否回复对方");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(195);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pup_sendprivatemessage'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("发送私聊消息");
      this.appendValueInput("text")
          .setCheck(["String", "Array"])
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("内容");
      this.appendValueInput("qq")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("对方QQ");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(195);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pup_sender'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("发送者的")
          .appendField(new Blockly.FieldDropdown([["备注","card"], ["讨论ID","discuss_id"], ["群聊ID","group_id"], ["昵称","nickname"], ["等级","level"], ["职位","role"], ["QQ号","user_id"]]), "type");
      this.setOutput(true, null);
      this.setColour(195);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pup_sendgroupmessage'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("发送群聊消息");
      this.appendValueInput("text")
          .setCheck(["String", "Array"])
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("内容");
      this.appendValueInput("qq")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("群号");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(195);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pup_mainadmin'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("获取机器人主管理员");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(195);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pup_ongroupmessage'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("当收到群聊消息");
      this.appendStatementInput("action")
          .setCheck(null);
      this.setColour(195);
      this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['pup_onprivatemessage'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("当收到私聊消息");
      this.appendStatementInput("action")
          .setCheck(null);
      this.setColour(195);
      this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };