import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input, Container, Row, Col, Button} from "reactstrap";
import axios from "axios";
import CategoryList from "../post/CategoriesList"
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom"
import "./WritePost.css";
import { marker, codeDesigner } from "../common/highlighter";



const WritePost = (props) => {

    
    const history = useNavigate();
    let [postTitle, setPostTitle] = useState("");
    let [postDescription, setPostDescription] = useState("");
    let [tags, setTags] = useState("");
    let [language, setLanguage] = useState("javascript");
    let [postId, setPostId] = useState("");
    let [isSolved, setIsSolved] = useState("solved");
    let [isInterview, setIsInterview] = useState(false);
    const [problemStatement, setProblemStatement] = useState("");
    const [displayPost, setDisplayPost] = useState("");
    const [displayProblem, setDisplayProblem] = useState("");

    const values = useLocation();
    
    const handlePostSubmit = async (e, redirect = false) =>{
        try {

            if(postId){
            let response = await axios.put(`${process.env.REACT_APP_API_URL}/posts/${postId}`, { 
                title: postTitle, 
                body : postDescription, 
                tags: tags.split(","), 
                programmingLanguage : language,
                problemStatement:problemStatement,
                type : isSolved,
                isInterview : isInterview
                });
                console.log('Returned data:', response);
                // if(response.status == 200 && redirect){
                //     let newTitle = postTitle.replace(/ /g,"-");
                //     newTitle = newTitle.charAt(0).toLowerCase() + newTitle.slice(1);
                //     history.push(`/post/${postId}/${newTitle}`, {id : postId});
                // }
            } 
            
            if(redirect && !postId){
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/posts`, { 
                title: postTitle, 
                body : postDescription, 
                tags: tags.split(","), 
                programmingLanguage : language,
                problemStatement:problemStatement,
                type : isSolved ,
                isInterview : isInterview
                });
                console.log('Returned data:', response);
            }   
          } catch (e) {
            console.log(`Axios request failed: ${e}`);
          }
    }

    const handlePostSubmitServer = async (e, redirect = false) =>{
        try {
            if(postId){
            let response = await axios.post(`https://www.api.coderlogs.com/posts`, { 
                title: postTitle, 
                body : postDescription, 
                tags: tags.split(","), 
                programmingLanguage : language,
                problemStatement:problemStatement,
                type : isSolved,
                isInterview : isInterview
                });
                console.log('Returned data:', response);
                
            } 
          } catch (e) {
            console.log(`Axios request failed: ${e}`);
          }
    }

    
    useEffect(() =>{
        setDisplayPost(marker(postDescription));
        codeDesigner()
    },[postDescription]);
    
    useEffect(() =>{
        setDisplayProblem(marker(problemStatement));
    },[problemStatement]);


    useEffect(() =>{
        console.log('values', values)
        // console.log(props.location.state, props.location.state.id)
        if(values.state !="undefined" &&  values.state && values.state.id){
            getPostDetails(values.state.id);
            setPostId(values.state.id)
        }
    },[]);

    const getPostDetails = async(postId) => {   
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${postId}`);
            // setPost(response.data);
            setPostTitle(response.data.title);
            setPostDescription(response.data.body);
            setTags(response.data.tags.toString());
            setLanguage(response.data.programmingLanguage)
            setProblemStatement(response.data.problemStatement);
            setIsSolved(response.body.type);
          } catch (e) {
            console.log(`Axios request failed: ${e}`);
          }
      }

  return (
    <div style={{backgroundColor : "#efefef"}}>
        <Container fluid>
            <Row>
                <Col md="6">
                <div className="sticky-top">
                    <FormGroup>
                            <Label for="exampleText">Problem title</Label>
                            <Input 
                                type="text" 
                                value={postTitle}
                                onChange={e => {setPostTitle(e.target.value); handlePostSubmit(e, false)}}
                                // onKeyDown={handlePostSubmit}
                            />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText">Problem statement</Label>
                        <Input 
                            type="textarea" 
                            style={{height : "200px"}}
                            name="text" 
                            id="exampleText" 
                            defaultValue={problemStatement}
                            onKeyUp={e => {setProblemStatement(e.target.value); handlePostSubmit(e, false)}}
                            // onKeyDown={handlePostSubmit}
                        />
                    </FormGroup>
                        
                    <FormGroup>
                        <Label for="exampleText">Solution</Label>
                        <Input 
                            type="textarea" 
                            style={{height : "400px"}}
                            name="text" 
                            id="postDesc" 
                            defaultValue={postDescription}
                            onKeyUp={e => {setPostDescription(e.target.value); handlePostSubmit(e, false)}}
                            // onKeyDown={e => handlePostSubmit(e, false)}
                        />
                    </FormGroup>

                    <FormGroup>
                            <Label for="exampleText">Tags</Label>
                            <Input 
                                type="text" 
                                value={tags}
                                onChange={e => {setTags(e.target.value); handlePostSubmit(e, false)}}
                                // onKeyDown={handlePostSubmit}
                            />
                    </FormGroup>

                    <Row>
                        <Col md="4">
                        <FormGroup tag="fieldset">
                        <legend>Choose category</legend>
                        {
                            CategoryList.map((cat, ind) =>{
                                return  <FormGroup check>
                                <Label check>
                                    <Input 
                                        type="radio" 
                                        name="language" 
                                        value={language} 
                                        checked={language == cat.key ? true : false}
                                        onClick={e => setLanguage(cat.key)}
                                    />{' '}
                                    {cat.name}
                                </Label>
                            </FormGroup>
                            })
                        }
                       

                        
                    </FormGroup>
                        </Col>
                        <Col md="4">
                        <FormGroup >
                        <legend>Type</legend>
                            
                        <Input 
                            type="select"
                            name="select" 
                            id="exampleSelect"
                            value={isSolved}
                            onChange={e => setIsSolved(e.target.value)}
                            >
                            <option value="solved">Solved</option>
                            <option value="unsolved">UnSolved</option>
                        
                        </Input>                           
                        </FormGroup>
                        </Col>



                        <Col md="4">
                        <FormGroup >
                        <legend>Is interview post</legend>
                            
                        <Input 
                            type="select"
                            name="select" 
                            id="exampleSelect"
                            value={isInterview}
                            onChange={e => setIsInterview(e.target.value)}
                            >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        
                        </Input>                           
                        </FormGroup>
                        </Col>
                    </Row>

                   </div>
                </Col>

                <Col md="6">
                    <div id='markdown'>
                    <h1>{postTitle}</h1>
                    </div>

                    <br />
                    <div
                        dangerouslySetInnerHTML={{ __html: displayProblem.replace(/\n/g, '<br />')}}>
                    </div>
                    <br />
                    <div id='target' 
                        style={{minHeight: "300px", fontSize: "20px"}}
                        dangerouslySetInnerHTML={{ __html: displayPost.replace(/\n/g, '<br />')}}>
                    </div>
                </Col>

                

            </Row>
            <Button color="success" className="btn pull-right" onClick={e => handlePostSubmit(e, true)}>Publish</Button> {"    "}
            <Button color="success" className="btn pull-right" onClick={e => handlePostSubmitServer(e, true)}>Publish to server</Button>
            </Container>
    </div>
  );
}

export default WritePost;