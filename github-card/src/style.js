import styled from 'styled-components'

const Styled = styled.div `  
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    width: 100%;
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  .h1-div{
    width: 50%;
  }
  .image-logo{
    width: 25%;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .user-card{
    width: 98%;
    margin: 1.5% 0;
    padding: 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border-bottom: dotted pink;
  }
  .h1-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    align-content: center;
    box-shadow: 10px 20px 30px rgb(241, 144, 173);
    border-radius: 35px;
  }
  .image-div{
    width: 40%;
    box-shadow: 10px 20px 50px rgb(13, 177, 241);
    border-radius: 35px;
  }
  .user-detail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    align-content: center;
    box-shadow: 10px 20px 30px rgb(13, 177, 241);
    border-radius: 35px;
  }
  .card{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .card-detail{
    width: 40%;
    margin: 2% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 35px;
  
  } 
  .follower{
      width: 100%;
      border-top: dotted blue;;
  }
  .card-image{
    margin: 1.5% 0;
  }
  img{
    margin: 1.5% 0;
    border-radius: 20% 5%;
    border: double pink;
  }
  span{
    font-weight: 800;
  }
  p{
    font-size: 1.3rem;
  }
  .info{
    width: 100%;
    box-shadow: 10px 20px 30px rgb(224, 176, 247);
    background-color: rgb(253, 163, 190);
    border-radius: 30% 5%;
  }
.search-user{
  width: 100%;
  margin: 3% 0%;
}


 @media (max-width: 1200px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    .App-header{
        width: 100%;
    }
    .h1-div{
        width: 60%;
    }
    .user-card{
          width: 90%;
          display: flex;
          flex-direction column;
          align-items: center;
          justify-content: space-evently; 
          margin: 3.5%; 
    }
    .user-detail{
        width: 100%;
    }
    .image-div{
        width: 100%;
    }
    .user-image{
        width: 60%;
    }
    
    .card-detail{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 10px 20px 30px rgb(203, 179, 256);
    }
   
    .card-image{
        width: 100%;

    }
    .follower-image{
        width: 60%;
        border-radius: 25% 25%; 
    }
    .info{
        width: 85%;
        border-radius: 25% 10%;
        background-color: rgb(150, 163, 190);
        margin-bottom: 1.5%;

    }
   p{
       font-size: 1.5rem;
   }
  }
  @media (max-width: 550px){
    
      display: flex;
      flex-direction: column;
      justify-content: center;
      .App-header{
          width: 100%;
      }
      .h1-div{
          width: 60%;
      }
      .user-card{
            width: 90%;
            display: flex;
            flex-direction column;
            align-items: center;
            justify-content: space-evently; 
            margin: 3.5%; 
      }
      .user-detail{
          width: 100%;
      }
      .image-div{
          width: 100%;
      }
      .user-image{
          width: 60%;
      }
      
      .card-detail{
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 10px 20px 30px rgb(203, 179, 256);
      }
      .card-image{
          width: 100%;

      }
      .follower-image{
          width: 65%;
         
      }
      .info{
          width: 85%;
          border-radius: 20% 5%;
      }
     p{
         font-size: 1rem;
     }
  }
 

`
export default Styled;