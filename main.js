const botao = document.querySelector('button')
const sec = document.querySelector('section')
const corpo = document.body.classList


botao.addEventListener('click', () => {
    corpo.toggle('dark')
    if(corpo == 'dark'){
        botao.textContent = 'claro'
        sec.innerHTML = `<img class="foto" src="ESCURO.jpg" alt="">`
    }else{
        botao.textContent = 'escuro'
        sec.innerHTML = `<img class="foto" src="CLARO.jpg" alt="">`
    }
})