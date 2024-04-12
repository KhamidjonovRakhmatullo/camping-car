import React, { useState } from 'react'
import { Border, CarSortNavbar, CarSortNavbarLeft, CarSortNavbarRight, ColumnButton, CostText, CostTitle, GridButton, MotorBgImage, MotorMainContainer, Price, SidebarAndCarBoxesContainer, StyledSelect } from '../../styles/motorStyled'
import CostComponent from './SideBar'
import GridCarBoxComponent from './gridCarBox'
import listColumn1 from '../assets/listColumn.svg'
import listGrid1 from '../assets/listGrid.svg'
import { caravan } from '../mock/caravandata'
import ColumnCarBoxComponent from '../caravan/columnCarBox'

const CaravanComponent = () => {
  const data = caravan.maindata
  console.log ("data is:", data)
  const [active, setActive] = useState(true)
  const handleGridClicked = ()=> {
    setActive(true)
  }
  const handleColumnClicked = ()=> {
    setActive(false)
  }
  return (
    <MotorMainContainer>
      <MotorBgImage $CaravanBg>
          <CostText $fontSize $colorWhite>Home/Caravan</CostText>
          <CostTitle $fontSize27 $fontWeight700 $paddingTop style={{color: "#fff"}} >Our Ranges</CostTitle>
          <Price $fontSize80 $colorWhiteH1>Caravan</Price>
      </MotorBgImage>

      <SidebarAndCarBoxesContainer>

      <CostComponent></CostComponent>
  <div style={{width: "100%"}}>
    <div>
      <CarSortNavbar>
        <CarSortNavbarLeft>
          <CostTitle>
            Items
          </CostTitle>
          <CostTitle $colorBlue>{data.length}</CostTitle>
        </CarSortNavbarLeft>

        <CarSortNavbarRight>
          <CostText>Sort by</CostText>
          <StyledSelect>
            <option>Select</option>
            <option>aa</option>
            <option>bb</option>
          </StyledSelect>
          <StyledSelect>
            <option>60</option>
            <option>33</option>
            <option>22</option>
          </StyledSelect>
          <div style={{display: "flex"}}>
            <GridButton onClick={handleGridClicked}>
              <img src={listGrid1} alt="icon"/>
            </GridButton>
            <ColumnButton onClick={handleColumnClicked}>
               <img src={listColumn1} alt="icon"/>
            </ColumnButton>
          </div>
        </CarSortNavbarRight>
      </CarSortNavbar>
      <Border $width100 $margin0 $marginTop6></Border>
      </div>
     {
      active ? <GridCarBoxComponent/> : <ColumnCarBoxComponent/>
     }
    </div>
      </SidebarAndCarBoxesContainer>

    </MotorMainContainer>
  )
}

export default CaravanComponent