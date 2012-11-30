var print = function(a){console.log(a)}

function createCodeEditor(selector, settings){
    return CodeMirror.fromTextArea(document.getElementById(selector),settings)
}

function options(type){
    return {
        mode: type,
        lineNumbers: true,
        theme: 'ambiance',
        autoClearEmptyLines: true,
        smartIndent: false,
        tabSize: 2,
        indentWithTabs: false
    }
}

var jadeEditor = createCodeEditor('jade', options("text/javascript"));

var htmlEditor = createCodeEditor('html',options("text/html"));

htmlEditor.setSize('100%', 600)
jadeEditor.setSize('100%', 600)


function replaceTab(str){
    return str.replace(/\t/g, '  ');
}

$('#goJade').click(function(){
    var htmlContent = htmlEditor.getValue()
    $.post('/html', { 
        content: replaceTab(htmlContent)
    },function(res){
        jadeEditor.setValue(res)
    });
});

$('#goHtml').click(function(){
    var jadeContent = jadeEditor.getValue()
    $.post('/jade', { 
        content: replaceTab(jadeContent)
    },function(res){
        htmlEditor.setValue(res)
    });
});

