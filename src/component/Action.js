import React from "react";
import Rewind from "./action/Rewind";
import Dislike from "./action/Dislike";
import Like from "./action/Like";
import Superlike from "./action/Superlike";

const Action = ({ person, modifySuperficialChoices }) => (
    <div id="action">
        <Rewind userId= {person.id} />
        <Dislike
            userId={person.id}
            modifySuperificialChoices={modifySuperficialChoices}
        />
        <Like 
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />

        <Superlike
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />

    </div>
);

export default Action;