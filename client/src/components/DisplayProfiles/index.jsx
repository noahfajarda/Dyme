// DON'T IMPORT REACT FOR NESTED COMPONENTS
// import React from "/react";
import { useState } from "react";

import { useMutation } from "@apollo/client";
// Import the GraphQL mutation
import { REMOVE_PROFILE } from "../../utils/mutations";
import { QUERY_PROFILES } from "../../utils/queries";

const styles = {
    removeButton: {
        height: "20px",
        width: "20px",
        backgroundColor: "red",
        borderRadius: "5px",
    },
};

const DisplayProfiles = ({ profiles, title }) => {
    const reversed = [];
    // way to reverse the array from db
    // there's probably a better way though
    profiles.forEach((profile) => reversed.unshift(profile));
    profiles = reversed;

    // declare mutation to add profile to DB
    const [removeProfile, { error, data }] = useMutation(REMOVE_PROFILE, {
        // update 'local cache' without reloading
        update(cache, { data: { removeProfile } }) {
            try {
                const { profiles } = cache.readQuery({ query: QUERY_PROFILES });

                console.log(profiles);
                // try to fix this, needs to update UI after entry is deleted
                cache.writeQuery({
                    query: QUERY_PROFILES,
                    data: { profiles: [...profiles] },
                });
            } catch (e) {
                // account for errors
                console.error(e);
            }
        },
    });

    const removeProfileFunction = async (profileId) => {
        try {
            // WHY ISN'T THIS DELETE QUERY WORKING?
            // WHY DOESN'T IT UPDATE INSTANTLY?
            const { data } = await removeProfile({
                variables: { profileId },
            });
            console.log("the removed data", data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        // iterate through array of objects and display data
        <div>
            <div>
                {/* if there are profiles, iterate through them */}
                {profiles &&
                    profiles.map((profile) => (
                        // give each one a unique key
                        <div key={profile?._id}>
                            {/* display the names */}
                            <h1>{profile?.name}</h1>
                            <p>
                                {/* if they have skills, display them iteratively */}
                                {profile?.skills?.map((skill) => (
                                    <div key={skill}>{skill}</div>
                                ))}
                            </p>
                            <button
                                // on press, remove the profile
                                onClick={() =>
                                    removeProfileFunction(profile._id)
                                }
                                style={styles.removeButton}
                            ></button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default DisplayProfiles;
