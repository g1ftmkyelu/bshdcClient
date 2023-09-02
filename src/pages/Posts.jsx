import React from "react";
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    DateField,
    TextField,
    EditButton,
    TextInput,
    DateInput,
    useRecordContext,
} from "react-admin";
import { FaBook } from "react-icons/fa6";

export const PostIcon = FaBook;

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="average_note" />
            <TextField source="views" />
            <EditButton />
        </Datagrid>
    </List>
);

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="teaser" options={{ multiline: true }} />
            <TextInput multiline source="body" />
            <DateInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
            <TextInput disabled label="Nb views" source="views" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="teaser" options={{ multiline: true }} />
            <TextInput multiline source="body" />
            <TextInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
        </SimpleForm>
    </Create>
);
