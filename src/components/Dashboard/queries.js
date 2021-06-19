import { gql } from '@apollo/client';

const DASHBOARD_QUERY = gql`
    query {
	    affairs: allAffairs {
	        edges {
	            node {
	                id,
	                description,
	                tags{
	                    edges {
	                        node {
	                            id,
	                            name
	                        }
	                    }
	                }
	                events(active: true) {
	                    edges {
	                        node {
	                            id,
	                            name,
	                            description,
	                            quotas (active: true) {
	                                edges {
	                                    node {
	                                        id,
	                                        probability,
	                                        coeficient,
	                                        active
	                                    }
	                                }
	                            }
	                            rules,
	                            creationDate,
	                            modificationDate,
	                            expirationDate,
	                            active
	                        }
	                    }
	                }
	            }
	        }
	    }
	}
`;

export default DASHBOARD_QUERY;
