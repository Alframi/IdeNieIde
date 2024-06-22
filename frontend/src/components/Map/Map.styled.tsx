import styled from "styled-components";

import { Bicycle, Excercise, WalkWithDog, Run, Walk } from "../../assets/Icons";
import { Button } from "primereact/button";

export const BicycleIcon = styled(Bicycle)`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 18%;
  left: 18%;
`;

export const ExcerciseIcon = styled(Excercise)`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 18%;
  left: 18%;
`;

export const WalkWithDogIcon = styled(WalkWithDog)`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 18%;
  left: 18%;
`;

export const RunIcon = styled(Run)`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 18%;
  left: 18%;
`;

export const WalkIcon = styled(Walk)`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 18%;
  left: 18%;
`;

export const IconContainer = styled.button`
  background-color: #ffcd56;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
`;

export const IconContainer2 = styled(IconContainer)`
  background-color: #ff6384;
  border: none;
`;

export const IconContainer3 = styled(IconContainer)`
  background-color: #28a745;
  border: none;
`;

export const IconContainer4 = styled(IconContainer)`
  background-color: #9966ff;
  border: none;
`;

export const IconContainer5 = styled(IconContainer)`
  background-color: #36a2eb;
  border: none;
`;

export const StyledButton = styled(Button)`
  background-color: #4f46e5;
  padding: 4px;
  font-size: 14px;
`;
