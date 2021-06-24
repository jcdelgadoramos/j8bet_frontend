import React from 'react';
import { useQuery } from '@apollo/client';
import DashboardEntry from '../DashboardEntry';
import DASHBOARD_QUERY from './queries';

function Dashboard(props) {
    const { loading, error, data } = useQuery(DASHBOARD_QUERY);

    if (loading) return (
        <div className="w-full items-center justify-between p-2 
            text-center bg-coolGray-900 text-gray-200"
        >Cargando...</div>
    );
    if (error) return (
        <div className="w-full items-center justify-between p-2
            text-center text-lg bg-coolGray-900 text-pink-600"
        >Error</div>
    );
    if (data) {
        return (
            <div className="flex flex-wrap w-full rounded-md p-2 text-sm
                bg-coolGray-900"
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