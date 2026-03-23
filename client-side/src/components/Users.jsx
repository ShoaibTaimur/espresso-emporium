import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("https://espresso-server.shoaaib.site/users");
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                navigate("/error");
            }
        }
        loadData();
    }, [navigate]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://espresso-server.shoaaib.site/users/${id}`,{
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Profile has been deleted.",
                            icon: "success"
                        });
                        const remain=users.filter(user=>user._id!==id);
                        setUsers(remain);
                    })

            };
        });
    }


    return (
        <div>
            <h2 className="text-3xl">
                users: {users.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{user.address}</p>
                                </td>
                                <td>{user.email}</td>
                                <th>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;