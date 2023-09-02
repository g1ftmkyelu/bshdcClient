import React from 'react';

function Table({ items, showEdit = true, showUpdate = true, showPublish = true, showDelete = true, onEdit, onUpdate, onPublish, onDelete }) {
  if (!items || items.length === 0) {
    return <div>No data to display.</div>;
  }

  const headers = Object.keys(items[0]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
          {showEdit && <th>Edit</th>}
          {showUpdate && <th>Update</th>}
          {showPublish && <th>Publish</th>}
          {showDelete && <th>Delete</th>}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{item[header]}</td>
            ))}
            {showEdit && (
              <td>
                <button onClick={() => onEdit(item)}>Edit</button>
              </td>
            )}
            {showUpdate && (
              <td>
                <button onClick={() => onUpdate(item)}>Update</button>
              </td>
            )}
            {showPublish && (
              <td>
                <button onClick={() => onPublish(item)}>Publish</button>
              </td>
            )}
            {showDelete && (
              <td>
                <button onClick={() => onDelete(item)}>Delete</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
