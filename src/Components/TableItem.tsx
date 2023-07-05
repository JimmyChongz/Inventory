import { DeleteIcon } from "@chakra-ui/icons";
import { Tr, Td, Button } from "@chakra-ui/react";

export const TableItem = ({ id, name, quantity, stockInAt, stockOutAt }: itemProps) => {
    return (
        <>
            <Tr>
                <Td>{id}</Td>
                <Td>{name}</Td>
                <Td>{quantity}</Td>
                <Td>{stockInAt}</Td>
                <Td>{stockOutAt}</Td>
                <Td><Button onClick={() => {
                    fetch(`/api/inventory/${id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                }}><DeleteIcon /></Button></Td>
            </Tr>
        </>
    )
}