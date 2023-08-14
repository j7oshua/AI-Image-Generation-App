import { useState } from 'react';
import { styled } from 'styled-components';
import { Loader, Card, FormField } from '../components';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/postApi';

const RenderCards = ({data, title}) => {
    if (data?.length > 0) { 
        return data.map((post) => <Card key={post._id} {...post}/>)
    }

    return (
        <h2>{title}</h2>
    )
}

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const {isLoading, data} = useQuery({
        queryKey: ['post'],
        queryFn: () => getPosts()
    });

    return (
        <Wrapper>
            <div>
                <h1>Community Showcase</h1>
                <p>
                    Browse through this collection of stunning images generated by Dall-E AI
                </p>
            </div>
            <div className='form-field'>
                <FormField />
                {isLoading ? <Loader center/> : 
                <>
                    {searchText && <h2>Showing results for <span>{searchText}</span></h2>}
                    <div className='card-main'>
                        {searchText ? (
                            <RenderCards data={data} title="No search results found"/>
                        ) : (
                            <RenderCards data={data} title="No posts found"/>
                        )}
                    </div>
                </>
                }
            </div>
        </Wrapper>
    )
}
export default Home

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

    span {
        color: #222328;
    }

    .form-field {
        margin-top: 1rem;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .form-field h2 {
        color: #666e75;
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin-bottom: 0.75rem;
    }

    .card-main {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 0.75rem;
    }

    .card-main h2 {
        margin-top: 1.5rem;
        font-weight: 700;
        color: #6449ff;
        font-size: 1.25rem;
        line-height: 1.75rem;
        text-transform: uppercase;
    }

    @media screen and (min-width: 768px) {
        .card-main {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
  }

    @media screen and (min-width: 1120px) {
        .card-main {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
  }
`