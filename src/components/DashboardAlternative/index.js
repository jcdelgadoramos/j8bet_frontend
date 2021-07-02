import React, {useState} from 'react';

function DashboardAlternative(props) {
	const event = props.event;
    const [clicked, setClicked] = useState(false);

    function titleClicked(event) {
        setClicked(!clicked);
    };

	return (
        <div key={event.id}
            className={`flex flex-col sm:flex-row justify-between p-1 my-1
            rounded-md cursor-pointer text-left select-none hover:bg-gray-700
            ${clicked ? "bg-gray-700" : "bg-gray-500"} text-white`}
            onClick={ e => titleClicked(e) }
        >
            <div>{event.name}</div>
            <div className="sm:text-right font-bold">
                {event.quotas.edges[0].node.coeficient}
            </div>
        </div>
	)
};

export default DashboardAlternative;