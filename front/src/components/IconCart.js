import React from 'react'
import {GiShoppingCart} from "react-icons/gi"

import {Icon ,Box} from "@chakra-ui/react"
export default function IconCart() {
    return (
        <Box  d="flex" alignItems="center">
            <Icon as={GiShoppingCart} h={10}
                  w={10} color="yellow.500" />                
        </Box>
    )
}
