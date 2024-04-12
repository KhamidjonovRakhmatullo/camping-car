import React from "react";
import { BrandName, CarBox, CarBoxButton, CarBoxButtonWrapper,
     CarBoxContainer, CarBoxImgWrapper, CarBoxInfo, CarBoxRateWrapper, CostText, Price } from "../../styles/motorStyled";
import star1 from '../assets/carStar.svg'
import { caravan } from "../mock/caravandata";

const GridCarBoxComponent = () => {
  const data = caravan.maindata;
  console.log("camp data:", data);
  return (
    <CarBoxContainer>
      {data.map((value, key) => { 
        return (
          <CarBox $maxWidth key={key}>
                <CarBoxImgWrapper>
                    <img src={value.caravan.image || "no photo"} alt="no photo1"  style={{width: "100%"}}/>
                </CarBoxImgWrapper>
                <CarBoxInfo>
                    <CostText $fontSize $fontWeight>{value.caravan.name || "no data"}</CostText>
                    <BrandName>{value.caravan.company || "no data"}
                        <CarBoxRateWrapper>
                            <p> {value.caravan.rating || "no data"}</p>
                            <img src={star1} alt="starIcon" />
                        </CarBoxRateWrapper>
                    </BrandName>
                    <Price>{value.caravan.price || "no data"}</Price>
                    <CarBoxButtonWrapper>
                         <CarBoxButton>ORDER</CarBoxButton>
                         <CarBoxButton $paddingRwnL>COMPARE</CarBoxButton>
                    </CarBoxButtonWrapper>
                </CarBoxInfo>
          </CarBox>
        ); 
      })}
    </CarBoxContainer>
  );
};

export default GridCarBoxComponent;
