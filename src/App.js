import React, {useState, useEffect} from 'react';


function App() {

  // const [meuEstado, alteraEstado] = useState('outra informação');
  const [usuario,] = useState([]);
  const [meuNome, alteraNome] = useState('');
  const [meuEmail, alteraEmail] = useState('');
  const [meuTel, alteraTel] = useState('');
  const [valorA, alteraA] = useState('');
  const [valorB, alteraB] = useState('');
  const [resultado, somaResultado] = useState('');
 
  
  

  useEffect(function (){
     alteraNome(meuNome.toUpperCase())
     alteraEmail(meuEmail.toLowerCase())
     somaResultado(resultado.toLowerCase())


    //  alteraTel(meuTel.to)

  },[meuNome, meuEmail, resultado])

  function digitaNome (e){
    alteraNome(e.target.value)
  }
  function digitaEmail (e){
    alteraEmail(e.target.value)
  }
  
  function digitaTel (e){
    alteraTel(e.target.value)
  }

  


  let adicionar = e => {

    let objetoUsuario = {
      nome: meuNome,
      email: meuEmail,
      telefone: meuTel
    };

    usuario.push(objetoUsuario);

    
    popula();
  };


  let adicionar2 = e => {

    function somaValores (){
      var s1 = parseInt(valorA)
      var s2 = parseInt(valorB)
      var s3 = (s1 + s2) 
  
      return(s3)
    }

    resultado.push(somaValores);

    
    popula2();
  };

  function digitaA (e){
    alteraA(e.target.value)
  }

  function digitaB (e){
    alteraB(e.target.value)
  }
  



  
  

  let popula = () => {
    var dados = '';

    usuario.forEach(item =>{
      dados +=  '<tr>'+
                  '<td>'+item.meuNome+'</td>'+
                  '<td>'+item.meuEmail+'</td>'+
                  '<td>'+item.meuTel+'</td>'+
                '</tr>'
              
    });

    document.getElementById('usuario').innerHTML= dados;

  }


  let popula2 = () => {
    var dados2 = '';

    resultado.forEach(item =>{
      dados2 +=  <p> Seu resultado é: {resultado} </p>
              
    });

    document.getElementById('resultado').innerHTML= dados2;

  }
  // function editaDados (){
    // alteraEstado('trocou os dados!')
  // }

  return (
    <div>
      <div>

        <p>Digite os dados </p>
        <input type="text" onChange={digitaNome} value={meuNome} /> 
        <input type="text" onChange={digitaEmail} value={meuEmail} /> 
        <input type="text" onChange={digitaTel} Value={meuTel} /> 

        <p>nome {meuNome} </p>
        < p>email {meuEmail} </p>
        <p>Tel {meuTel} </p>
        <button onClick={adicionar}>send</button> 
        <table id="usuario">
        
      </table>
      </div>
      <div>
       <p>conta</p>

       Valor 1<input type="number" onChange={digitaA} value={valorA} /> 
       Valor 2<input type="number" onChange={digitaB} value={valorB} /> 
       <button onClick={adicionar2}>conta</button> 
       <p id='resultado'></p>

      </div>

      
    </div>
    
  );
}

export default App;
