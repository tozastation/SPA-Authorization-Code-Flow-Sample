import { IHandler } from "../data/oauth_props";
import * as React from "react";

export const OAuth: React.SFC<IHandler> = ({onClick}) => {
    return (
            <button type="submit" onClick={onClick}>
                Spotifyアカウントでサインイン
            </button>
    );
}