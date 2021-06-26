export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "gom",
      },
      content: "첫 번째 게시글 #해시태그 #으잉",
      Images: [
        {
          src: "http://stimg.afreecatv.com/NORMAL_BBS/7/19221957/39615ef9e0a832bb2.jpg",
        },
        {
          src: "http://stimg.afreecatv.com/NORMAL_BBS/7/19221957/28745ef9e0a739c74.jpg",
        },
        {
          src: "https://ncache.ilbe.com/files/attach/new/20191119/377678/2195710026/11214282885/da775087bd5d0678074019d199ee5822_11214283342.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "gomdang",
          },
          content: "곰댕이다 반갑다",
        },
        {
          User: {
            nickname: "sarigom",
          },
          content: "사리곰탕면이다",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const addPost = (data) => {
  type: ADD_POST_REQUEST, data;
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: "gomm",
  },
  content: "더미포스트",
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:

    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    case ADD_POST_FAILURE:

    default:
      return state;
  }
};

export default reducer;
