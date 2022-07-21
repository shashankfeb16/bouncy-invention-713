import React from 'react';
import { Box, Container, Flex, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import Iframe from 'react-iframe'
import { useState } from 'react';

const Videos = () => {
    const [newid, SetNewid] = useState("ISIwuGLX1e0");
    // const handleClick = (e)=>{
    //     const val = e.target.value;
    //     SetNewid(val);
    // }
    const data = [{
        id: "ISIwuGLX1e0",
        imageurl: "https://img.youtube.com/vi/ISIwuGLX1e0/mqdefault.jpg",
        heading: "Ben Stokes' ODI Career: A Timeline I Cricket.com",
        des: "England's World Cup winner Ben Stokes will retire from one-day international cricket after Tuesday's series opener against South Africa in Durham. Here's looking back at his ODI career which started way back in August 2011."
    },
    {
        id: "AzStAWhTCbw",
        imageurl: "https://img.youtube.com/vi/AzStAWhTCbw/mqdefault.jpg",
        heading: "The art of reverse-swing, cross seam & the Dukes ball I Darren Gough's Bowling Clinic I Cricket.com",
        des: "In this CDC Special, we get a bowling masterclass from Former England fast-bowler, Darren Gough, who talks about reverse-swing, conventional swing and other tricks pacers use. Also listen in to what Gough said about Bhuvi, Shami and Bumrah's skillsets with the ball in hand."
    },
    {
        id: "ykeLDSfpHLA",
        imageurl: "https://img.youtube.com/vi/ykeLDSfpHLA/mqdefault.jpg",
        heading: "We haven't played our best cricket in this white-ball leg ENG vs IND  Jos Buttler  Presser",
        des: "Watch Jos Buttler's full press conference post the third ODI against India at Old Trafford, Manchester."
    },
    {
        id: "vaarOjNfMQQ",
        imageurl: "https://img.youtube.com/vi/vaarOjNfMQQ/mqdefault.jpg",
        heading: "Give Rishabh Pant wings and he will fly, let him bat higher in ODIs too I ENG vs IND I 3rd ODI Review ft. Gough",
        des: "We reflect what happened in the 3rd ODI and talk about the what lies ahead for both teams in the review with Darren Gough. Watch this full video now."
    },
    {
        id: "Zcww_C5DGQY",
        imageurl: "https://img.youtube.com/vi/Zcww_C5DGQY/mqdefault.jpg",
        heading: "Cricket.com DECODED I Episode 39 I What makes Bhuvneshwar Kumar so potent?",
        des: "At 32, Bhuvneshwar Kumar still stands tall as one of India’s best white-ball bowler. But what makes Bhuvi so good? We tell you exactly that on Decoded today!"
    },
    {
        id: "zlRva2aIfks",
        imageurl: "https://img.youtube.com/vi/zlRva2aIfks/mqdefault.jpg",
        heading: "RAW-VISION! Virat Kohli coaching Ishan Kishan at the nets at Old Trafford & more I Cricket.com",
        des: "Watch this latest footage of Virat Kohli and the rest of the team training before the 3rd ODI at Old Trafford, Manchester."
    },
    {
        id: "etaOEN85l90",
        imageurl: "https://img.youtube.com/vi/oDClImrmV9o/mqdefault.jpg",
        heading: "I have had to leave out my good friend I My all-time England ODI XI I Darren Gough I Cricket.com",
    },
    {
        id: "DEFaLBmohkA",
        imageurl: "https://img.youtube.com/vi/etaOEN85l90/mqdefault.jpg",
        heading: "Should Virat take a page out of Sachin's SCG knock?",
        des: "Watch Jos Buttler's full press conference post the third ODI against India at Old Trafford, Manchester."
    },
    {
        id: "tEjnMcMdlG4",
        imageurl: "https://img.youtube.com/vi/DEFaLBmohkA/mqdefault.jpg",
        heading: "We haven't played our best cricket in this white-ball leg ENG vs IND  Jos Buttler  Presser",
        des: "Watch Jos Buttler's full press conference post the third ODI against India at Old Trafford, Manchester."
    },
    {
        id: "ykeLDSfpHLA",
        imageurl: "https://img.youtube.com/vi/ykeLDSfpHLA/mqdefault.jpg",
        heading: "We haven't played our best cricket in this white-ball leg ENG vs IND  Jos Buttler  Presser",
        des: "Watch Jos Buttler's full press conference post the third ODI against India at Old Trafford, Manchester."
    }

    ]
    console.log(data);
    console.log(newid)
    return (
        <Box>
            <Flex justifyContent={"center"}>
                <Iframe url={`https://www.youtube.com/embed/${newid}`} width='900px' height='450px' display='initial' position='relative'></Iframe>
            </Flex>
            <br />
            <Box  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} width={"80%"} margin={"auto"}>
                {data.map((el) => {
                    return <>
                        <Container centerContent>
                            <Flex key={el.id} value={el.id} onClick={() => SetNewid(el.id)} width={["425px", "425px", "850px"]}>
                                <Image src={el.imageurl}></Image>
                                <VStack>
                                    <Text>{el.heading}</Text>
                                    <Text >{el.des}</Text>
                                </VStack>
                            </Flex>
                        </Container>
                        <br></br>
                    </>
                })}
            </Box>
        </Box>
    )
}

export default Videos