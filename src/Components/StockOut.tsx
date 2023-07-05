import { FormControl, Stack, FormLabel, Input, Button, Box } from "@chakra-ui/react"
import { useState } from "react";

export const StockOut = () => {
    const [name, setName] = useState("");
    const [quantity, setQantity] = useState("");
    return (
        <> 
            <FormControl isRequired>
                <Stack direction="column" spacing={4}>
                    <Box>
                        <FormLabel>物品名稱</FormLabel>
                        <Input placeholder='Product name' value={name} onChange={e => {
                            setName(e.target.value);
                        }}/>
                    </Box>
                    <Box>
                        <FormLabel>出貨數量</FormLabel>
                        <Input placeholder='Quantity' value={quantity} onChange={e => {
                            setQantity(e.target.value);
                        }}/>
                    </Box>
                </Stack>
            </FormControl>
            <Stack direction="row" justifyContent={"center"} marginTop={4} spacing={6}>
                <Button colorScheme='facebook' variant='solid' onClick={() => {
                    fetch(`/api/inventory/StockOut/${name}/${quantity}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                }}>
                    送出
                </Button>
                <Button colorScheme='gray' variant='solid'>
                    取消
                </Button>
            </Stack>
        </>
    )
}