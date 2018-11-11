import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { compose, withHandlers, setPropTypes } from 'recompose';
import { firebaseConnect } from 'react-redux-firebase';
import Dropzone from 'react-dropzone';
import './Uploader.css'
// Path within Database for metadata (also used for file Storage path)
const filesPath = 'uploadedFiles';

const handlers = {
    onFilesDrop: props => files => {
        props.firebase.uploadFiles(filesPath, files);
        let storage = props.firebase.storage();
        let storageRef = storage.ref();
        storageRef.child(`uploadedFiles/${files[0].name}`).getDownloadURL().then(function(url) {
            let today = new Date();
            let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() +" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
            props.firebase.push('/messages',{text: url, sender:props.profile, from_to:props.profile.email+"-"+props.users.email,time:date  })
        });
        return true;
    }
};

const enhancerPropsTypes = {
    firebase: PropTypes.object.isRequired
};
const mapStateToProps =(state) =>{

    if(state.chat.user!==undefined)
        return{
            users: state.chat.user
        };
    else
    {
        return{
            users: state.chat.defaultuser
        };
    }
}
const enhance = compose(
    firebaseConnect([{ path: filesPath }]),
    connect(mapStateToProps),
    connect(({ firebase: { data } }) => ({
        uploadedFiles: data[filesPath]
    })),
    connect(

        ({ firebase }) => ({
            profile: firebase.profile,
        })
    ),
    setPropTypes(enhancerPropsTypes),
    withHandlers(handlers)
);
class Uploader extends Component {

    render(){
        return(
            <div>
                <Dropzone className='dropzone' onDrop={this.props.onFilesDrop} multiple={false} >
                    <div>Drag and drop files here or click to select</div>
                </Dropzone>
            </div>
        )
    }

}

Uploader.propTypes = {
    firebase: PropTypes.object.isRequired,
    uploadedFiles: PropTypes.object
};

// Apply enhancer to component on export
export default enhance(Uploader);