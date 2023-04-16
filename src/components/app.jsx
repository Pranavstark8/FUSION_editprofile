import React from "react";
import ProfilePic from "./profilepic";
import UserName from "./username";
import EmailId from "./gmail";
import BioForm from "./bio";
import Friends from "./friends";
import "../profile";

function App(){
    return <div>
    <ProfilePic />
    <Friends />
    <UserName />
    <EmailId />
    <BioForm />



    </div>;
}

export default App;

