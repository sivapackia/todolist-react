import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Table.css"
import { useDispatch, useSelector } from "react-redux";
import { Array, isArray } from "../Slice";



const TableData =()=>{

  const a=useNavigate()
  const State=useSelector(
    ({data})=>data
  )
 const dispatch=useDispatch()

 const Home=()=>{
  a(`/`)
 }

  const Delete=(value,index)=>{
    let k=index
     let x=State.IsArray.filter((x,y)=>{
      return index == y ? "":value
     })
     dispatch(isArray(x))
     if(k==0){
      let y=State.array.map((value,index)=>{
        return value.Nav == true ?{...value,Nav:false}:value
      })
      dispatch(Array(y))
      a(`/`)
     }
  }

  const Edit=(value,index)=>{
       a(`/?ind=${index}`)
  }
    return(
        <>
        <Box  sx={{background:"linear-gradient(#cac531,#f3f9a7)",width:{sx:"100%",xs:"100%",md:"100%"},height:"100vh"}}>
        <Box sx={{height:"100px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Typography variant="h3" sx={{fontWeight:800}} onClick={Home}>TABLE</Typography>
        </Box>
        <TableContainer component={Paper} sx={{width:{sx:"95%",xs:"95%",md:"95%"},margin:"0 auto"}}>
      <Table sx={{width:{md:"100%",xs:"100%",sm:"100%"} }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="tablehead" align="center">Name</TableCell>
            <TableCell className="tablehead" align="center">Email</TableCell>
            <TableCell className="tablehead" align="center">Password</TableCell>
            <TableCell className="tablehead" align="center">Edit</TableCell>
            <TableCell className="tablehead" align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {State.IsArray.map((row,index) => (
            <TableRow
              key={row.Name}
              className="tablerow"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center" className="tablebody">
                {row.Name}
              </TableCell>
              <TableCell className="tablebody" align="center">{row.Email}</TableCell>
              <TableCell className="tablebody" align="center">{row.Password}</TableCell>
              <TableCell className="tablebody" align="center" onClick={()=>Edit(row,index)} sx={{color:"blue"}}><AiFillEdit/> </TableCell>
              <TableCell className="tablebody" align="center" onClick={()=>Delete(row,index)} sx={{color:"red"}}><AiFillDelete/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
        </>
    )
}
export default TableData