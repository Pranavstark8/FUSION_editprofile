import React from "react";
import ProfilePic from "./profilepic";
import UserName from "./username";
import Gmail from "./gmail";
import BioForm from "./bio";
import Friends from "./friends";
import "../profile";

function App(){
    return <div>
    <ProfilePic />
    <Friends />
    <UserName />
    <Gmail />
    <BioForm />



    </div>;
}

export default App;

