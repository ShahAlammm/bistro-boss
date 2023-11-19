import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "dessert", "soup", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="space-y-20 text-center">
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover bgImg={coverImg} title="OUR SHOP"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>
            <span className="uppercase text-xl font-serif font-bold">
              Salad
            </span>
          </Tab>
          <Tab>
            <span className="uppercase text-xl font-bold font-serif">
              Pizza
            </span>
          </Tab>
          <Tab>
            <span className="uppercase text-xl font-bold font-serif">
              Dessert
            </span>
          </Tab>
          <Tab>
            <span className="uppercase text-xl font-bold font-serif">Soup</span>
          </Tab>
          <Tab>
            <span className="uppercase text-xl font-bold font-serif">
              Drinks
            </span>
          </Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
