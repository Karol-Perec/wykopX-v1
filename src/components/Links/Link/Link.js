import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Link = ({match}) => {

  useEffect(() => {
    axios.get(`https://a2.wykop.pl/Links/Link/${match.params.id}/withcomments/true/appkey/aNd401dAPp`).then(
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
