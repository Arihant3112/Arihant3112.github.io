
//var squares= document.getElementsByClassName("abc");
 var row, col,no; 
var xa=0;
var oa=0;
var tiea=0;
  
var player = 'x', opponent = 'o'; 
    
    
     var board = 
    [ 
        [ '_', '_', '_' ], 
        [ '_', '_', '_' ], 
        [ '_', '_', '_' ] 
    ]; 
var arti;
    
document.getElementById("ai").addEventListener("click",function(event){
     document.getElementById("scorex").innerHTML=xa;
        document.getElementById("scoreo").innerHTML=oa;
        document.getElementById("scoretie").innerHTML=tiea;
     var tem=0;
    document.getElementById("ghi").classList.add("bpl");
    document.getElementById("ghi").classList.add("bcd");
 document.getElementById("ghi").innerHTML="";
       
        document.getElementById("fil").innerHTML=  "";
    document.getElementById("ai").classList.add("selected");
   document.getElementById("noai").classList.remove("selected");
   
    arti=true;
    
  for(var i=0;i<9;i++){
        
        squares[i].classList.remove("x");
        squares[i].classList.remove("o");
    }
    for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++)
                {
                    board[i][j]='_';
                }
        }
    
    
    findBestMove(board);  
    
     document.getElementById("image").addEventListener("click",function(event){
         console.log("mouse clicked");
         if(arti && tem==0)
             {
         
           var element = document.getElementById('image'); //replace elementId with your element's Id.
var rect = element.getBoundingClientRect();
var elementLeft,elementTop;
       
            
        
      
       x=event.clientX;
       y=event.clientY;
                 console.log(x);
                 console.log(y);
     if (x>rect.left && x<rect.left+200)  
  {
    
    j=0;
    
  }


  if (x>rect.left+200 && x<rect.left+400)
  {
   
    j=1 ;
    
  }
  if (x>rect.left+400 && x<rect.left+600)
  {
    
    j=2;
    
  }
  if (y>rect.top && y<rect.top+200)
  {
    
    i=0;
  }
  if (y>rect.top+200 && y<rect.top+400)
  {
   
    i=1;
  }
  if (y>rect.top+400 && y<rect.top+600)
  {
   
    i=2;
  }
   
         
         
     if(i==0 && j==0)
         {
         no=0;
         }
     if(i==0 && j==1)
         {
         no=1;
         }
      if(i==0 && j==2)
         {
         no=2;
         }
          
       if(i==1 && j==0)
         {
         no=3;
         }
       if(i==1 && j==1)
         {
         no=4;
         }
       if(i==1 && j==2)
         {
         no=5;
         }
       if(i==2 && j==0)
         {
         no=6;
         }
       if(i==2 && j==1)
         {
         no=7;
         }
       if(i==2 && j==2)
         {
         no=8;
         }
     if(!squares[no].classList.contains("x") && !squares[no].classList.contains("o"))
         {
         squares[no].classList.add("o");
         board[i][j]=opponent;
             var fin=evaluate(board);
             if(fin==-10)
                 {
                     document.getElementById("ghi").classList.remove("bcd");
           document.getElementById("ghi").innerHTML="O";
              document.getElementById("fil").innerHTML=" wins!";
                     oa++;
                     document.getElementById("scoreo").innerHTML=oa;
                     
                     tem=1;
                 }
   console.log(board);
        findBestMove(board); 
              var fin=evaluate(board);
             if(fin==10)
                 {
                      document.getElementById("ghi").classList.remove("bpl");
        document.getElementById("ghi").innerHTML="Computer";
       
        document.getElementById("fil").innerHTML=  " wins!";
                     xa++;
                     document.getElementById("scorex").innerHTML=xa;
                     tem=1;
                 }
             if(fin==0 && isMovesLeft(board)==false)
                 {
                      document.getElementById("fil").innerHTML=  "Tie!";
                     tiea++;
                     document.getElementById("scoretie").innerHTML=tiea;
                     
                     tem=1;
                 }
                 
             }
             }
     });
        
});



