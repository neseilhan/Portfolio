import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import {AiOutlineLinkedin} from "react-icons/ai"


const HeaderSocials = () => {
    return(
        <div className="header-social">
            <a href="https://linkedin.com"> <AiOutlineLinkedin/>  </a>
            <a href="https://github.com" target="_blank"> <VscGithubAlt/>  </a>

        </div>
    )

}
export default HeaderSocials