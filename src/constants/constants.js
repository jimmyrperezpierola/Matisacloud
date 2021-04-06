export const capitalize = data => {
    return data.charAt(0).toUpperCase() + data.slice(1);
}

export const emailRegex = /^\S+@\w+([.-]?\w+)*(\.\w{2,15})+$/;