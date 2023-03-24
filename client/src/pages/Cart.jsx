import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`
  background-color: #e3e3e3;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  //   background-color: #3e3e3f;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductCapacity = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  console.log(stripeToken);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/orders", {
          tokenId: stripeToken.id,
          amount: 500000,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Navbar />
      {/* <Announcement /> */}
      <Wrapper>
        <Title>GIỎ HÀNG CỦA BẠN</Title>
        <Top>
          <Link to="/">
            <TopButton href="/">TIẾP TỤC MUA</TopButton>
          </Link>
          <TopTexts>
            <TopText>Giỏ hàng hiện tại({cart.quantity})</TopText>
            {/* <TopText>Your Wishlist (0)</TopText> */}
          </TopTexts>
          <StripeCheckout
            name="HBStore"
            image="https://avatars.githubusercontent.com/u/72601574?s=400&u=717a981a262d31dba01926b61cd0b074ec546fb2&v=4"
            billingAddress
            shippingAddress
            description={`Your total is ${cart.total}₫`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <TopButton type="filled">THANH TOÁN NGAY</TopButton>
          </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductCapacity>
                      <b>Capacity:</b> {product.capacity}
                    </ProductCapacity>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity}₫
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>TỔNG THANH TOÁN</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>TỔNG CỘNG</SummaryItemText>
              <SummaryItemPrice>{cart.total}₫</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>PHÍ SHIP</SummaryItemText>
              <SummaryItemPrice>30000₫</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>GIẢM PHÍ SHIPSHIP</SummaryItemText>
              <SummaryItemPrice>-30000₫</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>TỔNG</SummaryItemText>
              <SummaryItemPrice>{cart.total}₫</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="HBStore"
              image="https://avatars.githubusercontent.com/u/72601574?s=400&u=717a981a262d31dba01926b61cd0b074ec546fb2&v=4"
              billingAddress
              shippingAddress
              description={`Tổng thanh toán là: ${cart.total}₫`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>THANH TOÁN NGAY</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
