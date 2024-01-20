import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="c1">
      <div
        className="profile-pic"
        style={{ backgroundImage: `url(${profile.profileImg})` }}
      ></div>
      <div
        style={{
          borderBottom: "1px solid white",
          height: "8em",
        }}
      ></div>
      <div className="profile-details">
        <div>
          <b style={{ fontSize: "25px" }}>{profile.name}</b>
        </div>
        <div>{profile.country}</div>
      </div>
      <div style={{ height: "5.9em", display: "flex" }}>
        {profile.metrix.map((metric) => (
          <div key={metric.uid} className="metrix">
            <div style={{ fontSize: "25px", fontWeight: "bold" }}>
              {metric.value}
            </div>
            <div>{metric.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
