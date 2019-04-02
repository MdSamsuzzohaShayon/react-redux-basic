// DEFAULT INITIAL STATE
const initState = {
    posts: [
        { id: '1', title: 'Is React Translated Yet?', body: 'We’re excited to announce an ongoing effort to maintain official translations of the React documentation website into different languages. Thanks to the dedicated efforts of React community members from around the world' },
        { id: '2', title: 'Why Localization Matters?', body: 'React already has many meetups and conferences around the world, but many programmers don’t use English as their primary language. We’d love to support local communities who use React by making our documentation available in most popular languages.' },
        { id: '3', title: 'The Bot', body: 'The most challenging part was getting the bot to sync changes from the English version of the site. Initially we were using the che-tsumi bot created by the Japanese Vue translation team, but we soon decided to build our own bot to suit our needs.' }
    ]
};

// FIRST TIME STATE DON'T DEFINED SO WE NEED TO GIVE THE DEFAULT VALUE OF SATE
const rootReducer = (state = initState, action) => {
    // console.log(action);
    if (action.type == 'DELETE_POST') {
        // CREATE NEW ARRAY AND FILTER ONLY FOR THOSE POST WE WANT
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id;
        });
        // RETURN NEW OBJECT WHICH REPRESENT NEW STATE
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}



export default rootReducer;