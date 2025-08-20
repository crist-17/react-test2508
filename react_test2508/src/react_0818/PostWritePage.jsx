import { useState } from "react";

import TextInput from "./ui/TextInput";
import Button from "./ui/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   justify-content: flex-start;

    `;
    const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
        margin: 0 auto;
    }
     `;

function PostWritePage(props) {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <Wrapper>
            <Container>
                <TextInput height={20}
                            value={title}
                            onChange={(event)=> {
                                setTitle(event.target.value)
                            }}
                            />
                <Button title='글 작성하기'
                onClick={()=> {
                    navigate(-1)
                }}
                />
            </Container>
        </Wrapper>
    )
}

export default PostWritePage