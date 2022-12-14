import React, { useContext } from 'react'
import { EditorContext } from '../../Context/EditorContext';
import './Preview.scss';
function Preview() {
    const { previewText } = useContext(EditorContext);

    return (
        <>
            <div id='preview' className='preview p-2 bg-white'
                dangerouslySetInnerHTML={
                    { __html: previewText, }
                }
            >
            </div>
        </>
    )
}

export default Preview