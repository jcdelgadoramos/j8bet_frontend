import React from 'react';
import { useQuery } from '@apollo/client';
import DashboardEntry from '../DashboardEntry';
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
                        <DashboardEntry
                            key={affair.node.id} affair={affair.node}
                        ></DashboardEntry>
                    ))
                }
            </div>
        )
    }
};

export default Dashboard;