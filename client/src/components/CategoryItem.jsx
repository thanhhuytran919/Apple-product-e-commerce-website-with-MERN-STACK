import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px 40px;
  height: 25vh;
  width: 20vw;
  position: relative;
  background-color: #323232;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  //   object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 15px;
  margin-top: 220px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
