import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.$mode || "#E41165"};
  color: ${(props) => props.$color || "#fffff"};
  border: none;
  width: ${(props) => props.$width || "fit - content"};
  height: ${(props) => props.$height || "50px"};
  padding: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 0.5em;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
export const IconAdd = styled.div`
  margin-right: 8px;
`;
