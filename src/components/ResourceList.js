import React, { useState, useEffect } from 'react';
import axios from 'axios';

// class ResourceList extends React.Component {
//   // state = { resources: [] };
const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

    setResources(response.data);
    // this.setState({ resource: response.data });
  };

  useEffect(() => {
    fetchResource(resource)
  }, [])


  return <div>{resources.length}</div>;
}


export default ResourceList;