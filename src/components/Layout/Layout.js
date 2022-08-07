import { useEffect } from 'react'
import Editer from '../Editer/Editer'
import Preview from '../Preview/Preview'
import './Layout.scss'

function Layout() {
    let editor, preview;


    function resize() {
        if (window.innerWidth >= 768) {
            editor = document.querySelector('.editor-w')
            preview = document.querySelector('.preview-w')

            editor.classList.remove('border-bottom')
            editor.classList.add('border-end')

            preview.classList.remove('border-top')
            preview.classList.add('border-start')
        }
        else {
            editor = document.querySelector('.editor-w')
            preview = document.querySelector('.preview-w')

            editor.classList.remove('border-end')
            editor.classList.add('border-bottom')

            preview.classList.remove('border-start')
            preview.classList.add('border-top')
        }
    }

    useEffect(() => {
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container-fluid layout d-flex flex-column p-2 bg-dark bg-opacity-10">
            <div className="row m-0 border border-success text-center">
                <h1>Markdown Previewer <sup><span style={{ 'fontSize': '15px' }}><i>-by Muhammad Naeem</i></span></sup></h1>
            </div>

            <div className="row m-0 flex-fill">
                <div
                    className="col-12 col-md-6 py-1 pe-md-1 p-0 h-40 d-flex   border-end border-2 border-success editor-w"
                >
                    <div id='editor-wrapper' className=' flex-fill d-flex'>
                        <Editer />
                    </div>
                </div>
                <div className="col-12 col-md-6 py-md-1 ps-md-1 h-md-50 p-0 border-start border-2 border-success  d-flex preview-w">
                    <div id='preview-wrapper' className='flex-fill overflow-auto pt-1'>
                        <Preview />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout