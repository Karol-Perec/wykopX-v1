import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.SURFACE_COLOR};
  border-color: ${(props) => props.theme.ON_SURFACE_2_COLOR};

  box-sizing: border-box;
  box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  margin: auto auto;
  margin-bottom: 20px;
  padding: 15px;
  width: 95%;
  height: auto;
  max-width: 900px;

//   @media (min-width: 600px) {
//     display: block;
//   }
// `;

// export const Content = styled.div`
//   width: 100%;

//   @media (min-width: 600px) {
//     display: inline-flex;
//     flex-flow: wrap;
//     width: calc(100% - 75px);
//   }
// `;

// export const TextContent = styled.div`
//   display: inline-block;
//   a {
//     text-decoration: none;
//   }

//   @media (min-width: 600px) {
//     margin-left: 10px;
//     flex-grow: 1;
//     width: 40%;
//   }
// `;

// export const Title = styled.h2`
//   color: ${(props) => props.theme.ON_SURFACE_COLOR};
//   font-size: 18px;
//   font-weight: 500;
// `;

// export const Description = styled.p`
//   color: ${(props) => props.theme.ON_SURFACE_2_COLOR};
//   font-size: 14px;
//   text-align: left;
// `;
