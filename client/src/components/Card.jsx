import styled from 'styled-components';
import {download} from '../assets';
import {downloadImage} from '../utils';

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <Wrapper>
      <div className='card-container'>
        <img className='card-img' src={photo} alt={prompt}/>
        <div className='card-info'>
          <p className='card-prompt'>{prompt}</p>
          <div className='card-footer-container'>
            <div className='card-footer'>
              <div className='card-avatar'>
                {name[0]}
              </div>
              <p className='card-name'>{name}</p>
            </div>
            <button type='button' onClick={() => downloadImage(_id, photo)} className='card-btn'>
              <img src={download} alt='download' className='card-btn-img'/>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Card;

const Wrapper = styled.section`
  margin-top: 2rem;

  .card-container {
    border-radius: 0.75rem;
    position: relative;
    box-shadow: 0 3px 10px rgb(0,0,0,0.2);
    transition: 0.3s ease-in-out all;
  }
  
  .card-container .card-info {
    display: none;
    transition: 0.3s ease-in-out all;
  }

  .card-container:hover {
    box-shadow: 4.0px 8.0px 8.0px rgba(0,0,0,0.38);
  }

  .card-container:hover .card-info {
      display: flex;
      flex-direction: column;
      max-height: 94.5%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #10131f;
      margin: 0.5rem;
      padding: 1rem;
      border-radius: 0.375rem;
  }

  .card-img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.75rem;
  }

  .card-container .card-info .card-prompt {
    color: white;
    font-size: 1rem; 
    line-height: 1.5rem;
    overflow-y: auto;
  }

  .card-footer-container {
    margin-top: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  .card-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .card-avatar {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 9999px;
    object-fit: cover;
    background-color: rgb(21 128 61);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 700;
  }

  .card-name {
    color: white;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .card-btn {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border: transparent;
    background: transparent;
  }

  .card-btn-img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    filter: invert(100%);
    cursor: pointer;
  }

 
`