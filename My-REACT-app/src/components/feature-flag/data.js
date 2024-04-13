
const dummyAPIres = {
    showLightDarkMode : false,
    showTicTacToe: true,
    showNestedMenu: true,
    showImageSlider: false,
    showGithubProfile: true
};

function featureFlagServiceCall(){

    return new Promise((resolve, reject)=>{

        if(dummyAPIres) setTimeout(resolve(dummyAPIres), 2000);
        else reject('Some error has occured, Please try again');
    });
}

export default featureFlagServiceCall;