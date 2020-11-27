import React from "react";

const superLike = ({ userId, modifySuperficialChoices }) => (
    <button type="button" onClick={() => modifySuperficialChoices(userId, 'ADD_TO_LIKED_USER')}>
        <img src="images/misc/superlike.png" alt="superLiked User" />
    </button>
);

export default superLike;