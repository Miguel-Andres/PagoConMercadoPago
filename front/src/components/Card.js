import React, { useState,useContext } from "react";
import { Redirect, useHistory } from "react-router-dom"
import {
  Flex,
  Box,
  Image,
  Badge,
  Icon,
  chakra,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";


export default function Card({ ...data }) {
 
  const [init_point , setInit_point] = useState(null)
  const [openRedirect , setOpenRedirect] = useState(false )
  
  const history = useHistory();

  const comprar = (e, props) => {
    e.preventDefault();
    // let path = `/check`;
    // history.push(path);
   
    let url = "/api/products/checkout"
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ ...data }), // data can be `string` or {object}!
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(res=>{
        console.log(res.body)
        // Aqui viene init_point para hacer redirect      
       
        window.localStorage.setItem("init_point", res)
      })
      .catch((error) => console.error("Error:", error))
      .finally((res) => {
      
        setOpenRedirect(true)
          
        console.log("enviado")
      });
     

  };


 

  return (
    <React.Fragment>
       {openRedirect ? <Redirect to="/check" /> :
      <Flex p={2} w="xs" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          borderColor="yellow.500"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          {data.isNew && (
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon
                  as={FiShoppingCart}
                  h={4}
                  w={4}
                  alignSelf={"center"}
                 
                  position="absolute"
                  top={2}
                  right={2}
                />
              </chakra.a>
            </Tooltip>
          )}

          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
            boxSize="300px"
            objectFit="cover"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="sm"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {data.name}
              </Box>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="2xl">
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {data.price.toLocaleString("de-De")}
              </Box>

               <Button
                type="submit"
                size="sm"
                colorScheme="blue"
                margin="10px"
                onClick={comprar}
              >
                Pago individual
              </Button>
             
            </Flex>
          </Box>
        </Box>
      </Flex> }
    </React.Fragment>
  );
}
