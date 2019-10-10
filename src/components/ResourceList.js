import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Recoverable } from '';

// class ResourceList extends React.Component {
//   // state = { resources: [] };
const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);
  useEffect(
    () => {
      (async (resource) => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
        setResources(response.data);
      })(resource);
    },
    [resource]
  );
  return (
    <ul>{resources.map(record => (
      <li key={record.id}>{record.title}</li>)
    )}
    </ul>
  );
};

export default ResourceList;