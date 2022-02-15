import React from "react";
import { StyledStage } from "./styles/StyledStage";
import Cell from "./Cell";

const Stage = ({ stage }) => {
  const stageMapped = stage.map((row) =>
    row.map((cell, i) => <Cell key={i} type={cell[0]} />)
  );
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stageMapped}
    </StyledStage>
  );
};

export default Stage;
