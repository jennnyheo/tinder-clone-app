import React from "react";

const Like = ({ userId, modifySuperficialChoices }) => (
    <button type="button" onClick={() => modifySuperficialChoices(userId, 'ADD_T0_LIKED_USER')}>
        <img src="images/misc/like.png" alt="Liked User" />
    </button>
);

export default Like;