
import { useState } from 'react';
import './App.css';
const game=new Array(9).fill("");
function App() {


  const [turn,setTurn]=useState("X");
  const[board,setBoard]=useState(false);
  const[message,setMessage]=useState("");
  const[click,setClick]=useState(0);
  const toggleTurn=(index)=>{
    if(game[index]!=="" || board){
      return;
    }
    else{
    if(turn==="X"){
      setTurn("0");
    }
   else{
      setTurn("X")
   }
    game[index]=turn;
    setClick(click+1)
  }


   if(click === 8  ){ 
     setMessage("Game Tie");
     
  }
  checkWinner();
  }


  const checkWinner=()=>{
    if((game[0]!==""&&game[0]===game[1]
    &&game[1]===game[2])||
    (game[3]!==""&&game[3]===game[4]
    &&game[4]===game[5])||
    (game[6]!==""&&game[6]===game[7]
    &&game[7]===game[8])||                //horizontal
    (game[0]!==""&&game[0]===game[3]
    &&game[3]===game[6])|| 
    (game[1]!==""&&game[1]===game[4]      //vertical
    &&game[4]===game[7])|| 
    (game[2]!==""&&game[2]===game[5]
    &&game[5]===game[8])||  
    (game[0]!==""&&game[0]===game[4]      //diagonal
    &&game[4]===game[8])||
    (game[2]!==""&&game[2]===game[4]
    &&game[4]===game[6]))              
  
  {
  setBoard(true);
  setMessage("Game over " + turn +  "won")
  }
}
const resetGame=()=>{
  game.fill("");
  setBoard(false);
  setMessage("");
  setClick(0)
}
  return (
    <div className="App">
     <h2>Tic Tac Toe</h2>
        
      <div className='board-container'>
      {game.map((cell,index)=>(
        <div key={index}>
            <button  className="btn"onClick={()=>toggleTurn(index)}>
              {cell}
            </button>
           
            </div>
          
      ))}
      <br/>

      {board && <div className='message-container'>
           <div className='message'>
              <h3>{message}</h3>

              </div>
              <button className='btn-add' onClick={resetGame}>Play Again</button>
            </div>
      } 
   </div>
   </div>
  
  );
}

export default App;
