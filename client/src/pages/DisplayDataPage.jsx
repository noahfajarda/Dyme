import React, { useEffect, useState } from "react";
// import 'useQuery' & 'gql' from 'apollo client'
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
// import the READ query to display data
import { QUERY_USERS } from "../utils/queries";

export default function DisplayDataPage() {
    // use 'useQuery' to retrieve the data back from the query
    const { loading, data } = useQuery(QUERY_USERS);
    // isolate the data you need
    const users = data?.users || [];
    console.log(users);

    return (
        <div>
            {/* set a conditional based on how long it takes to get the data */}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div>Retrieved data from Users DB</div>
                    <br />
                    <table>
                        <tr>
                            <th>Username</th>
                            <th>_id</th>
                            <th>password</th>
                            <th>lastName</th>
                        </tr>
                        {users &&
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.username}</td>
                                    <td>{user._id}</td>
                                    <td>{user.password}</td>
                                    <td>{user.lastName}</td>
                                </tr>
                            ))}
                    </table>
                    <table>
                        <tr>
                            <th>firstName</th>
                            <th>email</th>
                            <th>budget</th>
                            <th>availableBalance</th>
                        </tr>
                        {users &&
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.budget}</td>
                                    <td>{user.availableBalance}</td>
                                </tr>
                            ))}
                    </table>
                    <table>
                        <h1>Categories for each user</h1>
                        <tr>
                            <th>User's Name</th>
                        </tr>
                        {users &&
                            users.map((user) => (
                                <tr>
                                    <td>
                                        {user.firstName} {user.lastName}
                                    </td>

                                    <table>
                                        <tr>
                                            <th>Category</th>
                                            <th>Amount Allocated</th>
                                            <th>Description</th>
                                        </tr>
                                        {user.categories.map((category) => (
                                            <tr>
                                                <td>{category.name}</td>
                                                <td>
                                                    {category.amountAllocated}
                                                </td>
                                                <td>{category.description}</td>
                                            </tr>
                                        ))}
                                    </table>
                                </tr>
                            ))}
                    </table>
                </div>
            )}
        </div>
    );
}
