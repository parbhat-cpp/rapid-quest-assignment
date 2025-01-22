import FroalaEditor from 'react-froala-wysiwyg';
import { useRef, useState } from 'react';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import axios from 'axios';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Import all Froala Editor plugins;
import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
import 'froala-editor/js/plugins/align.min.js';

// Import a language file.
import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';

import 'font-awesome/css/font-awesome.css';
import 'froala-editor/js/third_party/font_awesome.min.js';

import { Button } from '@/components/ui/button';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { defaultEmailLayout } from '@/constants';
import toast from 'react-hot-toast';

const Create = () => {
  const [model, setModel] = useState(defaultEmailLayout);

  const editor = useRef<FroalaEditor>(null);

  const navigate = useNavigate();

  const handleModelChange = (event: any) => {
    setModel(event)
  }

  const handleBackBtn = () => navigate("/");

  const handleDownloadHtml = () => {
    const encodedHtml = encodeURIComponent(model);
    const dataUri = `data:text/html;charset=utf-8,${encodedHtml}`;

    const link = document.createElement('a');
    link.href = dataUri;
    link.download = 'output.html'; // File name for download

    link.click();
  }

  return (
    <>
      <div className='flex px-4 py-2 items-center justify-between'>
        <div className='flex items-center gap-3'>
          <FaArrowLeftLong className='cursor-pointer' onClick={handleBackBtn} />
          <p>
            Email Builder
          </p>
        </div>
        <div>
          <Button variant={'outline'} onClick={handleDownloadHtml}>
            Download
          </Button>
        </div>
      </div>
      <FroalaEditor
        ref={editor}
        model={model}
        config={{
          imageUpload: true,
          events: {
            'image.beforeUpload': function (images: Array<File>) {
              const editor: any = this;
              toast.success('Uploading Image. Please wait...');

              // Before image is uploaded
              const data: any = new FormData() as any;
              data.append('image', images[0]);

              axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/image/uploadImage`, data, {
                headers: {
                  'accept': 'application/json',
                  'Accept-Language': 'en-US,en;q=0.8',
                  'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
              }).then(res => {
                const response = res as any;
                editor!.image.insert(res.data.url, null, null, editor!.image.get());
              }).catch(err => {
                console.log(err);
              });
              return false;
            }
          }
        }}
        onModelChange={handleModelChange}
      />
      <div className='flex flex-col gap-4 p-4'>
        <h3 className='text-2xl'>Output Email</h3>
        <div className='border p-2 rounded-md'>
          <FroalaEditorView
            model={model}
          />
        </div>
      </div>
    </>
  )
}

export default Create
