import React from 'react';
import styled from 'styled-components';
import Img from '../../../img/free_logo2.png';
import LogoWrapper from '../LogoWrapper';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
  /* width: 100%; */

  @media screen and (min-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding-left: 1rem;
  }

  .logo-section-responsive {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (min-width: 960px) {
      /** 1024 is the break point for Ipad Pro*/
      flex-direction: column;
    }
  }
`;
// const Logo = styled.img`
//   width: 5rem;

//   @media screen and (max-width: 960px) {
//     width: 2.7rem;
//   }
// `;
// const CompanyTitle = styled.div`
//   font-weight: 400;
//   font-size: 1.7rem;
//   color: white;
//   margin-left: 10px;
//   font-family: 'Righteous', sans-serif;

//   @media screen and (min-width: 960px) {
//     margin: 10px 0px;
//     font-weight: 600;
//     font-size: 2rem;
//   }
// `;
const ShortDesc = styled.div`
  margin: 7px 0px;
  color: #989898;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: auto;
  line-height: 1.15;
  font-family: 'Robato Slap', sans-serif;
`;
const Heart = styled.i`
  color: red;
  line-height: 1.15;
`;

const FooterLogoSection = () => (
  <SectionWrapper>
    <div className="logo-section-responsive">
      <LogoWrapper />
    </div>
    <ShortDesc>
      <div>
        Made of <Heart className="fas fa-heart" /> Love in Toronto,
      </div>
      <div>Ontario, Canada</div>
    </ShortDesc>
  </SectionWrapper>
);
export default FooterLogoSection;
