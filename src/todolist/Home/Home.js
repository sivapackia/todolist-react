import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./Home.css"
import one from "../Images/img-1.jpg"
import { useNavigate, useSearchParams } from "react-router-dom";
import { Array, isArray } from "../Slice";
import { useDispatch, useSelector } from "react-redux";


const Home=()=>{
   
    const State=useSelector(
        ({data})=>data
    )
    console.log(State)

    const a=useNavigate()
    const dispatch=useDispatch()
    const[param]=useSearchParams()
    let ind=param.get("ind")
    console.log(ind)

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[edit,setEdit]=useState(false)
    const[error,setError]=useState(false)
  

    const TableFunction=()=>{
        let x=State.array.some((value,index)=>{
            return value.Nav 
        })
        if(x==true){
            a(`/Table`)
        }
        else{
            alert("Not Data Found In Table")
        }
    }

    const Edit=()=>{
        if(ind != null){
            let x=State.IsArray.find((value,index)=>{
                return Number(ind) === index
            })
        setName(x.Name)
        setEmail(x.Email)
        setPassword(x.Password)
        setEdit(true)
        }
    }
    useEffect(Edit,[])

    const Handle=(e)=>{
        if((e.target.name === "name")){
            setName(e.target.value)
        }
        else if((e.target.name === "email")){
            setEmail(e.target.value)
            
        }
       else if((e.target.name === "password")){
            setPassword(e.target.value)
            
        }
    }

    const Sumbit=(e)=>{
        e.preventDefault()
        if(name =="" || email =="" || password == ""){
           setError(true)
           console.log("haii")
        }
        else if(edit){
            let Object={Name:name,Email:email,Password:password}
            let x=State.IsArray.map((value,index)=>{
                return ind == index ? Object:value
            })
            dispatch(isArray(x))
            setEdit(false)
            a(`/Table`)
        }
        else{
            let Object={Name:name,Email:email,Password:password}
            dispatch(isArray([...State.IsArray,Object]))
            setName("")
            setEmail("")
            setPassword("")
            let x=State.array.map((value,index)=>{
                return value.Nav == false ?{...value,Nav:true}:value
            })
            dispatch(Array(x))
        }
    }
    return(
        <>
        <Box sx={{background:"linear-gradient(#cac531,#f3f9a7)",width:{sx:"100%",xs:"100%",md:"100%"}}}>
        <Box sx={{width:{sx:"90%",xs:"90%",md:"90%"},display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto",height:"100vh",flexWrap:"wrap"}}>
            <Box sx={{width:{sx:"100%",xs:"100%",md:"100%"}}}>
                <Typography variant="h3" sx={{textAlign:"center",fontWeight:"800"}}>TODO LIST</Typography>
            </Box>
            <Box sx={{width:{sx:"100%",xs:"100%",md:"45%"},margin:{xs:"10px 0px",sm:"10px 0px",md:"0px"}}}>
                <Typography component="img" src={one} sx={{width:{md:"90%",xs:"100%"}}} height="540px">
                </Typography>
            </Box>
            <Box sx={{backgroundColor:"#f2db2b",height:"500px",width:{sx:"100%",xs:"100%",md:"50%"},padding:{md:"20px 20px",xs:"10px 10px",sm:"15px 15px"}}}>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",height:"100px"}}>
                       <Typography component="label" sx={{fontWeight:800,fontSize:{md:"30px",xs:"20px",sm:"25px"},color:"black",width:{md:"40%",xs:"40%",sm:"40%"},textAlign:"center"}}>Name :</Typography><br/>
                       <Typography component="input" type="text"  placeholder="Enter The Name" sx={{width:{md:"50%",xs:"50%",sm:"50%"},padding:{md:"10px 15px",sm:"10px 10px",xs:"5px 10px"},fontWeight:800,fontSize:{md:"25px",xs:"15px",sm:"25px"},borderRadius:"20px"}} className="Input" name="name" value={name} onChange={Handle}></Typography>
                       {error && name =="" ?<marquee style={{color:"red",fontWeight:"800"}}>Enter The User name</marquee>:""}
                </Box>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",height:"100px"}}>
                       <Typography component="label" sx={{fontWeight:800,fontSize:{md:"30px",xs:"20px",sm:"25px"},color:"black",width:{md:"40%",xs:"40%",sm:"40%"},textAlign:"center"}}>Email :</Typography><br/>
                       <Typography component="input" type="email"  placeholder="Enter The Email Id" sx={{width:{md:"50%",xs:"50%",sm:"50%"},padding:{md:"10px 15px",sm:"10px 10px",xs:"5px 10px"},fontWeight:800,fontSize:{md:"25px",xs:"15px",sm:"25px"},borderRadius:"20px"}} className="Input" name="email" value={email} onChange={Handle}></Typography>
                       {error && name =="" ?<marquee style={{color:"red",fontWeight:"800"}}>Enter The User Email</marquee>:""}
                </Box>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",height:"100px"}}>
                       <Typography component="label" sx={{fontWeight:800,fontSize:{md:"30px",xs:"20px",sm:"25px"},color:"black",width:{md:"40%",xs:"40%",sm:"40%"},textAlign:"center"}}>Password :</Typography><br/>
                       <Typography component="input" type="password"  placeholder="Enter The Password" sx={{width:{md:"50%",xs:"50%",sm:"50%"},padding:{md:"10px 15px",sm:"10px 10px",xs:"5px 10px"},fontWeight:800,fontSize:{md:"25px",xs:"15px",sm:"25px"},borderRadius:"20px"}} className="Input" name="password" value={password} onChange={Handle}></Typography>
                       {error && name =="" ?<marquee style={{color:"red",fontWeight:"800"}}>Enter The User Password</marquee>:""}
                </Box>
                <Box sx={{marginTop:"30px"}}>
                    {edit ?
                     <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                     <Typography className="btn" component="button" sx={{backgroundColor:"#f2db2b",fontWeight:800,padding:"10px 15px",border:"2px solid white",borderRadius:"15px",color:"black"}} onClick={Sumbit}>Sumbit</Typography>
                     </Box>:
                    
                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                        <Typography className="btn" component="button" sx={{backgroundColor:"#f2db2b",fontWeight:800,padding:"10px 15px",border:"2px solid white",borderRadius:"15px",color:"black"}} onClick={Sumbit}>Sumbit</Typography>
                        <Typography className="btn" component="button" sx={{backgroundColor:"#f2db2b",fontWeight:800,padding:"10px 15px",border:"2px solid white",borderRadius:"15px",color:"black"}} onClick={TableFunction}>Table</Typography>
                    </Box>
}
                </Box>
            </Box>
        </Box>
        </Box>
        </>
    )
}

export default Home