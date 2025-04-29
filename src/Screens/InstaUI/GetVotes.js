import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import ControlFooter from "../../Components/ControlFooter";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const characterOptions = [
    {
        name: "Joe Goldberg – You",
        img: "https://akns-images.eonline.com/eol_images/Entire_Site/2025030/rs_1200x1200-250130080312-you2.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
        votePercentage: 58,
    },
    {
        name: "Berlin – Money Heist",
        img: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/02/07222512/featured-money-heist.jpeg",
        votePercentage: 22,
    },
    {
        name: "Tyler Durden – Fight Club",
        img: "https://i.redd.it/vo03g2nkemmd1.jpeg",
        votePercentage: 10,
    },
    {
        name: "Ragnar Lothbrok – Vikings",
        img: "https://preview.redd.it/what-alignment-is-ragnar-lothbrok-from-vikings-v0-hjg8nbg6t7pc1.jpeg?auto=webp&s=91c9f10ca0d87e5291346b009f0f93074819a347",
        votePercentage: 10,
    },
    {
        name: "Otis Milburn – Sex Education",
        img: "https://cdn.costumewall.com/wp-content/uploads/2019/08/otis-milburn.jpg",
        votePercentage: 3,
    },
    {
        name: "Walter White – Breaking Bad",
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/b51190101362045.5f1d68546ac50.jpg",
        votePercentage: 3,
    },
    {
        name: "Michael Scofield – Prison Break",
        img: "https://i.pinimg.com/736x/ac/f7/2f/acf72f3c8327e573a24d94f7c490d5e8.jpg",
        votePercentage: 2,
    },
    {
        name: "Sherlock Holmes – Sherlock",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Benedict_Cumberbatch_filming_Sherlock_cropped2.jpg",
        votePercentage: 1,
    },
    {
        name: "Dexter Morgan – Dexter",
        img: "https://m.media-amazon.com/images/M/MV5BM2YwZjUwOTktNGE5NS00ZDU0LTk4NWYtMWY2NWZmZjg3YWU4XkEyXkFqcGc@._V1_.jpg",
        votePercentage: 1,
    },
    {
        name: "Thomas Shelby – Peaky Blinders",
        img: "https://cdn.webshopapp.com/shops/268192/files/433182622/tommy-shelby.jpg",
        votePercentage: 0,
    }
];

const GetVotes = () => {
    const [selected, setSelected] = useState(null);

    return (
        <Container>
            <div className="main-content">
                <div className="back-control">
                    <ArrowBackIcon />
                    @nayakpenguin
                </div>
                <div className="question">Which character do I give vibes of?</div>
                <div className="desc">Which character gives off my energy? 👀 Cast your vote — might just flex it on my profile.</div>

                <div className="vote-options">
                    {characterOptions.map((char, index) => (
                        <div className="vote-option" key={index}>
                            <div className="current-votes">{char.votePercentage}% Votes {index == 0 ? "🎉🏆" : ""}</div>
                            <div className="img-holder">
                                <img src={char.img} alt={char.name} />
                            </div>

                            <div className="right">
                                <div className="name">{char.name}</div>
                                <div
                                    className={`vote-btn ${selected === index ? "selected" : "trans"}`}
                                    onClick={() => setSelected(index)}
                                >
                                    {selected === index ? "Voted" : "Vote"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default GetVotes

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #000;

    margin-bottom: 64px;

    /* padding-bottom: 100px; */

    /* background-size: cover; */
    /* background-repeat: no-repeat; */
    /* background-position: center; */
    /* background-attachment: fixed; */

    padding: 30px;

    display: flex;  
    flex-direction: column;
    align-items: center;

    .main-content{
        max-width: 500px;
        padding-top: 30px;

        position: relative;
        
        .back-control{
            position: fixed;
            top: 0px;
            left: 0px;

            border-bottom: 1px solid #313231;

            height: 60px;
            width: 100vw;

            display: flex;
            align-items: center;
    
            font-size: 0.9rem;
            font-weight: 500;

            color: whitesmoke;

            padding: 0 30px;
    
            svg{
                font-size: 1.25rem;
                margin-right: 15px;
            }
    
            margin-bottom: 10px;

            background-color: black;
        }
        
        .question{
            font-size: 1.25rem;
            margin-top: 20px;
            font-weight: 500;
        }

        .desc{
            margin-top: 10px;
            font-weight: 200;
            font-size: 0.85rem;
        }

        .vote-options{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 50px;
            
            .vote-option{
                width: calc(50% - 5px);
                padding: 10px;

                background-color: #363636;
                font-weight: 500;
                text-align: center;
                border-radius: 10px;
                color: #e5e5e5;
                margin-bottom: 20px;

                display: flex; 
                align-items: center;
                justify-content: center;
                flex-direction: column;

                position: relative;

                .img-holder{
                    position: relative;
                    aspect-ratio: 1/1;
                    overflow: hidden;
                    display: grid;
                    place-items: center;
                    border-radius: 10px;

                    img{
                        /* display: none; */
                        width: 100%;
                        height: 100%;
                    }
                }

                .current-votes{
                    position: absolute;
                    background-color: #e2e2a6;
                    border: 1.5px solid white;
                    top: -7.5px;
                    left: -7.5px;
                    border-radius: 30px;
                    z-index: 10;
                    
                    height: 30px;
                    padding: 0 10px;
                    color: #333;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.65rem;
                }

                .right{
                    width: 100%;
                    padding: 10px;
                    .name{
                        text-align: left;
                        color: #e5e5e5;
                        font-size: 0.85rem;
                        font-weight: 600;
                        margin-bottom: 10px;
                    }

                    .vote-btn{
                        width: 100%;
                        font-size: 0.85rem;
                        padding: 10px 15px;
                        background-color: #0095f6;
                        border: 1px solid #0095f6;
                        border-radius: 10px;
                        text-align: center;
                    }

                    .trans{
                        background-color: transparent;
                        border: 1px solid rgb(119, 118, 118);
                    }
                }
            }
        }
    }
`