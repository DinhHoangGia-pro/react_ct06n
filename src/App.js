import './App.css';

const App=()=> {
  var tenlop="Xin chao cac ban ct06n";
  var arr1=[{id:1, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'},  
    {id:2, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}, 
    {id:3, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}, 
    {id:4, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}, 
    {id:5, hoten:'Nguyen Van A', lop:'CT06N', diachi:'17A Cong Hoa'}

  ];

  return (
    <div>
    {tenlop}
    {
         arr1.map(phantu=>{
          return (
            <p>id: {phantu.id}, hoten: {phantu.hoten}, lop: {phantu.lop}, diachi: {phantu.diachi} 
            
            </p>
          );
         })
    }

    </div>    

  );
}



export default App;
