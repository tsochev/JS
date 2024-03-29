function create(words) {
   const content = document.getElementById('content');
 
   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p)

      div.addEventListener('click', onClick);

      content.appendChild(div);

      function onClick(ev) {
         ev.currentTarget.children[0].style.display = '';
      }

   }
}