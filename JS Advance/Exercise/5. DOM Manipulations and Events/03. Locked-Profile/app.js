function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(b => b.addEventListener('click', onClick));

    function onClick(ev) {
        const profile = ev.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        // console.log(isActive)

        if(isActive) {
            let div = profile.querySelector('div');
            
            // console.log('here')

            if(ev.target.textContent == 'Show more') {
                div.style.display = 'block';
                ev.target.textContent = 'Hide it'
            } else {
                div.style.display = 'none';
                ev.target.textContent = 'Show more'
            }
        }

    }
    
}
