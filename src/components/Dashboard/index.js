import React from 'react';
import { useQuery } from '@apollo/client';
import DASHBOARD_QUERY from './queries';

function Dashboard(props) {
    const { loading, error, data } = useQuery(DASHBOARD_QUERY);

    if (loading) return (
        <div className="w-full text-center items-center justify-between 
            bg-coolGray-900 p-2"
        >
            <p className="text-gray-200">Cargando...</p>
        </div>
    );
    if (error) return (
        <div className="w-full text-center items-center justify-between
            bg-coolGray-900 p-2"
        >
            <p className="text-lg text-pink-600">Error</p>
        </div>
    );
    if (data) {
        return (
            <div className="w-full flex flex-wrap bg-coolGray-900 p-2 rounded-xl"
            >
                {
                    data.affairs.edges.map((affair) => (
                        <div key={affair.node.id} className="w-full sm:w-1/2 md:w-1/3 text-left p-1">
                            <div className="w-full p-1 my-2 rounded-md bg-cyan-800">
                                <p className="text-sm text-gray-200">
                                    {affair.node.description}
                                </p>
                            </div>
                            {
                                affair.node.events.edges.map((event) => (
                                    <div key={event.node.id}
                                        className="flex flex-row justify-between
                                        p-1 my-1 rounded-md bg-gray-500"
                                    >
                                        <div className="text-left text-sm text-white">
                                            {event.node.name}
                                        </div>
                                        <div className="text-right text-sm font-bold text-white">
                                            {event.node.quotas.edges[0].node.coeficient}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
};

export default Dashboard;