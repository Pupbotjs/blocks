

let js_save = function () {
    try {
        let code_data = Blockly.JavaScript.workspaceToCode(workspace);
        code_data = code_data
            .replaceAll("&#60", "<")
            .replaceAll("&#62", ">");
        let blob = new Blob([code_data], {type: "text/plain;charset=utf-8"});
        let url = URL.createObjectURL(blob);
        let downa = document.getElementById("downa");
        downa.href = url;
        let name = "";
        if (name === "") {
            name = "我的插件";
        }
        
            downa.download = name + ".js";
        
        downa.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        swal("导出出现问题，请检查积木是否拼接错误，如无误请反馈给开发人员")
        console.error("导出出现问题！"+error)
    }

};

let format_data = function (text, js) {
    return `<root><body><blocks>${text}</blocks><js>${js}</js></body></root>`;
};

let save = function () {
    try {
        let code_xml = Blockly.Xml.workspaceToDom(workspace);
        let code_data = Blockly.Xml.domToText(code_xml);
        let js_data = Blockly.JavaScript.workspaceToCode(workspace);
        let xml_data = format_data(code_data, js_data);
        let blob = new Blob([xml_data], {type: "text/plain;charset=utf-8"});
        let url = URL.createObjectURL(blob);
        let downa = document.getElementById("downa");
        downa.href = url;
        let name = "";
        if (name === "") {
            name = "我的插件";
        }
        downa.download = name + ".pup";
        downa.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        swal("导出出现问题，请检查积木是否拼接错误，如无误请反馈给开发人员")
        console.error("导出出现问题！"+error)
    }
};

let openfile = function () {
    var input = document.createElement("input");
    input.setAttribute("id", "file");
    input.setAttribute("type", "file");
    input.setAttribute("name", "file");
    input.setAttribute("style", "visibility:hidden");
    input.setAttribute("accept", ".pup");
    document.body.appendChild(input);
    input.click();
    input.onchange = (event) => {
        let file = event.target.files[0];
        let file_reader = new FileReader();
        file_reader.onload = () => {
            var fc = file_reader.result;
            let parser = new DOMParser();
            let xml = parser.parseFromString(fc, "text/xml");
            let blocks = xml
                .getElementsByTagName("body")[0]
                .getElementsByTagName("blocks")[0]
                .getElementsByTagName("xml")[0];
            workspace.clear();
            Blockly.Xml.domToWorkspace(blocks, workspace);
        };
        file_reader.readAsText(file, "UTF-8");
    };
};

let upload = function (waddle) {
    var request = new XMLHttpRequest();
    request.open("get", waddle);
    request.send(null);
    request.onload = function () {
        if (request.status === 200) {
            let parser = new DOMParser();
            let xml = parser.parseFromString(request.responseText, "text/xml");
            let blocks = xml
                .getElementsByTagName("body")[0]
                .getElementsByTagName("blocks")[0]
                .getElementsByTagName("xml")[0];
            document.getElementsByClassName("groundglass")[0].className =
                "groundglass";
            document.getElementsByClassName("groundglass")[0].style.display = "";
            workspace.clear();
            Blockly.Xml.domToWorkspace(blocks, workspace);
        }
    };
};

var get_num = 0;
let count = function () {
    get_num += 1;
    if (get_num >= 5) {
        if (getCookie("help-egg") === false) {
            document.cookie = "help-egg=true";
            swal("获得成就：需要帮助的训练师");
        }
        window.open("./static/Waddle/eastegg/pdd.html");
        get_num = -999;
    }
};

var get_num_oj = 0;
let count_oj = function () {
    get_num_oj += 1;
    if (get_num_oj >= 5) {
        if (getCookie("oj-egg") === false) {
            document.cookie = "oj-egg=true";
            swal("获得成就：学习JS的网站");
        }
        {
            window.open("./static/Waddle/eastegg/waddleOJ/html/index.html");
            get_num_oj = -999;
        }
    }
};

var isclick, ishold = false;

