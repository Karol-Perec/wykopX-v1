import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
const Link = () => {
  const match = useRouteMatch();

  useEffect(() => {
    axios.get(`/Links/Link/${match.params.id}/withcomments/true`).then(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return <div></div>;
};

export default Link;
