import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import Card from "./Card";

export default function ListItems() {
  const [datos, setDatos] = useState({
    data: [],
  });

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((value) => {        
        setDatos(value);
      })
      .catch((err) => console.log(err));
  }, []);

 

  return (
    <div>
      <Container maxW="7xl" display="flex" marginTop="30px" marginBottom="50px">
        {datos
          ? datos.data.map((data) => <Card {...data} key={data.name}  />)
          : null}
      </Container>
    </div>
  );
}
