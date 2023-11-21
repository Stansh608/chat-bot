import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
const ActionProvider = ({ createChatBotMessage,setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage('Insert your First and Last Name ');
        
        updateState(message, "tenant")
    }

    const afterTenantName = () => {
        const message = createChatBotMessage("Enter your Company Name")
        updateState(message, "company")

    }
    //Ask for directors names
    const afterCompanyName = () =>{
        const message = createChatBotMessage("Enter the Director's Full Names as they appear on the ID");
        updateState(message, "director");

    }
    //Ask for Landlord's company Name
    const afterDirectorName = () =>{
        const message = createChatBotMessage("Enter the Landlord's Company Name");
        updateState(message, "landlord");
    }

    const afterLandLordName = () => {
      
        const message = createChatBotMessage("Select the Premises Location",{
            widget:"premisesLocation"
        })
        updateState(message, "premises")
    }
    const afterPremisesLocation = (key) => {
        const client = createClientMessage(`${key}`);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, client],
        }))
        const message = createChatBotMessage("Select the House Number",{
            widget:"houseNumber"
        })
        updateState(message, "house")
    }

    const afterHouseNumber = (houseno) => {
        const client = createClientMessage(`${houseno}`);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, client],
        }))
        const message = createChatBotMessage(`Insert the Preferred Lease Period in Months as a number e.g 12, 15, 20  `,{"Note": "(12 means one year)"});
        updateState(message, "lease")
    }
    //
    const afterLeasePeriod = () => {
        
        const message = createChatBotMessage("Select the Rent Payment Mode", {
            widget:"paymentMode"
        });
        updateState(message, "payment");
    }

    //
    const afterPaymentMode = (mode) => {
        const client = createClientMessage(`${mode}`);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, client],
        }))
        const message = createChatBotMessage(`Select Currrency`, {
            widget: "currency"
        });
        updateState(message, "currency");
    }
    //
    const afterCurrency = (currency) => {
        const client = createClientMessage(`${currency}`);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, client],
        }))
        const message = createChatBotMessage(`Insert the Lease Commencement Date in (dd.mm.yy) e.g 1.11.2023`);
        updateState(message, "startDate");
    }

    //
    const afterStartDate = () => {
    
    const message = createChatBotMessage("Insert deposit Amount (in Figures) e.g 30000");
    updateState(message, "deposit");
    }
    //
    const afterDeposit = () => {
    
        const message = createChatBotMessage("Congratulations! You have reached the end. Your information will be processed and response sent to you after 24 hours.   Regards!");
        updateState(message, "finalState");
        }


    const afterAgeMessage = () => {
        const message = createChatBotMessage("?", {
            widget: "startSlow"
        })
        updateState(message)
    }

    const finalResult = (name, age, preference, vehicle) => {
        const message = createChatBotMessage(`Got it, ${name}! Based on your age ${age} and preference for a ${preference} ride, I recommend the '${vehicle}.' Enjoy the thrill!`, {
            widget: "finalImage"
        })
        updateState(message)
    }

    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        afterTenantName,
                        afterLandLordName,
                        afterAgeMessage,
                        finalResult,
                        afterPremisesLocation,
                        afterHouseNumber,
                        afterLeasePeriod,
                        afterPaymentMode,
                        afterCurrency,
                        afterStartDate,
                        afterDeposit,
                        afterCompanyName,
                        afterDirectorName,



                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;