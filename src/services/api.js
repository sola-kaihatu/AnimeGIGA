import axios from 'axios';

const getRequestYoutube = async (url, params) => {
  let response, error;

  await axios
    .get(url, { params })
    .then(res => {
      // if (res.data.Error_info) {
      //   error = res.data.Error_info[0].message;
      // } else {
      response = res;
      // }
    })
    .catch(() => {
      error = 'エラーじゃい！！！';
    });

  return { response, error };
};

const getYoutubeData = params => {
  return getRequestYoutube(
    'https://www.googleapis.com/youtube/v3/search',
    params
  );
};

const getRequest = async url => {
  let response, error;

  await axios
    .get(url)
    .then(res => {
      response = res;
    })
    .catch(() => {
      error = 'エラーじゃい！！！';
    });

  return { response, error };
};

const getAnimeList = () => {
  return getRequest('http://api.moemoe.tokyo/anime/v1/master/2019/1');
};

export { getAnimeList, getYoutubeData };
