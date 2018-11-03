import React from "react";
import styled from "styled-components";

import link from "../media/link.gif";

const Styled404 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Gif = styled.img`
  height: 256px;
  width: 256px;
  border-radius: 6px;
  margin-bottom: 6px;
`;

const NotFound = () => {
  return (
    <Styled404>
      <Gif src={link} />
      Not found, sorry
    </Styled404>
  );
};

export default NotFound;
