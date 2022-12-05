function fromJSONToHTMLTable(json) {
    function replaceEntity(text) {
        const htmlEntities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;'
        };
        return String(text).replace(/([&<>\"'])/g, match => htmlEntities[match]);
    }
 
    const objects = JSON.parse(json);
    let tr = {td: []};
 
    for (const obj of objects) {
        if (!tr.th) {
            tr.th = Object.keys(obj).map(replaceEntity);
        }
        tr.td.push(Object.values(obj).map(replaceEntity));
    }
 
    console.log('<table>');
    console.log(`<tr><th>${tr.th.join('</th><th>')}</th></tr>`);
    tr.td.forEach(value => console.log(`<tr><td>${value.join('</td><td>')}</td></tr>`));
    console.log('</table>');
}