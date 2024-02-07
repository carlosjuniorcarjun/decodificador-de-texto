var textInput = document.querySelector("#input_texto");
var output = document.querySelector("output");

const copiar = () => navigator.clipboard.writeText(output_texto.value);


function criptografar(){
  
  var texto = textInput.value;

  var textoCriptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  document.getElementById('output_texto').innerHTML = textoCriptografado;

  if(textInput.value.length == 0){
    alert("Digite o texto");
    document.getElementById('btn_copiar').setAttribute('disabled', true);
  }else{
    document.getElementById('btn_descriptografar').removeAttribute('disabled');
    document.getElementById('btn_criptografar').setAttribute('disabled', true);
    
    document.getElementById('btn_copiar').removeAttribute('disabled');
  }
}

function descriptografar(){
  
  var texto = textInput.value;
  
  var textoDescriptografado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
  document.getElementById('output_texto').innerHTML = textoDescriptografado;
  
  if(textInput.value.length == 0){
    alert("Digite o texto");
    document.getElementById('btn_copiar').setAttribute('disabled', true);
  }else{
    document.getElementById('btn_criptografar').removeAttribute('disabled');
    document.getElementById('btn_descriptografar').setAttribute('disabled', true);

    document.getElementById('btn_copiar').removeAttribute('disabled');
  }
}

// Código para não deixar dá o Ctrl + V => const nao_deixar_colar = document.querySelector ("#input_texto");
// Código para não deixar dá o Ctrl + V => nao_deixar_colar.addEventListener("paste", function(e){
// Código para não deixar dá o Ctrl + V => e.preventDefault();
// Código para não deixar dá o Ctrl + V => });


// Código para não deixar colar caracteres especiais, passo a passo:
// Selecionar o input
const nao_deixar_colar_caracteres_especiais = document.querySelector("#input_texto");
// Adicionar evento - paste
nao_deixar_colar_caracteres_especiais.addEventListener("paste", function(){
  const cadeia_de_caracteres_permitidos = new RegExp("^[a-z \b]+$");
  const caracteres_copiados = this;

// Precisa colocar o tempo para o código reconhecer e não deixar colar o caractere
  setTimeout(function(){

    const texto_copiado = caracteres_copiados.value;

    if(!cadeia_de_caracteres_permitidos.test(texto_copiado)) {
      caracteres_copiados.value = "";
    }

  },10); // Aqui é o tempo

});


// Código para não deixar escrever letra maiúscula nem caracteres especiais
const bloquear_caracteres_especiais = document.querySelector("#input_texto");
bloquear_caracteres_especiais.addEventListener("keypress", function(e){

  if(!caracterePermitidos(e)) {
    e.preventDefault();
  }

});

function caracterePermitidos(e) {

  const caracteres = String.fromCharCode(e.keyCode);

  const padrao = '[a-z ]';

  if(caracteres.match(padrao)) {
    return true;
  }
}
