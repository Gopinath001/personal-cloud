import React from "react";
import "./PageHolder.css";
import FileManager from "./../FileManager/FileManager";
import PageHeader from "./../PageHeader/PageHeader";

class PageHolder extends React.Component {
    constructor(){
        super();
        this.state = {
            page:"filemanager"
        }
        
    }

    getPage(){
    if(this.state.page === "filemanager"){
        return(
            <FileManager/>
        );
    }
    }

    render(){
        return (
        <div className="page-holder">
            <PageHeader />
                <div className="actual-page">
                    <div className="title-holder">
                        <div className="page-title">
                        </div>
                    </div>
                    {this.getPage()}
            </div>
        </div>
        )
    }

}


export default PageHolder;