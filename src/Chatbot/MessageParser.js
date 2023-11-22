import React from 'react';

const MessageParser = ({ children, actions }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;
    const parse = (message) => {
        if (checker === "tenant") {
            children.props.state.tenantname = message;

            //console.log(children.props.state.tenantname);

            actions.afterTenantName();  
        }

        
        //
        if (checker ==="company"){

            children.props.state.tenantcompany = message;
            actions.afterCompanyName();
        }

        //
        if (checker ==="director"){

            children.props.state.tenantdirector = message;

            actions.afterDirectorName();
        }

        //
        if (checker === "landlord") {
            children.props.state.landlord.name = message;

            actions.afterLandLordName();
            
        }
        if (checker === "premises") {
            actions.afterPremisesLocation();
            //children.props.state.userData.owner = message;
        }
        if (checker === "lease") {
            actions.afterLeasePeriod();
            //children.props.state.userData.owner = message;
        }
        if (checker === "startDate") {
            actions.afterStartDate();
            //children.props.state.userData.owner = message;
        }
        if (checker === "deposit") {
            actions.afterDeposit();
            //children.props.state.userData.owner = message;
        }


        if (checker === "preference" && Number(message)) {
            actions.afterAgeMessage();
            children.props.state.userData.age = message;
            if (message <= 10) {
                children.props.state.userData.category = "kid";
            } else if (message > 10 && message <= 20) {
                children.props.state.userData.category = "teenagers";
            } else {
                children.props.state.userData.category = "adults";
            }
        }
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
