import React, { useState } from "react";
// Import the `useMutation()` hook from Apollo Client
import { useMutation } from "@apollo/client";
// Import the GraphQL mutation
import { ADD_PROFILE } from "../../utils/mutations";
import { QUERY_PROFILES } from "../../utils/queries";

const ProfileForm = () => {
  const [name, setName] = useState("");

  // declare mutation to add profile to DB
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE, {
    // update 'local cache' without reloading
    update(cache, { data: { addProfile } }) {
      try {
        // get existing data
        const { profiles } = cache.readQuery({ query: QUERY_PROFILES });

        // combine existing datat with new user entered data
        cache.writeQuery({
          query: QUERY_PROFILES,
          // update the 'ALL' query with everything PLUS the new one
          data: { profiles: [...profiles, addProfile] },
        });
      } catch (e) {
        // account for errors
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProfile({
        variables: { name },
      });

      console.log("YOUR return data", data);
      setName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add the profile to the DB</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          {/* input changes with state */}
          <input
            placeholder="Add your profile name..."
            value={name}
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Add Profile
          </button>
        </div>
        {/* account for errors */}
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
