import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #101010;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: #fff;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: #fff;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  margin-top: 20px;
  color: #fff;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: #fff;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #fff;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HBStore</Logo>
        <Desc>LOVE VO TRI THUC 3000</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Hệ Thống cửa hàng</Title>
        <List>
          <ListItem>Hơn 95 cửa hàng</ListItem>
          <ListItem>Nội quy cửa hàng</ListItem>
          <ListItem>Chất lượng phục vụ</ListItem>
          <ListItem>Chính sách bảo mật và đổi trả</ListItem>
        </List>

        <Title>Hổ trợ khách hàng</Title>
        <List>
          <ListItem>Điều kiện giao dịch chung</ListItem>
          <ListItem>Hướng dẫn mua hàng online</ListItem>
          <ListItem>Chính sách giao hàng</ListItem>
          <ListItem>Hướng dẫn thanh toán</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Liên hệ</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 128 Trần Quang Khải, P. Tân
          Định, Q.1, TP. Hồ Chí Minh
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +84 2838125960
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> hbstore@huybu.com
        </ContactItem>
        <Payment src="https://cdn.tgdd.vn/mwgcart/topzone/images/certify-bct.png"></Payment>
      </Right>
    </Container>
  );
};

export default Footer;
