import React, {useState} from 'react';
import DashboardAlternative from '../DashboardAlternative';

function DashboardEntry(props) {
	const affair = props.affair;
    const [modalOpen, setModalOpen] = useState(false);
    const [clicked, setClicked] = useState(false);

    function titleClicked(event) {
        setModalOpen(!modalOpen);
        setClicked(!clicked);
    };

    return (
        <div key={affair.id} className="w-full sm:w-1/2 p-1 text-left">
            <div className={`w-full p-1 my-2 rounded-md cursor-pointer
                select-none hover:text-cyan-800 hover:bg-gray-200
                ${clicked ?
                    "text-cyan-800 bg-gray-200" : "text-gray-200 bg-cyan-800"} 
                `}
                onClick={ e => titleClicked(e) }
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
            <div id={affair.id+"Modal"}
                className={`${modalOpen ? "" : "hidden" } absolute
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-3/4 sm:w-3/5 md:w-3/5 mx-auto rounded-md 
                bg-coolGray-900 text-gray-200 border-gray-200"`}
            >
              <div className="m-2 p-2 rounded-md bg-cyan-800">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
              </div>
            </div>
        </div>
	)
};

export default DashboardEntry;