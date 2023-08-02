import './App.css';
import { useState } from 'react';
import JsonData from './USER_DATA.json'
import ReactPaginate from 'react-paginate';

function App() {
  const [users, setUsers]=useState(JsonData.slice(0,530))
  // console.log(users)
  const [pageNumber, setPageNumber]=useState(0);

  const userPerPage=10;
  const pageVisited=pageNumber * userPerPage;

  const userDisplay= users
  .slice(pageVisited, pageVisited + userPerPage)
  .map((user)=>{
    return(
    <div style={{width:'400px', height:'200px',margin:'60px', backgroundColor:"purple",padding:'50px', display:'flex', flexDirection:'column',}} key={user.id}>
      <li>FirstName: {user.firstName}</li>
      <li>LastName: {user.lastName}</li>
      <li> UserEmail: {user.email}</li>
    </div>
    );
  });
  // console.log(userDisplay)
  const pageCount =Math.ceil(users.length / userPerPage);

const changePage =({selected})=>{
 setPageNumber(selected);
}


  return (
    
    <div style={{width:'100%', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:"center"}}>
      {userDisplay}
      <div >

      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={'Next'}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationButton"}
      previousLinkClassName={"previousButton"}
      nextLinkClassName={"nextButton"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
      />
      </div>
    </div>
  
  );
}

export default App;
