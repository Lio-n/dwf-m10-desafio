import styled from "styled-components";

const MenuBurger = styled.div`
  /* positioning */
  position: relative;
  /* box model */
  display: grid;
  place-items: center;
  width: 2rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const BurgerIngredients = styled.div`
  width: 100%;
  height: 5px;
  background-color: var(--white);
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  &:before {
    transform: translateY(-10px);
  }
  &:after {
    transform: translateY(10px);
  }
  &:before,
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    background-color: var(--white);
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }
`;

export { MenuBurger, BurgerIngredients };
