function convertHTML(specialString){

specialString = specialString.replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
return specialString;
}

let res = convertHTML("Hamburgers < Pizza < Tacos");
console.log(res);
