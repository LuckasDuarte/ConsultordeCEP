import React,{useEffect, useState}from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  
}
   from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function App() {


  //Estados de Controle
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [ddd, setDDD] = useState('');
  const [uf, setUF] = useState('');

  
  //Função onde Encontra o CEP
  async function ChamarCep(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    let req = await fetch(url);
    let res = await req.json();

    console.log(res);
    
    //Atribui seus valores aos estados
    setCep(res.cep)
    setBairro(res.bairro)
    setLogradouro(res.logradouro)
    setLocalidade(res.localidade)
    setDDD(res.ddd)
    setUF(res.uf)

  }
  

  return (
    <View style={{bottom:10}}>
      <StatusBar style="auto" />

      {/**Logo Correios */}
      <View style={styles.logoContainer}>
        <Image source={{uri:'https://th.bing.com/th/id/R.34edcc49259dadbb3d90f0ef63582435?rik=hCWpNY773vxpvQ&pid=ImgRaw&r=0'}}
        style={styles.logo}
      />
      </View>
      
      {/**Titulo do app */}
      <View style={{justifyContent:'center', alignItems:'center',bottom:50}}>
        <Text style={styles.titulo}>
          Consultar CEP
        </Text>
      </View>

      {/**Entrada de Dados CEP */}
      <View style={styles.btnView}>
        <View style={styles.cepview}>
          <TextInput
        placeholder='DIgite seu CEP:'
        style={styles.entradaCEP}
        placeholderTextColor={'gray'}
        keyboardType='number-pad'
        textContentType='postalCode'
        onChangeText={(text) =>{
          if(text.length == 8 ){
            ChamarCep(text)
          }
        }}
        
        
        />
      </View>

      </View>


      {/**Resultados */}
      <View style={styles.resContainer}>

        <View style={styles.resultView}>
          <Text style={{fontWeight:'bold'}}>Cep</Text>
          <TextInput
            style={styles.saidaResultado}
            value={cep}
          />
        </View>
        
        <View style={styles.resultView}>
          <Text style={{fontWeight:'bold'}}>Logradouro</Text>
          <TextInput
            style={styles.saidaResultado}
            value={logradouro}
            
          />
        </View>
        
        <View style={styles.resultView}>
          <Text style={{fontWeight:'bold'}}>Bairro</Text>
          <TextInput
            style={styles.saidaResultado}
            value={bairro}
          />
        </View>
        
        <View style={styles.resultView}>
           <Text style={{fontWeight:'bold'}}>Localidade</Text>
           <TextInput
            style={styles.saidaResultado}
            value={localidade}
           />
        </View>
       
        <View style={styles.resultView}>
          <Text style={{fontWeight:'bold'}}>DDD</Text>
          <TextInput
            style={styles.saidaResultado}
            value={ddd}
          />
        </View>

        <View style={styles.resultView}>
          <Text style={{fontWeight:'bold'}}>Estado</Text>
          <TextInput
            style={styles.saidaResultado}
            value={uf}
          />
        </View>
        
      </View>

      {/** Créditos do Desenvolvedor */}
      <View style={styles.creditoContainer}>
        <AntDesign name="copyright" size={20} color="black" />
        <Text style={styles.credito}>
          Desenvolvido por: Lucas Duarte
        </Text>
      </View>


        
        

        







      


    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer:{
    justifyContent:'center',
    alignItems:'center',
    top:20
  },
  logo:{
    width:'50%',
    height:'50%',
  },
  tituloContainer:{
    justifyContent:'center',
    alignItems:'center',
    bottom:80
  },
  titulo:{
    fontSize:25,
    fontWeight:'bold',
  },
  entradaCEP:{  
    padding:10,
    borderColor:'gray',
    borderWidth:0.5,
    borderRadius:15,
    width:'100%',
    
  },
  inputView:{
    width:'60%',
    justifyContent:'center',
    marginHorizontal:75,
    borderColor:'transparent'
  },
  btnView:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  btn:{
    backgroundColor:'yellow',
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    height:50,
    marginTop:20,
    bottom:50,
    borderColor:'#069',
    borderWidth:2,
    borderRadius:25
  },
  txtbtn:{
    fontSize:20,
    fontWeight:'bold',
    bottom:2.5,
  },
  cepview:{
    width:280,
    bottom:50
  },
  resultView:{
    flexDirection:'row',
    bottom:30,
    marginLeft:80,
    marginTop:5
  },
  saidaResultado:{
    borderBottomColor:'#222',
    borderBottomWidth:0.5,
    width:'60%',
    marginLeft:10,
    bottom:5
  },
  creditoContainer:{
    flexDirection:'row',
    marginHorizontal:50,
    bottom:5
  },
  credito:{
    marginLeft:10
  }
 

});
