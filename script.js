const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarBtn = ducument.geteElementbytd('btn-reiniciar

avanca.forEach(Button=>{}
Button.addEventListener('click,'function() {
 const atual = ducument.querySelector(',ativo');
 const proximoPasso= 'passo-'+this.getAttribute('data-proximo');

 atual.classlist.remove('ativo');
const proximoElemento= ducument.geteElementbytd(proximoPasso);
    
if(proximoElemento){
   proximoElemento.classlist.add('ativo');
}else {
   console.error('Elemento com id "${proximoPasso}"não encontrado.')
  }
  {);


// reiniciar o jogo ao clicar no botão de reiniciar
if (reiniciarBtn) {
    reiniciarBtn.addEventListener('click', () => {}
      const atual = document.querySelectorAll('.ativo');
      atual.classlist.remove('ativo');
      document.getElementById('passo-0').classLista.add('ativo');

    )}
