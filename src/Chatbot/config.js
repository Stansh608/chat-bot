import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import StartBtn from './components/StartBtn';
import StartSlow from './components/StartSlow';
import data from './data';
import DipslayImage from './components/DipslayImage';
import PremisesLocation from './components/PremisesLocation';
import HouseNumber from './components/HouseNumber';
import PaymentMode from './components/PaymentMode';
import Currency from './components/Currency';


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
        tenantname:"",
        tenantcompany:"",
        tenantdirector:"",
        landname: {
            name: "",
            phone: "",
            location: {
                lockey:{
                    name: "",
                    vacant:{
                        vacantkey:{
                            house:"",
                            price:"",
                            size:"",
                        }
                    }

                }
                
            }
        }
    },
    widgets: [
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        {
            widgetName: "startSlow",
            widgetFunc: (props) => <StartSlow {...props} />,
        },
        {
            widgetName: "finalImage",
            widgetFunc: (props) => <DipslayImage {...props} />,
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
    ]
};

export default config;