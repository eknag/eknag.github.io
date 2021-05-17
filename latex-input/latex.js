function modifyH1(){
    const input = document.querySelector('#input-text');
    //Inner html doesn't work :(  
    document.getElementById('latex-box').innerHTML = input.value;
    input.value = "";
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.formula]);
  }
  
  document.querySelector('#fake-submit').onclick = modifyH1;
  
  