import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import StartBtn from './components/StartBtn';
import data from './data';
import Rateus from './components/Rateus';
import PremisesLocation from './components/PremisesLocation';
import HouseNumber from './components/HouseNumber';
import PaymentMode from './components/PaymentMode';
import Currency from './components/Currency';
import Houseno from './components/Houseno';
import UserInfo from './components/UserInfo';

const config = {
    botName: "ABC Leasing Company AI Assistance",
    initialMessages: [createChatBotMessage(`Welcome to ABC Leasing Company AI Assistance`, {
        widget: "startBtn"
    })],
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
    },
    state: {
        checker: null,
        data,
        
        
},
    widgets: [
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        {
            widgetName: "houseno",
            widgetFunc: (props) => <Houseno {...props} />,
        },
        {
            widgetName: "userInfo",
            widgetFunc: (props) => <UserInfo {...props} />,
        },
        {
            widgetName: "premisesLocation",
            widgetFunc: (props) => <PremisesLocation {...props} />,
            props:{
                owner:"jackson",
            }
        },
        {
            widgetName: "houseNumber",
            widgetFunc: (props) => <HouseNumber {...props} />,
            
        },
        {
            widgetName: "paymentMode",
            widgetFunc: (props) => <PaymentMode {...props} />,
            
        },
        {
            widgetName: "currency",
            widgetFunc: (props) => <Currency {...props} />,
            
        },
        {
            widgetName: "rateus",
            widgetFunc: (props) => <Rateus {...props} />,
            
        },
    ]
};

export default config;