import React, {useState} from 'react'


function App() {

  // const [meuEstado, alteraEstado] = useState('outra informação');
  const [usuario, alteraUsuario] = useState([]);
  const [meuNome, alteraNome] = useState('');
  const [meuEmail, alteraEmail] = useState('');
  const [meuTel, alteraTel] = useState('');

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

    usuario.push(objetoUsuario)

    
    popula()
  }
  
  

  let popula = () => {
    var dados = ''

    usuario.forEach(item =>{
      dados +=  '<td>'+item.meuNome+'</td>'+
                '<td>'+item.meuEmail+'</td>'+
                '<td>'+item.meuTel+'</td>';
              
    });

    document.getElementById('usuario').innerHTML= dados
  }
  // function editaDados (){
    // alteraEstado('trocou os dados!')
  // }

  return (
    <div>
      <p>Digite os dados </p>
      <input type="text" onChange={digitaNome} value= {meuNome} /> 
      <input type="text" onChange={digitaEmail} value= {meuEmail} /> 
      <input type="text" onChange={digitaTel} Value= {meuTel} /> 

      <p>nome {meuNome} </p>
      <p>email {meuEmail} </p>
      <p>Tel {meuTel} </p>
       <button onClick={adicionar}>send</button> 
      <table>
        <tr id="usuario" ></tr>
      </table>

      
    </div>
  );
}

export default App;
