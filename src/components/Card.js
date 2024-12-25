import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import img from "../assets/paris.jfif";
import moment from "moment";
import image1 from "../assets/dumebi.JPG";
import image2 from "../assets/taoheed.JPG";
import image3 from "../assets/wiskid.JPG";
import image4 from "../assets/dotman.PNG";

export const Card = () => {
  const [image, setImage] = useState(img);
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      quote: "make hay while the sun shines",
      name: "Wiskid",
      time: Date.now(),
      image: image3,
    },
    {
      id: 2,
      quote: "You do not find the happy life, you make it.",
      time: Date.now(),
      name: "Taobal",
      image: image2,
    },
    {
      id: 3,
      quote: "If you cant change it, change your attitude.",
      time: Date.now(),
      name: "Dumebi",
      image: image1,
    },
    {
      id: 4,
      quote: "Believe you can and you are halfway there.",
      time: Date.now(),
      name: "Dotman",
      image: image4,
    },
  ]);

  const imageUpload = (e) => {
    const file = e.target.files[0];
    const saveImage = URL.createObjectURL(file);
    setImage(saveImage);
  };

  const pushData = () => {
    const file = {
      id: data.length + 1,
      name: name,
      quote: quote,
      image: image,
      time: Date.now(),
    };

    setData([...data, file]);
    setName("");
    setQuote("");
    setImage(image);
  };

  const removeItems = (id) => {
    const removeData = data.filter((rm) => rm.id !== id);
    setData(removeData);
  };

  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem("storageData"));
    setData(storedValue);
  }, []);

  useEffect(() => {
    localStorage.setItem("storageData", JSON.stringify(data));
  }, [data]);

  return (
    <Container>
      <Wrapper>
        <Upper>
          <Picture src={image} />
          <Register>
            <Input type="file" onChange={imageUpload} />
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              placeholder="Wats on your mind"
              value={quote}
              onChange={(e) => {
                setQuote(e.target.value);
              }}
            />
            <Button onClick={pushData}>Submit</Button>
          </Register>
        </Upper>
        {data.map((props) => {
          return (
            <Cad>
              <Top>
                <Cancel>
                  <CancelIcon
                    onClick={() => {
                      console.log("am in");
                      removeItems(props.id);
                    }}
                  />
                </Cancel>
                <Avatar src={props.image} />
              </Top>
              <Quote>
                <ImQuotesLeft />
                <span>{props.quote}</span>
                <ImQuotesRight />
              </Quote>
              <Name>{props.name}</Name>
              <Time>{moment(props.time).fromNow()}</Time>
            </Cad>
          );
        })}
      </Wrapper>
    </Container>
  );
};

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 0;
  outline: none;
  margin-top: 10px;
  text-transform: uppercase;
  background-color: red;
  color: white;
  transition: all 500ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    background-color: powderblue;
    transform: scale(1.03);
  }
`;
const Input = styled.input`
  margin: 2px 0;
  width: 300px;
  height: 30px;
  outline: none;
  border-radius: 5px;
`;
const Upper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 70px 0;
  align-items: center;
`;
const Picture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;
const Register = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Cancel = styled.div`
  .MuiSvgIcon-root {
    color: red;
    font-size: 30px;
    cursor: pointer;
  }
`;
const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
const Quote = styled.div`
  color: yellow;
  text-align: center;
  font-size: 17px;
  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin: 10px 0;
  }
`;
const Name = styled.div`
  font-size: 20px;
  font-size: bold;
  margin: 20px 0;
  color: #ffffff;
  font-family: poppins;
  flex1: 1;
`;
const Time = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const Cad = styled.div`
  width: 280px;
  border-radius: 10px;
  background-color: #0000a0;
  margin: 2px;
  color: white;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: 100%;
  color: black;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // flex-direction:column;
`;