function isMovesLeft(board) 
{ 
    for (var i = 0; i<3; i++) 
        for (var j = 0; j<3; j++) 
            if (board[i][j]=='_') 
                return true; 
    return false; 
} 
  

function evaluate(b) 
{ 
    
    for (var row = 0; row<3; row++) 
    { 
        if (b[row][0]==b[row][1] && 
            b[row][1]==b[row][2]) 
        { 
            if (b[row][0]==player) 
                return +10; 
            else if (b[row][0]==opponent) 
                return -10; 
        } 
    } 
  
   
    for (var col = 0; col<3; col++) 
    { 
        if (b[0][col]==b[1][col] && 
            b[1][col]==b[2][col]) 
        { 
            if (b[0][col]==player) 
                return +10; 
  
            else if (b[0][col]==opponent) 
                return -10; 
        } 
    } 
  
    
    if (b[0][0]==b[1][1] && b[1][1]==b[2][2]) 
    { 
        if (b[0][0]==player) 
            return +10; 
        else if (b[0][0]==opponent) 
            return -10; 
    } 
  
    if (b[0][2]==b[1][1] && b[1][1]==b[2][0]) 
    { 
        if (b[0][2]==player) 
            return +10; 
        else if (b[0][2]==opponent) 
            return -10; 
    } 
  
   
    return 0; 
} 
  

function minimax(board,depth,  isMax) 
{ 
    var score = evaluate(board); 
  
   
    if (score == 10) 
        return score; 
  
    
    if (score == -10) 
        return score; 
  
   
    if (isMovesLeft(board)==false) 
        return 0; 
  
   
    if (isMax) 
    { 
        var best = -1000; 
  
       
        for (var i = 0; i<3; i++) 
        { 
            for (var j = 0; j<3; j++) 
            { 
               
                if (board[i][j]=='_') 
                { 
                    
                    board[i][j] = player; 
  
                  
                    best = max( best, 
                        minimax(board, depth+1, !isMax) ); 
  
                  
                    board[i][j] = '_'; 
                } 
            } 
        } 
        return best; 
    } 
  
    else
    { 
        var best = 1000; 
  
      
        for (var i = 0; i<3; i++) 
        { 
            for (var j = 0; j<3; j++) 
            { 
                
                if (board[i][j]=='_') 
                { 
                     
                    board[i][j] = opponent; 
  
                     
                    best = min(best, 
                           minimax(board, depth+1, !isMax)); 
  
                    
                    board[i][j] = '_'; 
                } 
            } 
        } 
        return best; 
    } 
} 
  

function findBestMove(board) 
{ 
    console.log("hey");
    var bestVal = -1000; 
    var bestMove; 
    row = -1; 
    col = -1; 
  
   
    for (var i = 0; i<3; i++) 
    { 
        for (var j = 0; j<3; j++) 
        { 
           
            if (board[i][j]=='_') 
            { 
                // Make the move 
                board[i][j] = player; 
  
                
                var moveVal = minimax(board, 0, false); 
  
             
                board[i][j] = '_'; 
  
            
                if (moveVal > bestVal) 
                { 
                    row = i; 
                    col = j; 
                    bestVal = moveVal; 
                } 
            } 
        } 
    } 
  
   
  board[row][col]=player;
    
    if(row==0 && col==0)
         {
         no=0;
         }
     if(row==0 && col==1)
         {
         no=1;
         }
      if(row==0 && col==2)
         {
         no=2;
         }
          
       if(row==1 && col==0)
         {
         no=3;
         }
       if(row==1 && col==1)
         {
         no=4;
         }
       if(row==1 && col==2)
         {
         no=5;
         }
       if(row==2 && col==0)
         {
         no=6;
         }
       if(row==2 && col==1)
         {
         no=7;
         }
       if(row==2 && col==2)
         {
         no=8;
         }

squares[no].classList.add("x");    
} 
function min(a,b)
{
    if(a>b)
        return b;
    else
        return a;
}
function max(a,b)
{
     if(a>b)
        return a;
    else
        return b;
    
}