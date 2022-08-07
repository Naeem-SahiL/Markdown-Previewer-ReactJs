import { useContext } from 'react';
import { EditorContext } from '../../Context/EditorContext';
import './Editor.scss';

function Editer() {
    // const [editorTxt, setEditorTxt] = useState('');
    const { editorTxt, setEditorTxt } = useContext(EditorContext);

    const handleChange = (e) => {
        setEditorTxt(e.target.value);

    }

    return (
        <div className="flex-fill m-0 p-1 d-flex editor-wrapper">
            <div className="txt-area flex-fill d-flex flex-column">
                <textarea
                    name="editer"
                    id="editor"
                    className='p-2 w-100 border border-success border-2'
                    onChange={handleChange}
                    style={{ 'resize': 'none' }}
                    value={editorTxt}
                    autoFocus={true}

                />
                <div className="btns mt-1 pe-1 d-flex justify-content-end flex-fill">
                    <button className='btn btn-sm btn-outline-danger align-self-end'
                        onClick={() => setEditorTxt('')}
                    >Clear</button>
                </div>
            </div>
        </div>
    )
}

export default Editer