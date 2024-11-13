import React from 'react'
import Data from '../Constant/Data.json'
export const Table = () => {
    console.log(Data, "user data")
  return (
    <div className="table-container">
    <h2>User Information</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
            <tr>
                <td>1</td>
                <td>Ali</td>
                <td>ali@example.com</td>
                <td>12345</td>
                <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                </td>
            </tr>
            }
        </tbody>
    </table>
</div>
  )
}
