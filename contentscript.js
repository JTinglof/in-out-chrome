var elements = document.getElementsByTagName('*');

if(isPaused == 'false') {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
    
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
    
            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText1 = text.replace(/[upstairs]/gi, '[outstairs]');
    
                if (replacedText1 !== text) {
                    element.replaceChild(document.createTextNode(replacedText1), node);
                }
    
                var replacedText2 = text.replace(/[downstairs]/gi, '[instairs]');
    
                if (replacedText2 !== text) {
                    element.replaceChild(document.createTextNode(replacedText2), node);
                }
            }
        }
    }
}
