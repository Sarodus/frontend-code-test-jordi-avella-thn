const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const requestRooms = async () => {
    // simulate request
    // await sleep(Math.random() * 3000)
    const rooms = [
        {
            id: 1,
            name: "Mini Dreamy Room",
            description:
                "Generous and confortable these modern furnished rooms offer two queen-size beds and are on the furst floor.",
            size: 20,
            beds: 1,
            people: 2,
            type: "double",
            price: 200,
            photo: "/assets/rooms/room_1.png",
        },
        {
            id: 2,
            name: "Sweet Bungalow",
            description:
                "The perfect blend of confort and culture, our superior room with a central garden view has stunning, and comes with a something.",
            size: 50,
            beds: 1,
            people: 2,
            type: "double",
            price: 350,
            photo: "/assets/rooms/room_2.png",
        },
        {
            id: 3,
            name: "Los Cocos Suite",
            description:
                "If you want a little extra from your stay, you might like our superior rooms. A ocean view room has a private beach and a something.",
            size: 125,
            beds: 3,
            people: 4,
            type: "double",
            price: 450,
            photo: "/assets/rooms/room_3.png",
        },
    ];
    return {rooms}
}
