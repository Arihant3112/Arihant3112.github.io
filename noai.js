
var xi=0;
var oi=0;
var tiei=0;
 var squares= document.getElementsByClassName("abc");
document.getElementById("noai").addEventListener("click",function(event){
      
        document.getElementById("scorex").innerHTML=xi;
        document.getElementById("scoreo").innerHTML=oi;
        document.getElementById("scoretie").innerHTML=tiei;
     document.getElementById("ghi").classList.add("bpl");
    document.getElementById("ghi").classList.add("bcd");
     document.getElementById("ghi").innerHTML="";
       
        document.getElementById("fil").innerHTML=  "";
       for(var i=0;i<9;i++){
        
        squares[i].classList.remove("x");
        squares[i].classList.remove("o");
    }
    arti=false;
    document.getElementById("noai").classList.add("selected");
     document.getElementById("ai").classList.remove("selected");
    var no;
var z=0;
var count=0;
var a = [[],[],[]];
var b = [[],[],[]];


for (i=0; i<3; i++)
  {
    for (j=0; j<3; j++)
    {
      a[i][j]=0;
      b[i][j]=1;
    }
  }

  document.getElementById("image").addEventListener("click",function(event){
      if(!arti)
          {
      if(count==0)
          {
      var x;
var y;
var i,j;
var c=0;
var d=0;
var e=1;
var f=0;
var g=1;
var k=0;
var l=1;
var m=0;
var n=1;
var o=0;
var p=1;
var q=0;
var r=1;
var s=0;
var t=1;
var u=0;
var v=1;
var w=0;
              
            


            var element = document.getElementById('image');
var rect = element.getBoundingClientRect();
var elementLeft,elementTop;
       
       x=event.clientX;
       y=event.clientY;
     
       console.log("rect.left="+rect.left);
      console.log("rect.top="+rect.top);
     console.log("x="+x);
      console.log("y="+y); 
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
     
     console.log("i="+i);
      console.log("j="+j);
     
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

     
     console.log(no);
     
    if (z%2==0 && !squares[no].classList.contains("x") && !squares[no].classList.contains("o"))
  {
    a[i][j]=a[i][j]+1;
    for (i=0; i<3; i++)
    {
      if (a[i][i]==1)
        {d++;
        console.log(d);}
      else
        {if (b[i][i]==2)
          e++;}
    }
    if (d==3)
    {
      console.log("Arihant wins 1");
        document.getElementById("ghi").classList.remove("bpl");
        document.getElementById("ghi").innerHTML="X";
       
        document.getElementById("fil").innerHTML=  " wins!";
        
        
        
         xi++;
        document.getElementById("scorex").innerHTML=xi;
        
        
        count=1;
    } else
      if (e==4)
      {
        console.log("Anu wins");
          document.getElementById("ghi").classList.remove("bcd");
           document.getElementById("ghi").innerHTML="O";
          document.getElementById("fil").innerHTML=" wins!";
          
            oi++;
        document.getElementById("scoreo").innerHTML=oi;
          count=1;
      }
    for (i=0; i<3; i++)
    {
      if (a[i][2-i]==1)
        f++;
      else
        if (b[i][2-i]==2)
          g++;
    }
    if (f==3)
    {
      console.log("Arihant wins2");
        document.getElementById("ghi").classList.remove("bpl");
        document.getElementById("ghi").innerHTML="X ";
        
        document.getElementById("fil").innerHTML=" wins!";
        
        
         xi++;
        document.getElementById("scorex").innerHTML=xi;
        count=1;
    } else
      if (g==4)
      {
        console.log("Anu wins");
           document.getElementById("ghi").classList.remove("bcd");
           document.getElementById("ghi").innerHTML="O";
          document.getElementById("fil").innerHTML=" wins!";
          
          
                 oi++;
        document.getElementById("scoreo").innerHTML=oi;    

          count=1;
      }
    
    for (i=0; i<3; i++)
    {
      for (j=0; j<3; j++)
      {
        if (a[i][j]==1)
          k++;
        else
          if (b[i][j]==2)
            l++;
      }
      if (k==3)
      {
        console.log("Arihant wins3");
          document.getElementById("ghi").classList.remove("bpl");
          document.getElementById("ghi").innerHTML="X";
         
          document.getElementById("fil").innerHTML= " wins!";
          
          
          
           xi++;
        document.getElementById("scorex").innerHTML=xi;
          count=1;
      } else
        if (l==4)
        {
          console.log("Anu wins");
             document.getElementById("ghi").classList.remove("bcd");
           document.getElementById("ghi").innerHTML="O";
            document.getElementById("fil").innerHTML=" wins!";
            
            
             oi++;
        document.getElementById("scoreo").innerHTML=oi;
            count=1;
        }
      k=0;
      l=1;
    }



    for (j=0; j<3; j++)
    {
      for (i=0; i<3; i++)
      {
        if (a[i][j]==1)
          m++;
        else
          if (b[i][j]==2)
            n++;
      }
      if (m==3)
      {
        console.log("Arihant wins4");
          document.getElementById("ghi").classList.remove("bpl");
          document.getElementById("ghi").innerHTML="X";
          
       
          document.getElementById("fil").innerHTML=" wins!";
          
          
          
          
           xi++;
        document.getElementById("scorex").innerHTML=xi;
          
        
          count=1;
      } else
        if (n==4)
        {
          console.log("Anu wins");
             document.getElementById("ghi").classList.remove("bcd");
           document.getElementById("ghi").innerHTML="O";
            document.getElementById("fil").innerHTML=" wins!";
            
            
            
             oi++;
        document.getElementById("scoreo").innerHTML=oi;
            count=1;
        }
      m=0;
      n=1;
    }

if(count!=1)
    {


    for (i=0; i<3; i++)
    {
      for (j=0; j<3; j++)
      {
        if (a[i][j]==0 && b[i][j]==1)
        {
          break;
        } else
        {
          c++;
          continue;
        }
      }
      j=2;
      if (a[i][j]==0 && b[i][j]==1)
        break;
    }
    if (c==9)
    {
      console.log("match is drawn");
        document.getElementById("fil").innerHTML="Tie!";
        
        
         tiei++;
        document.getElementById("scoretie").innerHTML=tiei;
        count=1;
    }
        
  }
       squares[no].classList.add("x");
       z=z+1;
 
          
  } else
    if (z%2!=0 && !squares[no].classList.contains("x") && !squares[no].classList.contains("o"))
    {
      b[i][j]=b[i][j]+1;
      
      for (i=0; i<3; i++)
      {
        if (a[i][i]==1)
          o++;
        else
          if (b[i][i]==2)
            p++;
      }
      if (o==3)
      {
        console.log("Arihant wins5");
          document.getElementById("ghi").classList.remove("bpl");
          document.getElementById("ghi").innerHTML="X";
      
          document.getElementById("fil").innerHTML=  " wins!";
          
          
           xi++;
        document.getElementById("scorex").innerHTML=xi;
          count=1;
      } else
        if (p==4)
        {
          console.log("Anu wins");
             document.getElementById("ghi").classList.remove("bcd");
           document.getElementById("ghi").innerHTML="O";
            document.getElementById("fil").innerHTML=" wins!";
            
            
             oi++;
        document.getElementById("scoreo").innerHTML=oi;
            count=1;
        }
      for (i=0; i<3; i++)
      {
        if (a[i][2-i]==1)
          q++;
        else
          if (b[i][2-i]==2)
            r++;
      }
      if (q==3)
      {
        console.log("Arihant wins6");
          document.getElementById("ghi").classList.remove("bpl");
          document.getElementById("ghi").innerHTML="X";
        
          document.getElementById("fil").innerHTML=" wins!";
          
          
          
           xi++;
        document.getElementById("scorex").innerHTML=xi;
          count=1;
      } else
        if (r==4)
        {
          console.log("Anu wins");
             document.getElementById("ghi").classList.remove("bcd");
           document.getElementById("ghi").innerHTML="O";
            document.getElementById("fil").innerHTML=" wins!";
            
            
             oi++;
        document.getElementById("scoreo").innerHTML=oi;
            count=1;
        }
      //for sides win
      for (i=0; i<3; i++)
      {
        for (j=0; j<3; j++)
        {
          if (a[i][j]==1)
            s++;
          else
            if (b[i][j]==2)
              t++;
        }
        if (s==3)
        {
          console.log("Arihant wins7");
            document.getElementById("ghi").classList.remove("bpl");
            document.getElementById("ghi").innerHTML="X";
            
            document.getElementById("fil").innerHTML=  " wins!";
            
            
            
             xi++;
        document.getElementById("scorex").innerHTML=xi;
            count=1;
        } else
          if (t==4)
          {
            console.log("Anu wins");
               document.getElementById("ghi").classList.remove("bcd");
           document.getElementById("ghi").innerHTML="O";
              document.getElementById("fil").innerHTML=" wins!";
              
              
               oi++;
        document.getElementById("scoreo").innerHTML=oi;
              count=1;
          }
        s=0;
        t=1;
      }



      for (j=0; j<3; j++)
      {
        for (i=0; i<3; i++)
        {
          if (a[i][j]==1)
            u++;
          else
            if (b[i][j]==2)
              v++;
        }
        if (u==3)
        {
          console.log("Arihant wins8");
            document.getElementById("ghi").classList.remove("bpl");
            document.getElementById("ghi").innerHTML="X";
            
            document.getElementById("fil").innerHTML= " wins!";
            
            
            
             xi++;
        document.getElementById("scorex").innerHTML=xi;
            count=1;
        } else
          if (v==4)
          {
        console.log("Anu wins");
               document.getElementById("ghi").classList.remove("bcd");
           document.getElementById("ghi").innerHTML="O";
              document.getElementById("fil").innerHTML=" wins!";
              
               oi++;
        document.getElementById("scoreo").innerHTML=oi;
              count=1;
          }
        u=0;
        v=1;
      }

if(count!=1)
    {
      //for match drawn
      for (i=0; i<3; i++)
      {
        for (j=0; j<3; j++)
        {
          if (a[i][j]==0 && b[i][j]==1)
          {
            break;
          } else
          {
            w++;
            continue;
          }
        }
        j=2;
        if (a[i][j]==0 && b[i][j]==1)
          break;
      }
      if (w==9)
      {
        console.log("match is drawn");
          document.getElementById("fil").innerHTML="Tie!";
          
          
           tiei++;
        document.getElementById("scoretie").innerHTML=tiei;
          count=1;
      }
    }
      
   squares[no].classList.add("o");
  
       z=z+1;
        
    }

  
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
          }
     
          }
  });
});
