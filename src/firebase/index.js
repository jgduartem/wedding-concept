
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


// Get guests
export const getGuests = async () => {
    const guestsSnapshot = await getDocs(collection(db, "guests"))
    return guestsSnapshot
}

export const getGuestByPhone = async (phone) => {
    let response = null
    const guestsRef = collection(db, "guests")
    const q = query(guestsRef, where("phone_number", "==", phone))
    const guestsSnapshot = await getDocs(q)
    guestsSnapshot.forEach((doc) => {
        response = doc.data()
    })
    return response
}
