import { useState } from "react";

import CommentList from "./list/CommentList";
import TextInput from "./ui/TextInput";
import Button from "./ui/Button";
import styled from "styled-components";
import data from '../data.json'
import { useNavigate, useParams } from "react-router-dom";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
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
const PostContainer = styled.div`
     padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
    `;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
    `;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
     `;
const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;

function PostViewPage() {
    const navigate = useNavigate()
    const { postId } = useParams()

    const post = data.find((item) => {
        return item.id == postId
    })

    const [comment, setComment] = useState('')

    return (
        <Wrapper>
            <Container>
                <button
                    type="button"
                    onClick={() => navigate(-1)}   // 한 페이지 뒤로
                    style={{ padding: 8, border: '1px solid #ccc', borderRadius: 6 }} // 최소 스타일(선택)
                >
                    ← 뒤로가기
                </button>
                
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value)
                    }}
                />
                <Button title='댓글 작성하기'
                    onClick={() => {
                        navigate('/')
                    }}
                />
            </Container>
        </Wrapper>
    )
}

export default PostViewPage