import React, { useState } from "react";
import {
  Border,
  CarSortButton,
  CarSortNavbar,
  CarSortNavbarLeft,
  CarSortNavbarLeft_ItemAndButtons,
  CarSortNavbarRight,
  ColumnButton,
  CostText,
  CostTitle,
  GridButton,
  GridColumnButtonWrapper,
  MotorBgImage,
  MotorMainContainer,
  Price,
  SidebarAndCarBoxesContainer,
  StyledSelect,
} from "../../styles/motorStyled";
import CostComponent from "./SideBar";
import ColumnCarBoxComponent from "./columnCarBox";
import listColumn1 from "../assets/listColumn.svg";
import listGrid1 from "../assets/listGrid.svg";
import { campcar } from "../mock/mockdata";
import GridCarBoxComponent from "./gridCarBox";

const MotorComponent = () => {
  const data = campcar.maindata;

  const [active, setActive] = useState(true);

  const handleGridClicked = () => {
    setActive(true);
  };

  const handleColumnClicked = () => {
    setActive(false);
  };

  return (
    <MotorMainContainer>
      <MotorBgImage>
        <CostText $fontSize $colorWhite>
          Home/Motor
        </CostText>
        <CostTitle
          $fontSize27
          $fontWeight700
          $paddingTop
          style={{ color: "#fff" }}
        >
          Our Ranges
        </CostTitle>
        <Price $fontSize80 $colorWhiteH1>
          Motors
        </Price>
      </MotorBgImage>
      <SidebarAndCarBoxesContainer>
        <div>
          <CostComponent></CostComponent>
        </div>

        <div style={{ width: "100%" }}>
          {/* sortnavbar and its underline */}
          <div>
            <CarSortNavbar>
              <CarSortNavbarLeft_ItemAndButtons>
                <div style={{ display: "flex" }}>
                  <CarSortButton>
                    <p>A</p>
                  </CarSortButton>
                  <CarSortNavbarLeft>
                    <CostTitle>Items</CostTitle>
                    <CostTitle $colorBlue>{data.length}</CostTitle>
                  </CarSortNavbarLeft>
                </div>

                <GridColumnButtonWrapper $hide>
                  <GridButton onClick={handleGridClicked}>
                    <img src={listGrid1} alt="img" />
                  </GridButton>
                  <ColumnButton onClick={handleColumnClicked}>
                    <img src={listColumn1} alt="img" />
                  </ColumnButton>
                </GridColumnButtonWrapper>
              </CarSortNavbarLeft_ItemAndButtons>

              <CarSortNavbarRight>
                <CostText $fontSize>Sort by</CostText>
                <StyledSelect $padding>
                  <option>Select</option>
                  <option>bb</option>
                  <option>cc</option>
                </StyledSelect>
                <StyledSelect>
                  <option>60</option>
                  <option>22</option>
                  <option>33</option>
                </StyledSelect>

                <GridColumnButtonWrapper>
                  <GridButton onClick={handleGridClicked}>
                    <img src={listGrid1} alt="img" />
                  </GridButton>
                  <ColumnButton onClick={handleColumnClicked}>
                    <img src={listColumn1} alt="img" />
                  </ColumnButton>
                </GridColumnButtonWrapper>
              </CarSortNavbarRight>
            </CarSortNavbar>
            <Border $width100 $margin0 $marginTop6></Border>
          </div>

          {active ? <GridCarBoxComponent /> : <ColumnCarBoxComponent />}
        </div>
      </SidebarAndCarBoxesContainer>
    </MotorMainContainer>
  );
};

export default MotorComponent;
