
export const getUser = (state: any) => {

    return state.user.userDetails;
}

export const getUserIsGrouped = (state: any) => {

    return state.user.userDetails.isGrouped;
}

export const getUserGroupedName = (state: any) => {

    return state.user.groupName;
}

