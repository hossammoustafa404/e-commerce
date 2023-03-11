import { Card, styled } from "@mui/material";

const ProductWrapper = styled(Card)`
  .card-media {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    img {
      height: 20rem;
    }
  }

  .card-title {
    span {
      max-width: 15rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  button {
    margin-inline: auto;
  }
`;

export default ProductWrapper;
