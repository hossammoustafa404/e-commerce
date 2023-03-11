import { AppBar, styled } from "@mui/material";

const NavbarWrapper = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.navbar};
  .toolbar {
    justify-content: space-between;
    min-height: 4.5rem;

    .brand {
      font-weight: bold;
      cursor: pointer;
    }

    form {
      border-radius: 0.4rem;
      background-color: white;
      overflow: hidden;
      @media screen and (max-width: 767px) {
        display: none;
      }
      .input-base {
        padding-inline: 0.5rem;
      }
      button {
        background-color: yellow;
        border-radius: 0;
        width: 3rem;
        background-color: ${({ theme }) => theme.palette.search};
      }
    }

    .switch {
      margin-right: 1.2rem;
    }

    .nav-link {
      cursor: pointer;
    }
    .cart {
      margin-right: 1rem;
    }
  }
`;

export default NavbarWrapper;