let dropdown_show = function () {
    document.getElementById("navmenu").style.top = "10px";
    document.getElementById("navmenu").style.left = "68px";
    if (
        document.getElementsByClassName("dropdown-menu")[0].className ==
        "dropdown-menu show"
    ) {
        document.getElementsByClassName("dropdown-menu")[0].className =
            "dropdown-menu";
        setTimeout(() => {
            isclick = false;
        }, 100);
    } else {
        document.getElementsByClassName("dropdown-menu")[0].className =
            "dropdown-menu show";
        setTimeout(() => {
            isclick = true;
        }, 100);
    }
};

document.onclick = function () {
    if (isclick == true && !ishold) {
        document.getElementsByClassName("dropdown-menu")[0].className =
            "dropdown-menu";
        isclick = false;
    }
};


window.document.body.onmouseover = function (event) {
    el = event.target;
    if (el == document.getElementsByClassName("dropdown-menu")[0]) {
        ishold = true
    } else {
        ishold = false
    }
}

// 原本的“关于”对话框的显示分离到此
function show_about() {
    aboutus.style.display = "block";
    document.getElementsByClassName("aboutus-content")[0].className =
        "aboutus-content show";
    document.getElementsByClassName("aboutus")[0].className = "aboutus show";
    document.getElementsByClassName("groundglass")[0].className =
        "groundglass show";
    settingThird(1)
}

function show_newsth() {
    newsth.style.display = "block";
    document.getElementsByClassName("newsth-content")[0].className =
        "newsth-content show";
    document.getElementsByClassName("newsth")[0].className = "newsth show";
    document.getElementsByClassName("groundglass")[0].className =
        "groundglass show";
}


function settings(check) {
    if (check.checked) {
        window.settingss = '';
    } else {
        window.settingss = 'keep';
    }
    window.reast = 'minus';
    document.getElementsByClassName('blocklyZoom')[0].dispatchEvent(new PointerEvent('pointerdown'));
    window.reast = false;
    document.getElementById('zoom-size-number').innerHTML = Math.ceil(myscale * 100) + '%'
    window.reast = 'plus';
    document.getElementsByClassName('blocklyZoom')[1].dispatchEvent(new PointerEvent('pointerdown'));
    window.reast = false;
    document.getElementById('zoom-size-number').innerHTML = Math.ceil(myscale * 100) + '%'
    document.cookie = "settingss=" + window.settingss;
}

function holdToolboxs(check) {
    if (check.checked) {
        window.holdToolbox = 'true';
    } else {
        window.holdToolbox = '';
    }
    document.cookie = "holdToolbox=" + window.holdToolbox;
}

function settingThird(number) {
    a = document.getElementsByClassName("setting-body")[0]
    b = document.getElementsByClassName("aboutus-body")[0]
    c = document.getElementsByClassName("thanks-body")[0]
    d = document.getElementsByClassName("setting-button")
    for (i = 0; i < d.length; i++) {
        d[i].style.backgroundColor = 'var(--settings-button-background)'
        d[i].style.color = 'var(--settings-button-color)'
    }
    if (number == 1) {
        a.style.display = 'flex'
        b.style.display = 'none'
        c.style.display = 'none'
    } else if (number == 2) {
        a.style.display = 'none'
        b.style.display = 'block'
        c.style.display = 'none'
    } else if (number == 3) {
        a.style.display = 'none'
        b.style.display = 'none'
        c.style.display = 'flex'
    }
    d[number - 1].style.backgroundColor = 'var(--settings-button-set-background)'
    d[number - 1].style.color = 'var(--settings-button-set-color)'
}

function domToStr(dom) {
    let d = document.createElement("div");
    console.log(d);
    d.appendChild(dom);
    return d.innerHTML;
}

function addSvgHead(str) {
    return (
        `<svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><style type="text/css">.blocklyText{color:white;}</style>` +
        str +
        `</svg>`
    );
}

function saveBlocksSvg() {
    if (window.confirm("是否要保存所有积木图片？保存后会刷新！")) {
        let blob = new Blob(
            [
                addSvgHead(
                    domToStr(document.getElementsByClassName("blocklyBlockCanvas")[0])
                ),
            ],
            {type: "text/plain;charset=utf-8"}
        );
        let url = URL.createObjectURL(blob);
        let downa = document.getElementById("downa");
        downa.href = url;
        downa.download = "blocks.svg";
        downa.click();
        URL.revokeObjectURL(url);
        window.location.reload()
    }
}
