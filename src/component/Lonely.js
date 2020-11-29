import React from "react";
import LikedPerson from "./Likedperson";

const Lonely = ({ activeUserImage, likedUsers, superLikedUsers }) => (
    <div className="lonely">
        <p>Check someone around you</p>

        <span className="pulse">
            <img src={`/images/users/${activeUserImage}`} alt="Someone around you" />
        </span>
    <div id="liked-people">
        <p>{likedUsers.length > 0 ? "People you liked.. ": ''}</p>
             {likedUsers.map(item => (
            <LikedPerson key={item.id} person={item} />
        ))}

        <p>{superLikedUsers.length > 0 ? 'people you super liked! ' : ''}</p>
            {superLikedUsers.map(item => (
            <LikedPerson key={item.id} person={item} />
        ))}
    </div>

    </div>
);

export default Lonely;