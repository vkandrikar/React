import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Layout = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    text-align: center;
`;

export default function PortalsSample({fnToggelPopup}) {
    function fnCloseMe() {
        fnToggelPopup();
    }

    return ReactDOM.createPortal(
        <Layout>
            <h1>this is popup</h1>
            <button onClick={fnCloseMe}>Close</button>
        </Layout>,
        document.getElementById('popupCont')
    )
}