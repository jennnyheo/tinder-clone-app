import React from "react";
import Logo from "./Logo";

const Header = () => (
    <header>
        <div className="fl">
            <button type="button">
                <img src="/images/misc/setting.png" alt="User Settings" />
            </button>
        </div>

        <div className="fl">
            <Logo />
        </div>

        <div className="fl">
            <button type="button">
                <img src="/images/misc/message.png" alt="View Messaages" />
            </button>
        </div>


    </header>
);


export default Header;