import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Divider,
  Button,
  Flex,
  AbsoluteCenter,
  ListItem,
  UnorderedList,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";

export const Search = () => {
  const [name, setName] = useState("");
  const [inventory, setInventory] = useState<itemProps>();
  return (
    <>
      <FormControl isRequired>
        <FormLabel>物品名稱</FormLabel>
        <Flex>
          <Input
            placeholder="Product name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button
            colorScheme="facebook"
            marginLeft={5}
            onClick={() => {
              fetch(`/api/inventory/${name}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  setInventory(data);
                  console.log(data);
                });
            }}
          >
            搜尋
          </Button>
        </Flex>
      </FormControl>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          查詢結果
        </AbsoluteCenter>
      </Box>
      <Container>
        <UnorderedList>
          <ListItem>ID: {inventory?.id}</ListItem>
          <ListItem>物品名稱: {inventory?.name}</ListItem>
          <ListItem>剩餘數量: {inventory?.quantity}</ListItem>
          <ListItem>進貨日期: {inventory?.stockInAt}</ListItem>
          <ListItem>出貨日期: {inventory?.stockOutAt}</ListItem>
        </UnorderedList>
      </Container>
    </>
  );
};
