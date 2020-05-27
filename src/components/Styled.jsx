import styled from 'styled-components';

export const AboutMe = styled.div`
#about{
    background:#282828;
    font-family: tahoma;
    text-align:justify;
    padding-top: 98px;
    padding-bottom:101px;
   
}
.shape{
    margin-top:5rem;
    height:20rem;
    width:20rem;
    border-radius:50%;
    border:1px solid var(--mainGold);
}
.fa-play{
    font-size:100px
}
#about .p-first{
    margin-bottom:30px;
}
#about h2{
    margin-bottom:47px;
    margin-top:12px;
}
#about .social-link-text{
    margin-top:50px;
    margin-bottom:25px;
}
#about .about-link{
    padding-left:0px;
}
#about .about-link li{
    display:inline-block;

}
#about .about-link li a i{
    width:50px;
    height:50px;
    border-radius:50%;
    line-height:50px;
    text-align:center;
    border:1px solid #d6c6b2;
    margin-right:10px;
    font-size:22px;
    color:#d6c6b2;
    transition:all .3s;
}
#about .about-link li a i:hover{
    color: #222222;
    background:#d6c6b2;
    border-color:#d6c6b2;
}
.color-3{
    color:#d6c6b2;
}
p{
    margin-bottom:0;
    font-size:16px;
    line-height:24px;
}


`

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
border-color: ${props => 
    props.cart ? "var(--mainPurple)" : "var(--mainGold)"};
color:${props => 
    (props.cart ? "var(--mainPurple)" : "var(--lightGold)")

};
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background: ${props =>
    props.cart ? "var(--mainGold)" : "var(--mainWhite)"};
    color:var(--mainDark);
}
&:focus{
    outline:none;
}
`

export const NavWrapper = styled.nav`
background:var(--mainDark);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.8rem;
    text-transform:capitalize;
}
`
export const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
}

.card-footer{
    background: transparent;
    border-top: tansparent;
    transition: all 1s linear;

}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container{
    position: relative;
    overflow: hidden;

}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background:var(--mainGold);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 1s linear;

    
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    color:var(--mainDark);
    cursor: pointer;
}
`
export const FooterContainer = styled.footer`
   

    .footer-middle{
        margin-top: 5rem;
        background: var(--mainDark);
        padding-top: 2rem;
        color: var(--mainWhite);
        position: absolute;
        bottom:-100;
        width:100%;
    }
    .footer-bottom{
        padding-top: 3rem;
        padding-bottom:0.5rem;
    }
    .company{
        color:var(--mainGold);
    }
    .imgLogo{
        // border:.1rem solid var(--mainGold);
        border-radius:50%;
        margin-left:3rem;
        height:120px;
        width:120px;
        
    }
    .email{
        text-decoration: none;
        color: var(--mainWhite);
    }
    .contactMe{
        color:var(--mainGold);
    }
    .social{
        margin:1rem;
        
        
    }
    .fa-instagram {
        background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);

  

    }
    .fa-twitter-square {
       color: #00acee;
    }
.fa-facebook-square{
    color:#3b5998
}
  
`;
export const ModalContainer = styled.div `
position:fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items:center;
justify-content:center;

#modal{
    background: var(--mainWhite);
   
}
`
export const MainDiv = styled.div`
.mainDiv{
    position: relative;
}
`
