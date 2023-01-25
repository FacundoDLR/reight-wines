import {useContext} from "react"
import {ProductsContext} from "../../context/ProductsProvider"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import {IoTrashOutline} from 'react-icons/io5';
import {IoIosAdd} from 'react-icons/io';
import {IoMdRemove} from 'react-icons/io';


const CartItem = ({item}) => {

  const {delFromCart, addToCart } = useContext(ProductsContext)

    const imagenes = require.context("../../assets/images", true);
    const {id, nombre, precio, quantity, tipo, image} = item


    return (
        <ItemCarrito>
              
              <Image>
                  <img src={imagenes(`./${image}`)} alt={tipo} height="110px" width="auto"/>
              </Image>
              <Text>
                <Nombre><Text>{nombre} </Text></Nombre>
                <Tipo><Text>{tipo} 750ml</Text></Tipo>
              </Text>
              <ContentTwo>
                <Cantidad>
                  <Precio > <p>${`${precio}`} un.</p></Precio>
                  <ButtonContainer>
                    <ButtonMenos><IoMdRemove style={{ paddingTop:"13px", fontWeight: "bold" , color:"#ef8557"}} onClick={()=>delFromCart(id)} /></ButtonMenos>
                    <ButtonCount >{`${quantity}`}</ButtonCount>
                    <ButtonMas><IoIosAdd style={{ position:"relative", color:"#ef8557"}} onClick={()=>addToCart(id)}/></ButtonMas>
                  </ButtonContainer>
                </Cantidad>

                <CounterContainer>
                  <Link to="/carro" className="modCart">
                      <ButtonClear onClick={(all)=>delFromCart(id, all)}>
                        <IoTrashOutline style={{fontSize:30, margin:"0px 0px", color: "var(--orange75)"}} />
                          {/* Eliminar Todos */}
                      </ButtonClear>
                  </Link>
                  <Precio>
                    <div> Total: ${`${precio*quantity}`}</div>
                </Precio>
                </CounterContainer>
              </ContentTwo>
            
        </ItemCarrito>
    )
}

export default CartItem



const ItemCarrito = styled.div`
  width: 53vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  border-bottom: 1px solid grey;
  margin-bottom: 0.1rem;
  padding: 3%;
  position: relative;
  bottom: 35px;
  padding-right: 10%;

  @media screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
@media screen and (max-width: 576px){
  position: relative;
  bottom: 20px;
}
  `
 const Image = styled.div`
  width: 25%;
  height: 25%;

  @media screen and (max-width: 768px){
   padding-right: 30%;
   padding-top: 30px;
}
  
 `

const Text = styled.div`
    text-align: center;
    color: var(--dark65);
    position: relative;
    right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  
  @media screen and (max-width: 768px){
   padding-left: 10%;
}
  @media screen and (max-width: 576px){
   padding-left: 15%;
   }
`
  const Nombre = styled.h3`
  width: 180px;
  color: var(--dark);
  font-family: 'Carter One', cursive;
  font-size: 21px;

  @media screen and (max-width: 576px){
  position: relative;
   top: 10px ;
}
  `

  const Tipo = styled.p`
  color: var(--dark);
  font-family:'Satisfy', cursive;
  font-size: 18px;
  font-weight: 200;

  @media screen and (max-width: 768px){
   width: 100%;
  }
  `

  const ContentTwo = styled.div`
    display: flex;
    position: relative;
    right: 80px;
    bottom: 10px;


   @media screen and (max-width: 768px){
   padding-left: 25%;
   gap:45px
  }
  @media screen and (max-width: 576px){
    position: relative;
    top: 30px;
    right: 40%;
  }
  `
  const Cantidad = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  position: relative;
  left: 40px;
  bottom: 10px;

  @media screen and (max-width: 576px){
    align-items: center;
    justify-content: center;
    left: 120px;
    gap: 0px;
    padding: 0px;
    margin: 0px;
    position: relative;
    bottom: 100px;
}
`
  const Precio = styled.p`
  width: 100%;
  font-family:'EB Garamond', serif;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--dark65);
  margin: 15px;

  div {
  width: 150px;
  font-weight: 600;

  }
  p{
    position: relative;
    left: 25px;
    top: -10px;

    @media screen and (max-width: 576px){
      position: relative;
      top: 10px;
      left: 38px;
    }
  }
  `

const CounterContainer = styled.div`
  height: 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3px;
  position: relative;
  left: 105px;
  top:20px;
  div {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 768px){
   padding-right: 15%;
  }
  @media screen and (max-width: 576px){
   position: relative;
   top: -20px;
   align-items: center;

  }
`

const ButtonContainer = styled.div`
    position: relative;
    left: 35px;
    display: flex;
    border-radius: 0.6rem;
    border: solid 1px var(--dark80) ;
    height: 33px;
    width: 100px;
    height: 25%;
   
    @media screen and (max-width: 576px){
      position: relative;
      bottom: 8px;
    }

`
const ButtonMenos = styled.button`
    background: transparent;
    border: none ;
    font-size: 25px;
    position: relative;
    bottom: 14px;
    left: 5px;
    text-align: center;

    @media screen and (max-width: 1024px){
    &:active {
    color: var(--dark65);
    transform: translate(1.5px, 1.5px);
    transition: 0.15s;
  }
}
`
const ButtonCount = styled.button`
    background: transparent;
    color: var(--dark65);
    font-size: 2rem;
    font-weight: bold;
    width: 25px;
    height: 25px;
    margin: 5px;
    border: none ;
    font-family: var(--subtitle-font);
    font-size: 15px;
    position: relative;
    bottom: 3px;
    left: 5px;
    text-align: center;

`
const ButtonMas = styled.button`
    background: transparent;
    border: none ;
    font-size: 25px;
    position: relative;
    bottom: 8px;
    left: 6px;
    text-align: center;

    @media screen and (max-width: 1024px){
    &:active {
    color: var(--dark65);
    transform: translate(1.5px, 1.5px);
    transition: 0.15s;
  }
}
`

const ButtonClear = styled.div`
    color:var(--orange);
    background-color: transparent;
    padding: 5px 10px;
    padding-top: 10px;
    position: relative;
    top: 15px;
    left: 30px;
    border-radius: 0.5rem;
    border: none;
    font-family: "Nunito", sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    text-align: center;

    @media screen and (max-width: 576px){
      position: relative;
      left: -45px;
    }

  &:active {
    background-color: var(--orange) !important;
    color: var(--beige);
    box-shadow: none;
    transform: translateY(4px);
    transition: 0.15s;


  }
`






