import React from "react";

const Dislike = ({ userId, modifySuperficialChoices }) => (
    <button type="button" onClick={() => modifySuperficialChoices(userId, 'ADD_TO_DISLIKED_USER')}>
        <img src="images/misc/dislike.png" alt="DisLiked User" />
    </button>
);

export default Dislike;