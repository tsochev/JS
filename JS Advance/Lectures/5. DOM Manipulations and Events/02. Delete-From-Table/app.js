function deleteByEmail() {
    // select input field and read value - search with attribute
    const value = document.querySelector('input[name="email"]').value;

    // repeat for every table row
    // - select second column
    // - compare text content with input value
    // - if they are equal - remove current row
    const rows = Array.from(document.querySelectorAll('tbody tr'));


    let found = false
    for(let row of rows) {
        if (row.children[1].textContent == value) {
            const parent = row.parentElement;
            parent.removeChild(row);
            found = true
        } // -> from row we catch the second column by row.children[1]
        
        
    }

    // display result
    if (found) {
        document.getElementById('result').textContent = 'Deleted.'
    } else {
        document.getElementById('result').textContent = 'Not found.'

    }
    

}