import styled from "styled-components";
import Navbar from "../components/Navbar";
// import Announcement from "../components/Announcement";
import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #3e3e3f;
`;

const Title = styled.h1`
  margin: 20px;
  color: #fff;
`;

const FilterContainer = styled.div`
  //   display: flex;
  justify-content: space-between;
  color: #fff;
`;

const Filter = styled.div`
  display: block;
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      {/* <Announcement /> */}
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Bộ Lọc iPhone</FilterText>
          <Link
            to={`/products/${cat}`}
            onClick={() => window.location.reload()}
            style={{
              textDecoration: "none",
              color: "#fff",
              margin: "20px",
            }}
          >
            Tất cả
          </Link>
          <FilterText>Màu:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option value="white">Trắng</Option>
            <Option value="black">Đen</Option>
            <Option value="red">Đỏ</Option>
            <Option value="blue">Xanh</Option>
            <Option value="purple">Tím</Option>
            <Option value="gold">Vàng Gold</Option>
            <Option value="silver">Bạc</Option>
            <Option value="gray">Xám</Option>
            <Option value="green">Xanh Lá</Option>
            <Option value="silver">Bạc</Option>
            <Option value="yellow">Vàng</Option>
            <Option value="pink">Hồng</Option>
          </Select>
          <FilterText>Bộ nhớ:</FilterText>
          <Select name="capacity" onChange={handleFilters}>
            <Option>64GB</Option>
            <Option>128GB</Option>
            <Option>256GB</Option>
            <Option>512GB</Option>
            <Option>1TB</Option>
          </Select>
          <FilterText>Dòng máy:</FilterText>
          <Select name="categories" onChange={handleFilters}>
            <Option>iphone</Option>
            <Option>iphone 14</Option>
            <Option>iphone 13</Option>
            <Option>iphone 12</Option>
            <Option>iphone 11</Option>
            <Option>iphone SE</Option>
          </Select>
          <FilterText>Sắp xếp:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="asc">Giá Tăng Dần</Option>
            <Option value="desc">Giá Giảm Dần</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Bộ Lọc Mac</FilterText>
          <Link
            to={`/products/${cat}`}
            onClick={() => window.location.reload()}
            style={{
              textDecoration: "none",
              color: "#fff",
              margin: "20px",
            }}
          >
            Tất cả
          </Link>
          <FilterText>Màu:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option value="silver">Bạc</Option>
            <Option value="green">Xanh Lá</Option>
            <Option value="blue">Xanh Dương</Option>
            <Option value="pink">Hồng</Option>
            <Option value="gray">Xám</Option>
            <Option value="black">Đen</Option>
            <Option value="gold">Vàng Đồng</Option>
          </Select>
          <FilterText>Bộ nhớ:</FilterText>
          <Select name="capacity" onChange={handleFilters}>
            <Option>RAM 32GB - SSD 1TB</Option>
            <Option>RAM 32GB - SSD 512GB</Option>
            <Option>RAM 16GB - SSD 1TB</Option>
            <Option>RAM 16GB - SSD 512GB</Option>
            <Option>RAM 16GB - SSD 256GB</Option>
            <Option>RAM 8GB - SSD 512GB</Option>
            <Option>RAM 8GB - SSD 256GB</Option>
          </Select>
          <FilterText>Dòng máy:</FilterText>
          <Select name="categories" onChange={handleFilters}>
            <Option>mac</Option>
            <Option>mac studio</Option>
            <Option>mac mini</Option>
            <Option>imac</Option>
            <Option>macbook air</Option>
            <Option>macbook pro</Option>
          </Select>
          <FilterText>Sắp xếp:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="asc">Giá Tăng Dần</Option>
            <Option value="desc">Giá Giảm Dần</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Bộ Lọc iPad</FilterText>
          <Link
            to={`/products/${cat}`}
            onClick={() => window.location.reload()}
            style={{
              textDecoration: "none",
              color: "#fff",
              margin: "20px",
            }}
          >
            Tất cả
          </Link>
          <FilterText>Màu:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option value="blue">Xanh Dương</Option>
            <Option value="yellow">Vàng</Option>
            <Option value="white">Trắng</Option>
            <Option value="red">Đỏ</Option>
            <Option value="grey">Xám</Option>
            <Option value="pink">Hồng</Option>
            <Option value="purple">Tím</Option>
          </Select>
          <FilterText>Bộ nhớ:</FilterText>
          <Select name="capacity" onChange={handleFilters}>
            <Option>64GB</Option>
            <Option>128GB</Option>
            <Option>256GB</Option>
            <Option>512GB</Option>
            <Option>1TB</Option>
            <Option>2TB</Option>
          </Select>
          <FilterText>Dòng máy:</FilterText>
          <Select name="categories" onChange={handleFilters}>
            <Option>ipad</Option>
            <Option>ipad 10</Option>
            <Option>ipad pro m2</Option>
            <Option>ipad mini</Option>
            <Option>ipad 9</Option>
            <Option>ipad air</Option>
            <Option>ipad pro m1</Option>
          </Select>
          <FilterText>Sắp xếp:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="asc">Giá Tăng Dần</Option>
            <Option value="desc">Giá Giảm Dần</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Bộ Lọc Watch</FilterText>
          <Link
            to={`/products/${cat}`}
            onClick={() => window.location.reload()}
            style={{
              textDecoration: "none",
              color: "#fff",
              margin: "20px",
            }}
          >
            Tất cả
          </Link>
          <FilterText>Màu:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option value="white">Trắng</Option>
            <Option value="black">Đen</Option>
            <Option value="pink">Hồng</Option>
            <Option value="red">Đỏ</Option>
            <Option value="orange">Cam</Option>
            <Option value="yellow">Vàng</Option>
            <Option value="green">Xanh Lá</Option>
            <Option value="blue">Xanh Dương</Option>
          </Select>
          <FilterText>Kích thước:</FilterText>
          <Select name="capacity" onChange={handleFilters}>
            <Option>49mm</Option>
            <Option>45mm</Option>
            <Option>44mm</Option>
            <Option>42mm</Option>
            <Option>41mm</Option>
            <Option>40mm</Option>
            <Option>38mm</Option>
          </Select>
          <FilterText>Dòng máy:</FilterText>
          <Select name="categories" onChange={handleFilters}>
            <Option>watch</Option>
            <Option>watch series 3</Option>
            <Option>watch se</Option>
            <Option>watch series 5</Option>
            <Option>watch series 6</Option>
            <Option>watch series 7</Option>
            <Option>watch se 2022</Option>
            <Option>watch series 8</Option>
            <Option>watch ultra</Option>
          </Select>
          <FilterText>Sắp xếp:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="asc">Giá Tăng Dần</Option>
            <Option value="desc">Giá Giảm Dần</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Bộ Lọc Âm Thanh</FilterText>
          <Link
            to={`/products/${cat}`}
            onClick={() => window.location.reload()}
            style={{
              textDecoration: "none",
              color: "#fff",
              margin: "20px",
            }}
          >
            Tất cả
          </Link>
          <FilterText>Màu:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option value="white">Trắng</Option>
            <Option value="black">Đen</Option>
            <Option value="blue">Xanh Dương</Option>
            <Option value="red">Đỏ</Option>
            <Option value="green">Xanh Lá</Option>
          </Select>
          <FilterText>Thương hiệu:</FilterText>
          <Select name="categories" onChange={handleFilters}>
            <Option>âm thanh</Option>
            <Option>airpods</Option>
            <Option>earpods</Option>
            <Option>beats</Option>
            <Option>harman kardon</Option>
            <Option>sony</Option>
            <Option>jbl</Option>
            <Option>belkin</Option>
          </Select>
          <FilterText>Sắp xếp:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="asc">Giá Tăng Dần</Option>
            <Option value="desc">Giá Giảm Dần</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      {/* <Newsletter /> */}
      <Footer />
    </Container>
  );
};

export default ProductList;
