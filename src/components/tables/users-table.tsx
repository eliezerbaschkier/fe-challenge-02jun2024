import React, { useMemo } from "react";
import { Space, Table as AntdTable, Button } from "antd";
import type { TableProps } from "antd";
import { User } from "@/lib/types/users";
import { formatDate } from "@/lib/utils/dates";
import { useDeleteUser } from "@/hooks/users/use-delete-user";

type Props = {
    data: User[];
};

function DeleteButton({ id }: { id: string }) {
    const { deleteUserMutation, isPendingDeleteUser } = useDeleteUser();

    return (
        <Button
            type="primary"
            className="mx-0"
            danger
            onClick={() => deleteUserMutation(id)}
            loading={isPendingDeleteUser}
        >
            Delete
        </Button>
    );
}

const columns: TableProps<User>["columns"] = [
    {
        title: "First Name",
        dataIndex: "firstName",
        key: "_id",
        render: (_, record) => <p>{record.firstName}</p>,
    },
    {
        title: "Last Name",
        dataIndex: "lastName",
        key: "_id",
        render: (_, record) => <p>{record.lastName}</p>,
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "_id",
        render: (_, record) => <p>{record.email}</p>,
        responsive: ["md"],
    },
    {
        title: "Phone number",
        dataIndex: "phoneNumber",
        key: "_id",
        render: (_, record) => <p>{record.phoneNumber}</p>,
        responsive: ["sm"],
    },
    {
        title: "Role",
        dataIndex: "role",
        key: "_id",
        render: (_, record) => <p>{record.role}</p>,
        responsive: ["lg"],
    },
    {
        title: "Receive emails",
        dataIndex: "preferences",
        key: "_id",
        render: (_, record) => (
            <p>{record.preferences?.receiveEmails ? "Yes" : "No"}</p>
        ),
        responsive: ["lg"],
    },
    {
        title: "Receive notifications",
        dataIndex: "preferences",
        key: "_id",
        render: (_, record) => (
            <p>{record.preferences?.receiveNotifications ? "Yes" : "No"}</p>
        ),
        responsive: ["xl"],
    },
    {
        title: "Created by",
        dataIndex: "createdById",
        key: "_id",
        render: (_, record) => <p>{record.createdById}</p>,
        responsive: ["xxl"],
    },
    {
        title: "Created at",
        dataIndex: "createdAtDate",
        key: "_id",
        render: (_, record) => <p>{formatDate(record.createdAtDate)}</p>,
        responsive: ["xxl"],
    },
    {
        title: "Updated by",
        dataIndex: "updatedById",
        key: "_id",
        render: (_, record) => <p>{record.updatedById}</p>,
        responsive: ["xxl"],
    },
    {
        title: "Updated at",
        dataIndex: "updatedAtDate",
        key: "_id",
        render: (_, record) => <p>{formatDate(record.updatedAtDate)}</p>,
        responsive: ["xxl"],
    },
    {
        title: "",
        key: "_id",
        render: (_, record) => (
            <Space size="middle">
                <a>Update</a>
            </Space>
        ),
    },
    {
        title: "",
        key: "delete",
        width: 125,
        render: (_, record) => (
            <div className="w-full flex items-center justify-center">
                <DeleteButton id={record._id} />
            </div>
        ),
    },
];

function UsersTable({ data }: Props) {
    return <AntdTable columns={columns} dataSource={data} />;
}

export default UsersTable;
