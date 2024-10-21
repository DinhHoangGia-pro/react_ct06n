import { useState } from 'react';
import './App.css';

const App=()=> {
  var tenlop="Xin chao cac ban ct06n";
  var arr1=[{id:1, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'},  
    {id:2, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}, 
    {id:3, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}, 
    {id:4, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}, 
    {id:5, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}
  ];

  const [arr2,setArr2]=useState(
  [{id:1, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'},  
    {id:2, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}, 
    {id:3, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}, 
    {id:4, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}, 
    {id:5, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}
  ]
  );

  const UpadateStudent=id=>
  {
    console.log("Eidt student number:"+id);
      arr1=arr1.map(p=>{

        if (p.id===id)
        {
          p.hoten="Updated "+p.hoten;
        }

        return p;
      }

      );
  }

//-------------------------

const UpadateStudent2=id=>
  {
    console.log("Eidt student number:"+id);
      const newarr2=arr2.map(p=>{

        if (p.id===id)
        {
          p.hoten="Updated "+p.hoten;
        }

        return p;
      }
      
      );

      setArr2(newarr2);
  }


  return (
    <div>
    {tenlop}
    {
         arr1.map(phantu=>{
          return (
            <p>id: {phantu.id}, hoten: {phantu.hoten}, lop: {phantu.lop}, diachi: {phantu.diachi} 
            <input type="button" value="Edit sv" 
            style={{backgroundColor:"greenyellow"}} onClick={UpadateStudent.bind(this,phantu.id)}/>
            </p>
          );
         })
    }

    <h2 style={{padding:30}}> Danh sach sinh vien su dung State Hook</h2>
    {
        arr2.map(p=>{
        return (
        <p>id: {p.id}, hoten: {p.hoten}, lop: {p.lop}, diachi: {p.diachi} 
            <input type="button" value="Edit sv2" 
            style={{backgroundColor:"rebeccapurple"}} onClick={UpadateStudent2.bind(this,p.id)}/>
            </p>
        );
        }
        )
    
    }

    </div>    

  );
}



export default App;
