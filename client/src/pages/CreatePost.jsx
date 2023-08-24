import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';
import { useAddPostData } from '../api/postApi';

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });

  const [isLoading, setLoading] = useState(false);
  const [generatingImg, setGeneratingImg] = useState(false);

  const {mutate: addPost} = useAddPostData()

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({...form, photo: `data:image/jpeg;base64,${data.photo}`});
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please enter a prompt');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(form.prompt && form.photo) {
      setLoading(true);

      try {
        addPost(form);
        navigate('/');
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a prompt and generate an image');
    }
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({...form, prompt: randomPrompt});
  }

  return (
    <Wrapper>
      <div>
        <h1>Create</h1>
          <p>
              Create images through DALL-E AI and share them with the community!
          </p>
      </div>
      <form className='form-main' onSubmit={handleSubmit}>
        <div className='form-container'> 
          <FormField 
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField 
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="Spongebob Squarepants in the Blair Witch Project"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className='image-preview-container'>
            {form.photo ? (
              <img 
              src={form.photo}
              alt={form.prompt}
              className='image-show'
              />
            ) : (
              <img 
              src={preview}
              alt="preview"
              className='image-preview'
              />
            )}
            {generatingImg && (
              <div className='loading-center-container'>
                <Loader center={true}/>
              </div>
            )}
          </div>
        </div>
        <div className='btn-container'>
            <button type='button' onClick={generateImage} disabled={generatingImg} className='generate-btn'>
              {generatingImg ? 'Generating...' : 'Generate'}
            </button>
        </div>
        <div className='submit-container'>
            <p className='submit-p'>Once you created the image that you love, you can share it with the community!</p>
            <button type='submit' disabled={isLoading} className='share-btn'>
              {isLoading ? 'Sharing...' : 'Share with the community'}
            </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default CreatePost;

const Wrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  h1 {
        font-weight: 800;
        color: #222328;
        font-size: 2rem;
        margin-bottom: 0;
    }

    p {
        margin-top: 0.5rem;
        color: #666e75;
        font-size: 1rem;
    }

    .form-main {
      margin-top: 4rem;
      max-width: 768px;
    }

    .form-container {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .image-preview-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16rem;
      height: 16rem;
      padding: 0.75rem;
      background: rgb(249 250 251);
      border-color: rgb(209 213 219);
      color: rgb(17 24 39);
      font-size: 0.875rem; 
      line-height: 1.25rem; 
      border-radius: 0.5rem;
    }

    .image-preview-container .image-show {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .image-preview-container .image-preview {
      width: 75%;
      height: 75%;
      object-fit: contain;
      opacity: 0.4;
    }

    .image-preview-container .loading-center-container {
      position: absolute;
      inset: 0;
      z-index: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,0.5);
      border-radius: 0.5rem;
    }

    .btn-container {
      margin-top: 1.25rem;
      display: flex;
      gap: 1.25rem;
    }

    .generate-btn {
      color: white;
      background-color: rgb(21 128 61);
      font-size: 0.875rem; 
      line-height: 1.25rem;
      font-weight: 500;
      border-color: white;
      border-radius: 0.375rem;
      width: 100%;
      padding: 0.50rem 1.25rem;
      cursor: pointer;
    }

  .submit-container {
      margin-top: 2.5rem;
  }

  .submit-container .submit-p {
    margin-top: 0.25rem;
    color: #666e75;
    font-size: 0.89rem;
  }

  .share-btn {
    margin-top: 0.5rem;
    color: white;
    border-color: white;
    text-decoration: none;
    font-family: 'Inter';
    background: #6469ff;
    padding: .5rem 1rem;
    border-radius: 5px;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    .generate-btn {
      width: auto;
    }
    .share-btn {
      width: auto;
    }
  }
`