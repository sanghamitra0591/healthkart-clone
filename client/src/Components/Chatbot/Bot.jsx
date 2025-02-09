import React, { createContext } from "react";


export const chatBotContext = createContext();

const Bot = ({ children }) => {
  const steps = [
    {
      id: "1",
      message: "Hi, please enter your name to continue!",
      trigger: "2"
    },
    {
      id: "2",
      user: true,
      trigger: "3"
    },
    {
      id: "3",
      message: "Hi {previousValue}! How can i help you?",
      trigger: "4"
    },
    {
      id: "4",
      options: [
        { value: 2, label: "Product Complaint", trigger: "6" },
        { value: 3, label: "About US", trigger: "7" },
        { value: 5, label: "My orders", trigger: "5"},
        { value: 4, label: "Nothing for now!", trigger: "9" }
      ]
    },
    {
      id: "5",
      component: <div> logged in  first </div>,
      trigger: "8"
    },
    {
      id: "6",
      component: <div>E-mail us at healthkartclone@gmail.com to send a complaint request.</div>,
      trigger: "8"
    },
    {
      id: "7",
      component: <div>We are an aspiring full stack web devlopers currently studying in Masai School. The team includes 3 members which includes Vivek, Ankit and Sanghmitra.</div>,
      trigger: "8"
    },
    {
      id: "8",
      message: "Anything else we can help with? ",
      trigger: "4"
    },
    {
      id: "9",
      message: "Thank you for talking to us!",
      trigger:"3"
    }
  ];

  return (
    <chatBotContext.Provider value={steps}>{children}</chatBotContext.Provider>
  );
};

export default Bot;