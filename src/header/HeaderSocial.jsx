import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import {AiOutlineLinkedin} from "react-icons/ai"


const HeaderSocial = () => {
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/nese-ilhan-0343b818a" > <AiOutlineLinkedin size={40}/>  </a>
            <a href="https://github.com/neseilhan" > <VscGithubAlt size={40}/>  </a>

        </div>
    )

}
export default HeaderSocial