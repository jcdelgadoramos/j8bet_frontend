import React from 'react';

function DashboardEntry(props) {
	const affair = props.affair;

    return (
        <div key={affair.id} className="w-full sm:w-1/2 text-left p-1">
            <div className="w-full p-1 my-2 rounded-md bg-cyan-800">
                <p className="text-sm text-gray-200">
                    {affair.description}
                </p>
            </div>
            {
                affair.events.edges.map((event) => (
                    <div key={event.node.id}
                        className="flex flex-col sm:flex-row justify-between
                        p-1 my-1 rounded-md cursor-pointer bg-gray-500
						hover:bg-gray-700"
                    >
                        <div className="text-left text-sm text-white">
                            {event.node.name}
                        </div>
                        <div className="text-left sm:text-right text-sm font-bold text-white">
                            {event.node.quotas.edges[0].node.coeficient}
                        </div>
                    </div>
                ))
            }
        </div>
	)
};

export default DashboardEntry;