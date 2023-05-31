import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

const MyTabs = () => {
  const [value, setValue] = useState(0);

  const tabsData = [
    { label: "Tab 1", content: "This is the content of tab 1." },
    { label: "Tab 2", content: "This is the content of tab 2." },
    { label: "Tab 3", content: "This is the content of tab 3." },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        {tabsData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <div>{tabsData[value].content}</div>
    </div>
  );
};

export default MyTabs;
