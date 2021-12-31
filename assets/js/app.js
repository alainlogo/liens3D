const menuItems = [...document.querySelectorAll('.menu-item')];

menuItems.forEach(item =>{

    let word = item.children[0].children[0].innerText.split('');
    item.children[0].innerHTML = '';
    word.forEach((letter, idx) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
    })
    let cloneDiv = item.children[0].cloneNode(true);
    cloneDiv.style.position = 'absolute';
    cloneDiv.style.left = '0'
    cloneDiv.style.top = '0';
    item.appendChild(cloneDiv)
})