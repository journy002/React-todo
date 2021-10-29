import React from 'react'
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto; /* 페이지 중앙정렬 */
    margin-top: 96px;
    margin-bottom: 32px;

    width: 512px;
    height: 768px;

    position: relative; /*추후 박스 하단에 추가 버튼을 위치시키기 위한 설정*/
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0,0,0, 0.04)

    
`;

function TodoTemplate({children}) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate
