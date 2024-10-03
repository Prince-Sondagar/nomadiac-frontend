import React from "react";
import "./UserTable.css";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export interface User {
  id: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  job_title?: string;
  image?: string;
}

export interface UsersTableProps {
  users?: User[];
}

const UsersTable = (props: UsersTableProps) => {
  const { users } = props;

  return (
    <>
     <Table>
        <TableHead>
          <TableRow>
            <TableCell>first_name</TableCell>
            <TableCell>last_name</TableCell>
            <TableCell>email</TableCell>
            <TableCell>phone</TableCell>
            <TableCell>job_title</TableCell>
            <TableCell>img</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.job_title}</TableCell>
                <TableCell>
                  <img
                    className="user-table-img"
                    src={item.image}
                    alt="profile"
                  ></img>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default UsersTable;
