import React from 'react';
import DashboardAlternative from '../DashboardAlternative';

function DashboardEntry(props) {
	const affair = props.affair;

    return (
        <div key={affair.id} className="w-full sm:w-1/2 p-1 text-left">
            <div className="w-full p-1 my-2 rounded-md cursor-pointer
                text-gray-200 bg-cyan-800
                hover:text-cyan-800 hover:bg-gray-200"
            >
                {affair.description}
            </div>
            {
                affair.events.edges.map((event) => (
                    <DashboardAlternative
                        key={event.node.id} event={event.node}
                    ></DashboardAlternative>
                ))
            }
        </div>
	)
};

export default DashboardEntry;