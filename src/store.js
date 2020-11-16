import dayjs from "dayjs";
import { writable } from 'svelte/store'

const BOOK_DATA_STORE_KEY = 'BOOK_DATA_STORE'

function createBookDataStore() {
    const today = dayjs();
    const tomorrow = today.add(1, "day");

    let storedData = localStorage.getItem(BOOK_DATA_STORE_KEY)
    try {
        if (storedData) storedData = JSON.parse(storedData)
    } catch (error) {
        console.error(error)
    }

    const initialData = {
        checkin: storedData?.checkin || today.toJSON().slice(0, 10),
        checkout: storedData?.checkout || tomorrow.toJSON().slice(0, 10),
        adults: storedData?.adults || 2,
        children: storedData?.children || 0,
        roomId: storedData?.roomId || undefined
    }

    const { subscribe, set, update } = writable(initialData)

    function saveLocal(roomId) {
        update(status => {
            status.roomId = roomId
            return status
        })
        subscribe(status => localStorage.setItem(BOOK_DATA_STORE_KEY, JSON.stringify(status)))()
    }

    return { subscribe, set, update, saveLocal }
}

export const bookDataStore = createBookDataStore()
