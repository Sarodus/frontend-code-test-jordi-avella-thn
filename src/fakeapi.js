export const requestRooms = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const promocode = urlParams.get('promo_code');
    const discount = parseInt(promocode) || 0

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
            price: 200.0,
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
            price: 350.0,
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
            price: 450.0,
            photo: "/assets/rooms/room_3.png",
        },
    ];
    return {
        rooms: rooms.map(room => {
            if (discount) {
                room.price = Math.max(
                    room.price - (room.price * discount / 100),
                    0
                )
            }
            return room
        })
    }
}
