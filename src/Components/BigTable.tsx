import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Box,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { itemState } from "../Store/itemState";
import { StockIn } from "./StockIn";
import { StockOut } from "./StockOut";
import { TableItem } from "./TableItem";
import { Search } from "./Search";

export const BigTable = () => {
  const [items, setItems] = useRecoilState(itemState);

  fetch(`/api/inventory`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setItems(data);
    });

  return (
    <>
      <Box bg="facebook.500" w="100%" p={8} color="white" fontSize={36}>
        庫存管理進出貨表單總覽
      </Box>
      <Tabs variant="soft-rounded" colorScheme="facebook" marginTop={2}>
        <TabList>
          <Tab>進出貨表單總覽</Tab>
          <Tab>進貨</Tab>
          <Tab>出貨</Tab>
          <Tab>查詢</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Table variant="simple">
                <TableCaption>Author: Jimmy蟲</TableCaption>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>物品名稱</Th>
                    <Th>數量</Th>
                    <Th>進貨日期</Th>
                    <Th>出貨日期</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items.map((item) => {
                    return (
                      <>
                        <TableItem
                          id={item.id}
                          name={item.name}
                          quantity={item.quantity}
                          stockInAt={item.stockInAt}
                          stockOutAt={item.stockOutAt}
                        />
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <StockIn />
          </TabPanel>
          <TabPanel>
            <StockOut />
          </TabPanel>
          <TabPanel>
            <Search />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
