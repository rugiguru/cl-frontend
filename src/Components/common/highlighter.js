
const marker = (md) => 
{
     md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
     md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
     md = md.replace(/^\*(.+)/gm, '<li>$1</li>');
     
     //ol
     md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
     md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
     md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
     
     //blockquote
     md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
     
     //h
     md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
     md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
     md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
     md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
     md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
     md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');
     
     //alt h
     md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
     md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');
     
     //images
     md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
     
     //links
     md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');
     
     //font styles
     md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
     md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
     md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
     
     //pre
     md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
     md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
     
     //code
     md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');
     
     //p
     md = md.replace(/^\s*(\n)?(.+)/gm, function(m){
       return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
     });
     
     //strip p from pre
     md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
     md = codeHighlight(md);

    //  codeDesigner()

     
     return (md);
};

function codeHighlight(text) {
  text = text.replace(/((?:^|[^\\])(?:\\{2})*)(`{3,})(\r?\n)(?!`)([^\r]*?[^`])\2(?!`)/gm,
      function (wholeMatch, m1, m2, m3, m4, m5) {
          var c = m4;
          c = c.replace(/^[^\S\r\n]+|[^\S\r\n]+$/g, "");
          //c = _EncodeCode(c);
          c = c.replace(/:\/\//g, "~P");
          return m1 + "<pre><code>" + c + "</code></pre>";
      }
  );
  return text;
}

function codeDesigner(){
  var strReg1 = /"(.*?)"/g,
    strReg2 = /'(.*?)'/g,
    specialReg = /\b(new|var|if|do|function|while|switch|for|foreach|in|continue|break)(?=[^\w])/g,
    specialJsGlobReg = /\b(document|window|Array|String|Object|Number|\$)(?=[^\w])/g,
    specialJsReg = /\b(getElementsBy(TagName|ClassName|Name)|getElementById|typeof|instanceof)(?=[^\w])/g,
    specialMethReg = /\b(indexOf|match|replace|toString|length)(?=[^\w])/g,
    specialPhpReg  = /\b(define|echo|print_r|var_dump)(?=[^\w])/g,
    specialCommentReg  = /(\/\*.*\*\/)/g,
    inlineCommentReg = /(\/\/.*)/g;

var htmlTagReg = /(&lt;[^\&]*&gt;)/g;

var sqlReg = /\b(CREATE|ALL|DATABASE|TABLE|GRANT|PRIVILEGES|IDENTIFIED|FLUSH|SELECT|UPDATE|DELETE|INSERT|FROM|WHERE|ORDER|BY|GROUP|LIMIT|INNER|OUTER|AS|ON|COUNT|CASE|TO|IF|WHEN|BETWEEN|AND|OR)(?=[^\w])/g;

var codeElements = document.getElementsByTagName("pre");
if(codeElements.length >10){
  codeElements.each(function (){
    var string = this.innerHTML,
    parsed = string.replace(strReg1,'<span class="string">"$1"</span>');
    parsed = parsed.replace(strReg2,"<span class=\"string\">'$1'</span>");
    parsed = parsed.replace(specialReg,'<span class="special">$1</span>');
    parsed = parsed.replace(specialJsGlobReg,'<span class="special-js-glob">$1</span>');
    parsed = parsed.replace(specialJsReg,'<span class="special-js">$1</span>');
    parsed = parsed.replace(specialMethReg,'<span class="special-js-meth">$1</span>');
    parsed = parsed.replace(htmlTagReg,'<span class="special-html">$1</span>');
    parsed = parsed.replace(sqlReg,'<span class="special-sql">$1</span>');
    parsed = parsed.replace(specialPhpReg,'<span class="special-php">$1</span>');
    parsed = parsed.replace(specialCommentReg,'<span class="special-comment">$1</span>');
    parsed = parsed.replace(inlineCommentReg,'<span class="special-comment">$1</span>');
  
    this.innerHTML = parsed;
  });
}

}

// const mdTables = str => {
//     let table = ''
//     let regCheckPipe = /(\|)/gi
  
//     str = str.trim()
  
//     if (str.match(regCheckPipe)) {
//       let tableStart = '<table><tbody>'
//       let tableEnd = '</tbody></table>'
//       let rowStart = '<tr>'
//       let rowEnd = '</tr>'
//       let headStart = '<th>'
//       let headEnd = '</th>'
//       let columnStart = '<td>'
//       let columnEnd = '</td>'
//       let row = ''
//       let content = ''
//       let column = ''
//       let i_res = ''
//       let k_res = ''
  
//       // Clean the content.
//       str = htmlDecode(str).replace(/<(div|\/div|p|\/p|br)[^>]{0,}>/g, '\n')
  
//       // Create rows.
//       row = str.split('\n')
  
//       let i = 0
//       for (i; i < row.length; i += 1) {
//         i_res = row[i]
  
//         // Table header.
//         if (row.length >= 1 && i === 0) {
//           column = i_res.split('|')
//           if (column.length > 1) {
//             let k = 0
//             let inner = ''
//             for (k; k < column.length; k += 1) {
//               k_res = column[k].trim()
//               inner += `${headStart}${k_res}${headEnd}`
//             }
//             content += `${rowStart}${inner}${rowEnd}`
//           }
//           i_res = row[i + 1]
//         }
  
//         // Table content.
//         if (i_res) {
//           column = i_res.split('|')
//           if (column.length > 1) {
//             let k = 0
//             let inner = ''
//             for (k; k < column.length; k += 1) {
//               k_res = column[k].trim()
//               inner += `${columnStart}${k_res}${columnEnd}`
//             }
//             content += `${rowStart}${inner}${rowEnd}`
//           }
//         }
//       }
  
//       if (content) {
//         table += `${tableStart}${content}${tableEnd}`
//       }
  
//        return table;
//     } else {
//       console.error('Invalid input')
//     }
//   }

//   const htmlDecode = str => {
//     return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
//   }






module.exports = {
  marker: marker,
  codeDesigner: codeDesigner
};