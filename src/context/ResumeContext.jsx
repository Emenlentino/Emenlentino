import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('/resume.json')
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error('Failed to fetch resume.json:', err.message);
        setError('Unable to load resume data');
      });
  }, []);

  return <ResumeContext.Provider value={{ data, error }}>{children}</ResumeContext.Provider>;
};