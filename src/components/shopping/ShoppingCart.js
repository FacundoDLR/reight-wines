import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsProvider'
import styled, { keyframes } from 'styled-components'
import CartItem from "./CartItem"
import {HiOutlineShoppingCart} from 'react-icons/hi';
import {GiCheckMark} from 'react-icons/gi';
import { Link } from "react-router-dom"




const ShoppingCart = () => {

  const {clearCart, state} = useContext(ProductsContext);


  return (
    <CarritoContainer>
        <FondoBlanco>
          <Titulo>
            <HiOutlineShoppingCart style={{fontSize:35, margin:"0px 18px", color: "var(--orange75)"}}/>
            <h1>Carrito de Compras</h1>
          </Titulo>

          <ContainerText>
            {!state.cart[0] 
              ? (<p className="empty" >Tu carrito esta vacío, pero puedes ir a ver nuestros productos aquí!</p>) 
              : state.cart.map((item) => <CartItem key={item.id} item={item} />)
            }
            {!state.cart[0] 
              ? (<Link to="/bebidas" className="modCart" style={{padding:"50px"}}>
                  <ButtonComprando ><GiCheckMark style={{position:"relative", bottom: "2px"}} /> Seguir Comprando </ButtonComprando>
                </Link>)
              : (<ButtonsContainer>
                  <ButtonLimpiarCarro onClick={() => clearCart()}>Limpiar Carrito</ButtonLimpiarCarro>  
                  <ButtonFinalizarCompra>Finalizar Compra</ButtonFinalizarCompra>
                </ButtonsContainer>)
            }
          </ContainerText>
        </FondoBlanco>
      </CarritoContainer>
  )
}
export default ShoppingCart
 

const fadeIn = keyframes`
0% {
    opacity:0;
}
100% {
    opacity:1
}
`
const CarritoContainer = styled.div`
  animation: ${fadeIn} 0.9s ease-out;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(251, 243, 232);
  gap: 50px;
`;

const FondoBlanco = styled.div` width: 80vw;
  height: 90%;
  background: rgb(255, 255, 255);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border-color: var(--dark);
  box-shadow: 0 3px 5px 0 rgba(31, 38, 135, 0.37);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(0, 0, 0);
  backdrop-filter: blur(8.5px);
  gap: 8px; 
  margin-bottom: 10%;
  margin-top: 50px;
`

const Titulo = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  padding: 4%;
  position: relative;
  bottom: 15px;

  @media screen and (max-width: 768px){
    padding: 6%;
  }

  @media screen and (max-width: 576px){
    padding: 8%;
  }

  h1{
    text-align: center;
    color: var(--orange75);
    font-size: 2.8rem;
    font-weight: 600;
    font-family:'EB Garamond', serif;
  }
`
const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    color: var(--dark);
    font-family:'Satisfy', cursive;
    font-size: 20px;
    position: relative;
    top:20px;
    
  @media (max-width: 576px){
    padding: 30px;
    text-align: center;
  }
}
`
const ButtonComprando = styled.button`
  padding: 5px;
  border-radius: 0.5rem;
  border: 1px solid var(--orange);
  color: var(--orange) ;
  background-color: var(--beige);
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  text-align: center;
  width:auto;
  height: 28px;
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 12px 0 rgba(0,0,0,0.19);

@media screen and (min-width: 1024px){
&:hover{background-color: #999898 !important;
  color: var(--beige) ;
  border: 1px solid #999898;}

&:active {
  background-color: var(--orange) !important;
  box-shadow: none;
  transform: translateY(4px);
  display: flex;}
  }
`
const ButtonsContainer = styled.div`
  height: 30%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  gap: 20px;
  padding-top: 5px;
  margin-bottom: 25px;

  @media screen and (min-width: 1200px){
    gap: 150px;
    
  }
`
const ButtonLimpiarCarro = styled.button` width: 200px;
  color:white;
  background-color: var(--orange);
  margin: 10px;
  padding: 5px;
  border-radius: 0.5rem;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  width:auto;
  height: 35px;
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 12px 0 rgba(0,0,0,0.19);

  @media screen and (min-width: 1024px){
  &:hover{background-color: #999898 !important;}}

  &:active {
  background-color: var(--orange) !important;
  box-shadow: none;
  transform: translateY(4px)
  }
`
const ButtonFinalizarCompra = styled.button`
  margin: 10px;
  padding: 5px;
  border-radius: 0.5rem;
  border: 1px solid var(--orange);
  color: var(--orange) ;
  background-color: var(--beige);
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  width:auto;
  height: 35px;
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 12px 0 rgba(0,0,0,0.19);

@media screen and (min-width: 1024px){
&:hover{
  background-color: #999898 !important;
  color: var(--beige) ;
  border: 1px solid #999898;}

&:active {
  background-color: var(--orange) !important;
  box-shadow: none;
  transform: translateY(4px);
  display: flex;}
  }
`
