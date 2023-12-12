export const coffeeweb_SetLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
export const coffeeweb_GetLocal = (key) => {
    const ISSERVER = typeof window === "undefined";
    if(!ISSERVER){
        let value = localStorage.getItem(key);
        return JSON.parse(value)
    } else return undefined
}
export const coffeewebClearLocal = () => {
    localStorage.clear();
}


export const coffeewebStorageKeys = {
    // authToken:'AuthToken',
    userDetails: 'userDetails'
}