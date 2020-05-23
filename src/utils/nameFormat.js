export const nameFormat = (name: string) => {
    const nameLength = name.length - 1;
    const lastLetter = name[nameLength]; //a
    const tabLetter = [...name];

    if(lastLetter === 'a') {

        tabLetter[nameLength] = 'o'
    }

    return tabLetter;
};
