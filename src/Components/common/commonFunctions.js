
let imageStyle = "max-width:100%;max-height:100%;text-align:center"
  
let codeStyle = `background: #343a40;border: 1px solid #ddd;color: white;page-break-inside: avoid;font-family: monospace;font-size: 16px;
line-height: 1.6;margin-bottom: 1.6em;max-width: 100%;overflow: auto;padding: 1em 1.5em;display: block;word-wrap: break-word;border-radius: 10px`;

//   let codeStyle = `background: rgb(246, 246, 246);border: 1px solid green;color: black;page-break-inside: avoid;font-family: monospace;font-size: 16px;
//   line-height: 1.6;margin-bottom: 1.6em;max-width: 100%;overflow: auto;padding: 1em 1.5em;display: block;word-wrap: break-word;border-radius: 10px`;

const marker = (src) => 
{
    var h='';

    function escape(t)
    {
        return new Option(t).innerHTML;
    }
    function inlineEscape(s)
    {
        return escape(s)
            
        .replace(/!\[([^\]]*)]\(([^(]+)\)/g, '<img alt="$1" src="$2" style="'+ imageStyle +'">')
        .replace(/\[([^\]]+)]\(([^(]+?)\)/g, '$1'.link('$2'))
        // .replace(/````([^````]+)````/g, '<pre style="'+ codeStyle +'" id="javascript">$1</pre>')
        .replace(/````([^````]+)````/g, '<pre class="language-javascript"><code class="language-javascript">`$1`</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, '<strong>$2</strong>')
        .replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, '<em>$2</em>')
        .replace(/(?:\r\n|\r|\n)/g, "<br>");
    }

    src
    .replace(/^\s+|\r|\s+$/g, '')
    .replace(/\t/g, '    ')
    .split(/\n\n+/)
    .forEach(function(b, f, R)
    {
        f=b[0];
        R=
        {
            '*':[/\n\* /,'<ul><li>','</li></ul>'],
            '1':[/\n[1-9]\d*\.? /,'<ol><li>','</li></ol>'],
            ' ':[/\n    /,'<pre><code>','</code></pre>','\n'],
            '>':[/\n> /,'<blockquote>','</blockquote>','\n']
        }[f];
        h+=
            R?R[1]+('\n'+b)
                .split(R[0])
                .slice(1)
                .map(R[3]?escape:inlineEscape)
                .join(R[3]||'</li>\n<li>')+R[2]:
            f=='#'?'<h'+(f=b.indexOf(' '))+'>'+inlineEscape(b.slice(f+1))+'</h'+f+'>':
            f=='<'?b:
            '<p>'+inlineEscape(b)+'</p>';
    });
    return (h);
};


// const jsColour = (string) =>{
//   console.log(typeof(string))
//   string = String(string)
//   var code = string.match(/<pre>(.*?)<\/pre>/g);
//   console.log(code)
//   text = code.split('').map(function(el) {
//       return '<pre class="javascript-' + el.toLowerCase() + '">' + el + '</pre>';
//   }).join('');

// return code.innerHTML = text;
// }


const removeTags = (str) => {
  if ((str==null) || (str==''))
      return false;
  else
      str = str.toString();
        
  // Regular expression to identify HTML tags in 
  // the input string. Replacing the identified 
  // HTML tag with a null string.
  return str.replace( /(<([^>]+)>)/ig, '');
}

 const changeTextColort =  (string) =>{
   if(string){
    var matches = ["let", "int", "function", "var"];

    // get the current value of the "myTextField" element
    // console.log(string)
    var myTextFieldValue = (string);
    // console.log(myTextFieldValue)
    // split this string at every space character - we now have
    // an array of individual words
    var myTextFieldWords = myTextFieldValue.split(' ');
    // console.log(myTextFieldWords)
    // for each of these words, test if the "matches" array contains
    // the word.  If it does, surround it with a <span class="match"> tag.
    var formattedWords = myTextFieldWords.map(function(word) {
      if (matches.indexOf(word) != -1) {
        return '<span style="color:blue">' + word + '</span>';
      } else {
        return word;
      }
    });

    console.log(formattedWords)

    return formattedWords.join(" ");
  
    // formattedWords now looks like this:
    // ['<span>his</span>', 'first' 'entering', 'a' .... ]
    
    // join all the items in the formattedWords array (with a 
    // space between each word) into a single string, and set
    // it as the innerHTML of the #title element
    // document.getElementById('title').innerHTML = formattedWords.join(' ');

   }
 
};


//   console.log(window['changeTextColort']("text"))






module.exports = {
  marker: marker,
  changeTextColort:changeTextColort
};