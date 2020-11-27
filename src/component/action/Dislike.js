import React from "react";

const Dislike = ({ userId, modifySuperficialChoices }) => (
    <button type="button" onClick={() => modifySuperficialChoices(userId, 'ADD_TO_DISLIKED_USERS')}>
        <img src="images/misc/like.png" alt="DisLiked User" />
    </button>
);

export default Dislike;