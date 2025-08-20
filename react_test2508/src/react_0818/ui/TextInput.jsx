import styled from 'styled-components'

const StyleTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
        `}
        padding:16px;
        front-size: 16px;
        line-height: 20px;
        `;


function TextInput(props) {
    const {height, value, onChange} = props

    return(
        <StyleTextarea
        height={height}
        value={value}
        onChange={onChange}
        />
    )
}

export default TextInput