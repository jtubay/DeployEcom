import styled from 'styled-components';

export const AboutMe = styled.div`
.gold{
    color:var(--mainGold)!important;

}
.white{
    color:white;
}
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

.btn{
    background:var(--mainGold);
    border:none!important;
    color:var(--mainDark);
}
.btn:hover{
    background:var(--mainWhite);
    color:var(--mainGold)
}
#about .about-link li a i{
    width:50px;
    height:50px;
    border-radius:50%;
    line-height:50px;
    text-align:center;
    border:1px solid var(--mainGold);
    margin-right:10px;
    font-size:22px;
    color:var(--mainWhite);
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
.white{
    color:white;
}
.gold{
    color:var(--mainGold);
}
footer p {
    color:white;
}
footer{
    background:var(--mainDark)!important;
}
footer.footer{
    height: 100%;
    
    position: relative;
}

footer.footer .container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

footer.footer .container > div{
    flex-grow: 1;
    flex-basis: 0;
    padding: 3rem .9rem;
}

footer.footer .container h2{
    color: var(--white);
}

footer.footer .newsletter .form-element{
    background: black;
    display: inline-block;
}

footer.footer .newsletter .form-element input{
    padding: .5rem .7rem;
    border: none;
    background: transparent;
    color: white;
    font-family: var(--Josefin);
    font-size: 1rem;
    width: 74%;
}

footer.footer .newsletter .form-element span{
    background: var(--sky);
    padding: .5rem .7rem;
    cursor: pointer;
}

footer.footer .instagram div > img{
    display: inline-block;
    width: 25%;
    height: 50%;
    margin: .3rem .4rem;
}

footer.footer .follow div i{
    color: var(--white);
    padding: 0 .4rem;
}
.socialI{
    color: var(--white);
    padding: 0 .4rem;
}

footer.footer .rights{
    justify-content: center;
    font-family: var(--Josefin);
}

footer.footer .rights h4 a{
    color: var(--white);
}

footer.footer .move-up{
    position: absolute;
    right: 6%;
    top: 50%;
}

footer.footer .move-up span{
    color: var(--midnight);
}

footer.footer .move-up span:hover{
    color: var(--white);
    cursor: pointer;
}
.flex-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
   

//     .footer-middle{
//         margin-top: 5rem;
//         background: var(--mainDark);
//         padding-top: 2rem;
//         color: var(--mainWhite);
//         position: absolute;
//         bottom:-100;
//         width:100%;
//     }
//     .footer-bottom{
//         padding-top: 3rem;
//         padding-bottom:0.5rem;
//     }
//     .company{
//         color:var(--mainGold);
//     }
//     .imgLogo{
//         // border:.1rem solid var(--mainGold);
//         border-radius:50%;
//         margin-left:3rem;
//         height:120px;
//         width:120px;
        
//     }
//     .email{
//         text-decoration: none;
//         color: var(--mainWhite);
//     }
//     .contactMe{
//         color:var(--mainGold);
//     }
//     .social{
//         margin:1rem;
        
        
//     }
//     .fa-instagram {
//         background: #d6249f;
//   background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
//   box-shadow: 0px 3px 10px rgba(0,0,0,.25);

  

//     }
//     .fa-twitter-square {
//        color: #00acee;
//     }
// .fa-facebook-square{
//     color:#3b5998
// }
  
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
