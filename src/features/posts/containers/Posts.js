import React, { Component } from "react";
import styled from "styled-components";

const StyledPosts = styled.div`
  display: flex;
  flex-direction: column;
`;

class Posts extends Component {
  render() {
    return <StyledPosts>Posts</StyledPosts>;
  }
}

export default Posts;
