import React from "react";

// query data & display to page
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../../utils/queries";

// import nested component
import DisplayProfiles from "../DisplayProfiles";

const TestComponent = () => {
    // extract data from DB with query
    const { loading, data } = useQuery(QUERY_PROFILES);
    // if we don't get anything back, it's an empty array
    const profiles = data?.profiles || [];

    return (
        <footer className="w-100 mt-auto text-dark p-4">
            <div className="container text-center mb-5">
                <h4>&copy; {new Date().getFullYear()} - Tech Friends</h4>
                {loading ? (
                    // if data hasn't been retrieved yet, show loading
                    <div>Loading...</div>
                ) : (
                    // otherwise show the data
                    <DisplayProfiles
                        profiles={profiles}
                        title="Here's the thing"
                    />
                )}
            </div>
        </footer>
    );
};

export default TestComponent;
