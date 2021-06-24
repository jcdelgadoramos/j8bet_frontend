import React from 'react';

function DashboardAlternative(props) {
	const event = props.event;

	return (
        <div key={event.id}
            className="flex flex-col sm:flex-row justify-between
            p-1 my-1 rounded-md cursor-pointer text-left
			text-white bg-gray-500 hover:bg-gray-700"
        >
            <div>{event.name}</div>
            <div className="sm:text-right font-bold">
                {event.quotas.edges[0].node.coeficient}
            </div>
        </div>
	)
};

export default DashboardAlternative;