import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function About() {

  const gitHubUrl = 'https://api.github.com/users/PerraJ60';
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchGitHubUser();
  }, []);

  const fetchGitHubUser = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
  setUserData(jsonData);
  };
  
  const StyledContainer = styled.section`
    max-width: 1024px;
    padding: 0 20px;
    margin-left-50px;
  `;

  return (
    <StyledContainer>
      <header className='App-header'>
        <h2>About me</h2>
      </header>
      <div className='user-container'>
        <h5 className='info-item'>{userData.name}</h5>
        <h5 className='info-item'>{userData.location}</h5>
        <h5 className='info-item'>{userData.blog}</h5>
        <h5 className='info-item'>{userData.company}</h5> 
      </div>
    </StyledContainer>
  );
}
export default About;