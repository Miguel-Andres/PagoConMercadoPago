import { Stack ,Box ,Image} from '@chakra-ui/react'
import React from 'react'
import IconCart from './IconCart'
export default function Navbar() {
    return (
        <React.Fragment>
            <Box w="100%" bg="blue.500"  h="100px" >
                <Stack p={1} d="flex" direction="row" justifyContent="space-around"  >
                    <Image boxSize="100px"  objectFit="cover " src="https://www.dogmaind.com/wp-content/uploads/2016/10/mercadopago-01.png"/>
                 <IconCart />
                </Stack>
                
            </Box>
            
        </React.Fragment>
    )
}
