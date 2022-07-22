import { Box, Flex, Text, Image, Button, ButtonGroup, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const Schedule = () => {
    const data1 = [{
        id: 1,
        type: "ODI",
        match: "1st ODI",
        con1: "WI",
        con2: "India",
        loc: "Port of Spain",
        date: `${22} july`,
        time: `${7} pm IST`,
        img1: "https://images.cricket.com/teams/9_flag_safari.png",
        img2: "https://images.cricket.com/teams/4_flag_safari.png",
        sort: "Upcoming"
    },
    {
        id: 2,
        type: "ODI",
        match: "2st ODI",
        con1: "WI",
        con2: "India",
        loc: "Port of Spain",
        date: `${24} july`,
        time: `${7} pm IST`,
        img1: "https://images.cricket.com/teams/9_flag_safari.png",
        img2: "https://images.cricket.com/teams/4_flag_safari.png",
        sort: "Upcoming"
    },
    {
        id: 3,
        type: "ODI",
        match: "3st ODI",
        con1: "WI",
        con2: "India",
        loc: "Port of Spain",
        date: `${27} july`,
        time: `${7} pm IST`,
        img1: "https://images.cricket.com/teams/9_flag_safari.png",
        img2: "https://images.cricket.com/teams/4_flag_safari.png",
        sort: "Live"
    }];

    const data2 = [{
        id: 1,
        type: "T20",
        match: "1st T20",
        con1: "IRE",
        con2: "NZ",
        loc: "Stormont",
        date: `${20} july`,
        time: `${8} pm IST`,
        img1: "https://images.cricket.com/teams/13_flag_safari.png",
        img2: "https://images.cricket.com/teams/5_flag_safari.png",
        sort: "Upcoming"
    },
    {
        id: 2,
        type: "T20",
        match: "2st T20",
        con1: "IRE",
        con2: "NZ",
        loc: "Stormont",
        date: `${22} july`,
        time: `${8} pm IST`,
        img1: "https://images.cricket.com/teams/13_flag_safari.png",
        img2: "https://images.cricket.com/teams/5_flag_safari.png",
        sort: "Live"
    }]

    const data3 = [{
        id: 1,
        type: "T20",
        match: "1st T20",
        con1: "EN-W",
        con2: "SA-W",
        loc: "Chelmsford",
        date: `${21} july`,
        time: `${7} pm IST`,
        img1: "https://images.cricket.com/teams/1121_flag_safari.png",
        img2: "https://images.cricket.com/teams/1131_flag_safari.png",
        sort: "Upcoming"
    },
    {
        id: 2,
        type: "T20",
        match: "2st T20",
        con1: "EN-W",
        con2: "SA-W",
        loc: "New Road",
        date: `${23} july`,
        time: `${11} pm IST`,
        img1: "https://images.cricket.com/teams/1121_flag_safari.png",
        img2: "https://images.cricket.com/teams/1131_flag_safari.png",
        sort: "Live"
    },
    {
        id: 3,
        type: "T20",
        match: "3st T20",
        con1: "EN-W",
        con2: "SA-W",
        loc: "Derby",
        date: `${25} july`,
        time: `${7} pm IST`,
        img1: "https://images.cricket.com/teams/1121_flag_safari.png",
        img2: "https://images.cricket.com/teams/1131_flag_safari.png",
        sort: "Result"
    }];

    const data4 = [
        {
            id: 1,
            type: "ODI",
            match: "1st ODI",
            con1: "ENG",
            con2: "SA",
            loc: "Manchester",
            date: `${22} july`,
            time: `${5} pm IST`,
            img1: "https://images.cricket.com/teams/1121_flag_safari.png",
            img2: "https://images.cricket.com/teams/1131_flag_safari.png",
            sort: "Upcoming"
        },
        {
            id: 2,
            type: "ODI",
            match: "2nd ODI",
            con1: "ENG",
            con2: "SA",
            loc: "Leeds",
            date: `${24} july`,
            time: `${3} pm IST`,
            img1: "https://images.cricket.com/teams/1121_flag_safari.png",
            img2: "https://images.cricket.com/teams/1131_flag_safari.png",
            sort: "Upcoming"
        },
        {
            id: 3,
            type: "ODI",
            match: "3rd ODI",
            con1: "ENG",
            con2: "SA",
            loc: "Bristol",
            date: `${27} july`,
            time: `${11} pm IST`,
            img1: "https://images.cricket.com/teams/1121_flag_safari.png",
            img2: "https://images.cricket.com/teams/1131_flag_safari.png",
            sort: "Upcoming"
        }
    ]

    const data5 = [{
        id: 1,
        type: "T20",
        match: "1st T20",
        con1: "ZIM",
        con2: "BAN",
        loc: "Harare",
        date: `${30} july`,
        time: `${7} pm IST`,
        img1: "https://images.cricket.com/teams/10_flag_safari.png",
        img2: "https://images.cricket.com/teams/2_flag_safari.png",
        sort: "Result"
    },
    {
        id: 2,
        type: "T20",
        match: "2st T20",
        con1: "ZIM",
        con2: "BAN",
        loc: "Harare",
        date: `${31} july`,
        time: `${11} pm IST`,
        img1: "https://images.cricket.com/teams/10_flag_safari.png",
        img2: "https://images.cricket.com/teams/2_flag_safari.png",
        sort: "Result"
    },
    {
        id: 3,
        type: "T20",
        match: "3st T20",
        con1: "ZIM",
        con2: "BAN",
        loc: "Harare",
        date: `${2} August`,
        time: `${7} pm IST`,
        img1: "https://images.cricket.com/teams/10_flag_safari.png",
        img2: "https://images.cricket.com/teams/2_flag_safari.png",
        sort: "Result"
    }];

    const [items1, setItems1] = useState(data1);
    const [items2, setItems2] = useState(data2);
    const [items3, setItems3] = useState(data3);
    const [items4,setItems4] = useState(data4);
    const [items5,setItems5] = useState(data5);



    const filterItem1 = (schedule) => {
        const updated_data1 = data1.filter((curele) => {
            return curele.sort === schedule
        });
        setItems1(updated_data1);
    }
    const filterItem2 = (schedule) => {
        const updated_data2 = data2.filter((curele) => {
            return curele.sort === schedule
        });
        setItems2(updated_data2);
    }
    const filterItem3 = (schedule) => {
        const updated_data3 = data3.filter((curele) => {
            return curele.sort === schedule
        });
        setItems3(updated_data3);
    }
    const filterItem4 = (schedule)=>{
        const updated_data4 = data4.filter((curele)=>{
            return curele.sort===schedule
        });
        setItems4(updated_data4);
    }

    const filterItem5 = (schedule)=>{
        const updated_data5 = data5.filter((curele)=>{
            return curele.sort===schedule
        });
        setItems5(updated_data5);
    }


    return (
        // <Flex justifyContent={"space-around"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
        //     <Box  width={"25%"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
        //         <Flex justifyContent={"space-around"}>
        //             <Text backgroundColor={"gray"} color={"white"} borderRadius={"4px"} fontSize="xs" width={"10%"}>ODI</Text>
        //             <Text>1st Odi</Text>
        //         </Flex>
        //         <Text>Port of Spain</Text>
        //         <Flex justifyContent={"space-around"}>
        //             <Image src="https://images.cricket.com/teams/9_flag_safari.png" boxSize={"40px"}></Image>
        //             <Text>WI</Text>
        //             <Text>22 july</Text>
        //         </Flex>
        //         <Flex justifyContent={"space-around"}>
        //             <Image src="https://images.cricket.com/teams/4_flag_safari.png" boxSize={"40px"}></Image>
        //             <Text>Ind</Text>
        //             <Text>7 pm ist</Text>
        //         </Flex>

        //     </Box>
        //     <Box boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} width={"25%"}>
        //         <Flex  justifyContent={"space-around"}>
        //         <Text backgroundColor={"gray"} color={"white"} borderRadius={"4px"} fontSize="xs" width={"10%"}>ODI</Text>
        //             <Text>1st Odi</Text>
        //         </Flex>
        //         <Text>Port of Spain</Text>
        //         <Flex justifyContent={"space-around"}>
        //             <Image src="https://images.cricket.com/teams/9_flag_safari.png" boxSize={"40px"}></Image>
        //             <Text>WI</Text>
        //             <Text>22 july</Text>
        //         </Flex>
        //         <Flex justifyContent={"space-around"}>
        //             <Image src="https://images.cricket.com/teams/4_flag_safari.png" boxSize={"40px"}></Image>
        //             <Text>Ind</Text>
        //             <Text>7 pm ist</Text>
        //         </Flex>
        //     </Box>
        //     <Box boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} width={"25%"}>
        //         <Flex  justifyContent={"space-around"}>
        //         <Text backgroundColor={"gray"} color={"white"} borderRadius={"4px"} fontSize="xs" width={"10%"}>ODI</Text>
        //             <Text>1st Odi</Text>
        //         </Flex>
        //         <Text>Port of Spain</Text>
        //         <Flex justifyContent={"space-around"}>
        //             <Image src="https://images.cricket.com/teams/9_flag_safari.png" boxSize={"40px"}></Image>
        //             <Text>WI</Text>
        //             <Text>22 july</Text>
        //         </Flex>
        //         <Flex justifyContent={"space-around"}>
        //             <Image src="https://images.cricket.com/teams/4_flag_safari.png" boxSize={"40px"}></Image>
        //             <Text>Ind</Text>
        //             <Text>7 pm ist</Text>
        //         </Flex>
        //     </Box>
        // </Flex>

        <>  <Heading>Schedule</Heading>
            <HStack justifyContent={"center"}>
                <Button height="40px" width={"200px"} bg={"red"} color={"white"} borderRadius={"5px"} fontSize={"large"} onClick={() => { filterItem1("Upcoming"); filterItem2("Upcoming");filterItem3("Upcoming");filterItem4("Upcoming");filterItem5("Upcoming") }}>Upcoming</Button>
                <Button height={"40px"} width={"200px"} bg={"lightblue"} color={"black"} borderRadius={"5px"} fontSize={"large"} onClick={() => { filterItem1("Live"); filterItem2("Live");filterItem3("Live");filterItem4("Live");filterItem5("Live") }}>Live</Button>
                <Button height={"40px"} width={"200px"} bg={"lightblue"} color={"black"} borderRadius={"5px"} fontSize={"large"} onClick={() => { filterItem1("Result"); filterItem2("Result");filterItem3("Result");filterItem4("Result");filterItem5("Result") }}>Result</Button>
            </HStack>
            <br />

            <HStack marginLeft={"50px"}>
                <Button height={"50px"} width={"100px"} bg={"red"} borderRadius={"5px"} color={"white"} fontSize={"large"}>INT</Button>
                <Heading>India tour of West Indies, 2022</Heading>
            </HStack>
            <br />
            <br />

            <Flex justifyContent={"space-around"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} >
                {items1.map((el) => {
                    return <Box width={"25%"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} key={el.id} height={"12rem"}>
                        <Flex justifyContent={"space-around"}>
                            <Text backgroundColor={"gray"} color={"white"} borderRadius={"4px"} fontSize="xs" width={"10%"}>{el.type}</Text>
                            <Text>{el.match}</Text>
                        </Flex>
                        <Text>{el.loc}</Text>
                        <Flex justifyContent={"space-around"}>
                            <Image src={el.img1} boxSize={"40px"}></Image>
                            <Text>{el.con1}</Text>
                            <Text>{el.date}</Text>
                        </Flex>
                        <br />
                        <Flex justifyContent={"space-around"}>
                            <Image src={el.img2} boxSize={"40px"}></Image>
                            <Text>{el.con2}</Text>
                            <Text>{el.time}</Text>
                        </Flex>

                    </Box>
                })}
            </Flex>
            <br />
            <br />

            <HStack marginLeft={"50px"}>
                <Button height={"50px"} width={"100px"} bg={"red"} borderRadius={"5px"} color={"white"} fontSize={"large"}>INT</Button>
                <Heading>New Zealand tour of Ireland, 2022</Heading>
            </HStack>
            <br />
            <br />

            <Flex justifyContent={"space-around"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
                {items2.map((el) => {
                    return <Box width={"25%"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} key={el.id} height={"12rem"}>
                        <Flex justifyContent={"space-around"}>
                            <Text backgroundColor={"gray"} color={"white"} borderRadius={"4px"} fontSize="xs" width={"10%"}>{el.type}</Text>
                            <Text>{el.match}</Text>
                        </Flex>
                        <Text>{el.loc}</Text>
                        <Flex justifyContent={"space-around"}>
                            <Image src={el.img1} boxSize={"40px"}></Image>
                            <Text>{el.con1}</Text>
                            <Text>{el.date}</Text>
                        </Flex>
                        <br />
                        <Flex justifyContent={"space-around"}>
                            <Image src={el.img2} boxSize={"40px"}></Image>
                            <Text>{el.con2}</Text>
                            <Text>{el.time}</Text>
                        </Flex>

                    </Box>
                })}
            </Flex>
            <br />
            <br />

            <HStack marginLeft={"50px"}>
                <Button height={"50px"} width={"100px"} bg={"red"} borderRadius={"5px"} color={"white"} fontSize={"large"}>INT</Button>
                <Heading>South Africa Women tour of England, 2022</Heading>
            </HStack>
            <br />
            <br />

            <Flex justifyContent={"space-around"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
                {items3.map((el) => {
                    return <Box width={"25%"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} key={el.id} height={"12rem"}>
                        <Flex justifyContent={"space-around"}>
                            <Text backgroundColor={"gray"} color={"white"} borderRadius={"4px"} fontSize="xs" width={"10%"}>{el.type}</Text>
                            <Text>{el.match}</Text>
                        </Flex>
                        <Text>{el.loc}</Text>
                        <Flex justifyContent={"space-around"}>
                            <Image src={el.img1} boxSize={"40px"}></Image>
                            <Text>{el.con1}</Text>
                            <Text>{el.date}</Text>
                        </Flex>
                        <br />
                        <Flex justifyContent={"space-around"}>
                            <Image src={el.img2} boxSize={"40px"}></Image>
                            <Text>{el.con2}</Text>
                            <Text>{el.time}</Text>
                        </Flex>

                    </Box>
                })}
            </Flex>
            <br />
            <br />

            <HStack marginLeft={"50px"}>
                <Button height={"50px"} width={"100px"} bg={"red"} borderRadius={"5px"} color={"white"} fontSize={"large"}>INT</Button>
                <Heading>South Africa tour of England, 2022</Heading>
            </HStack>
            <br />
            <br />


            <Flex justifyContent={"space-around"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
                {items4.map((el) => {
                    return <Box width={"25%"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} key={el.id} height={"12rem"}>
                        <Flex justifyContent={"space-around"}>
                            <Text backgroundColor={"gray"} color={"white"} borderRadius={"4px"} fontSize="xs" width={"10%"}>{el.type}</Text>
                            <Text>{el.match}</Text>
                        </Flex>
                        <Text>{el.loc}</Text>
                        <Flex justifyContent={"space-around"}>
                            <Image src={el.img1} boxSize={"40px"}></Image>
                            <Text>{el.con1}</Text>
                            <Text>{el.date}</Text>
                        </Flex>
                        <br />
                        <Flex justifyContent={"space-around"}>
                            <Image src={el.img2} boxSize={"40px"}></Image>
                            <Text>{el.con2}</Text>
                            <Text>{el.time}</Text>
                        </Flex>
                    </Box>
                })}
            </Flex>
            <br />
            <br />

            <HStack marginLeft={"50px"}>
                <Button height={"50px"} width={"100px"} bg={"red"} borderRadius={"5px"} color={"white"} fontSize={"large"}>INT</Button>
                <Heading>Bangladesh tour of Zimbabwe, 2022</Heading>
            </HStack>
            <br />
            <br />

            <Flex justifyContent={"space-around"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
                {items5.map((el) => {
                    return <Box width={"25%"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} key={el.id} height={"12rem"}>
                        <Flex justifyContent={"space-around"}>
                            <Text backgroundColor={"gray"} color={"white"} borderRadius={"4px"} fontSize="xs" width={"10%"}>{el.type}</Text>
                            <Text>{el.match}</Text>
                        </Flex>
                        <Text>{el.loc}</Text>
                        <Flex justifyContent={"space-around"}>
                            <Image src={el.img1} boxSize={"40px"}></Image>
                            <Text>{el.con1}</Text>
                            <Text>{el.date}</Text>
                        </Flex>
                        <br />
                        <Flex justifyContent={"space-around"}>
                            <Image src={el.img2} boxSize={"40px"}></Image>
                            <Text>{el.con2}</Text>
                            <Text>{el.time}</Text>
                        </Flex>
                    </Box>
                })}
            </Flex>


        </>



    )
}
// Completed

export default Schedule