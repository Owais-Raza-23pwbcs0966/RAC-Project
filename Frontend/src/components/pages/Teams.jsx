import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Teams.css';

export const Teams = () => {
  // State to hold the fetched team data
  const [teamData, setTeamData] = useState([]);

  // State to track loading status
  const [loading, setLoading] = useState(true);

  // State to track errors during data fetching
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    axios
      .get("http://rac-project.vercel.app/teamData") // API call to fetch team data
      .then((res) => {
        setTeamData(res.data); // Save fetched data to state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError("Failed to load team data."); // Save error message to state
        setLoading(false); // Stop loading in case of error
        console.error(err); // Log the error for debugging
      });
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  // Function to render team members dynamically
  const renderTeamMembers = (members) => {
    return members.map((member) => (
      <div className="team-member" key={member.id}>
        {/* Display team member image */}
        <div className="team-member-image">
          <img src={member?.image} alt={member.name} />
        </div>
        {/* Display team member name, position, and description */}
        <div className="team-member-info">
          <h2>{member?.name}</h2>
          <h3>{member?.position}</h3>
          <div className="more-info">
            <p>{member?.description}</p>
          </div>
        </div>
      </div>
    ));
  };

  // Render a loading message if data is still being fetched
  if (loading) return <p>Loading team data...</p>;

  // Render an error message if there was an issue fetching data
  if (error) return <p>{error}</p>;

  // Split the teamData into two groups: Upper Cabinet and Core Cabinet
  const firstThreeMembers = teamData.slice(0, 3);
  const remainingMembers = teamData.slice(3);

  return (
    <div className="team-container">
      {/* Title of the team section */}
      <h1>
        Meet our <span style={{ fontFamily: "Dancing Script" }}>Team</span>
      </h1>

      {/* Upper Cabinet Section */}
      <h2 className="headings">UPPER CABINET</h2>
      <div className="team-members">
        {renderTeamMembers(firstThreeMembers)} {/* Render first three members */}
      </div>

      {/* Core Cabinet Section */}
      <h2 className="headings">CORE CABINET</h2>
      <div className="team-members">
        {renderTeamMembers(remainingMembers)} {/* Render remaining members */}
      </div>
    </div>
  );
};
