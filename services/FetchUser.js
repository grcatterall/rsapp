import { hiscores, constants } from 'osrs-api';

const FetchUser = async (name) => {
    let username = name.trim().split(' ').join('_');

    return await hiscores.getPlayer({name: username, type: constants.playerTypes.normal});
    // return hiscores.getPlayer({name: username, type: constants.playerTypes.normal})
    //     .catch(console.error);
    
}

export default FetchUser;