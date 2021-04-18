import React,{useState} from 'react';
import {Text,StyleSheet,TextInput,TouchableOpacity, View} from 'react-native';


const Apicall=()=>{
    const [loading,setLoading]=useState(false)

    const [user,setUser]=useState(
        {
            name:'',
            gender:'',
            email:'',
            status:''
        }
    )

    const onChangename=(val)=>{
        setUser({...user,name:val})
    }
    const onChangegender=(val)=>{
        setUser({...user,gender:val})
    }
    const onChangemail=(val)=>{
        setUser({...user,email:val})
    }
    const onChangestatus=(val)=>{
        setUser({...user,status:val})
    }

    const simpanData=()=>{
        setLoading(true)
        var myHeader=new Headers()
        myHeader.append('Authorization','Bearer f975e83aabf1b0dfdbbc9036ed4fdad08d41fb8c206fb788e037d04fbbf4d34f');
        myHeader.append('Content-Type','application/json');

        fetch('https://gorest.co.in/public-api/users',{
            method:'POST',
            headers:myHeader,
            body:user
            // body:JSON.stringify({
            //     name:user.name,
            //     gender:user.gender,
            //     email:user.email,
            //     status:user.status
            // })
        })
        .then((response)=>{
            console.log(response);
            response.statusText
            setLoading(false)
        })
        .then((result)=>console.log(result))
        .catch((error)=>console.log(error))
    }

    return(
        <View>
            <TextInput placeholder={'name'} style={styles.input} onChangeText={(a)=>{onChangename(a)}}/>
            <TextInput placeholder={'gender'} style={styles.input} onChangeText={(b)=>{onChangegender(b)}}/>
            <TextInput placeholder={'email'} style={styles.input} onChangeText={(c)=>{onChangemail(c)}}/>
            <TextInput placeholder={'status'} style={styles.input} onChangeText={(d)=>{onChangestatus(d)}}/>
            <TouchableOpacity onPress={simpanData}>
                <View style={styles.button1}>
                    <Text style={{color:'white',textAlign:'center'}}>{loading?'Proses simpan':'Simpan'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    input:
            {
                height:40,
                borderWidth:1,
                borderColor:'black',
                padding:10,
                margin:10
            }
    ,
    button1:{
        
        backgroundColor:'#8e9aaf',
        width:100,
        height:50,
        textAlignVertical:'center',
        padding:10,
        margin:10
    }
}
)

export default Apicall