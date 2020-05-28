import React from "react";
import {GithubIcon, TwitterIcon} from "../icons";
import {GITHUB_URL, TWITTER_URL} from "../../common/constants";

const Header: React.FC = () => {
    return (
        <header className="header">
            <a href="/">
                <img src="../../../logo.svg" alt="logo"/>
            </a>
            <div className="header__social-icons">
                <a href={TWITTER_URL} target="_blank"
                   rel="noopener noreferrer">
                    <TwitterIcon/>
                </a>
                <a href={GITHUB_URL} target="_blank"
                   rel="noopener noreferrer">
                    <GithubIcon/>
                </a>
            </div>
        </header>
    );
};

export default Header;
