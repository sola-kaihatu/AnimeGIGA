import React from 'react';
import {
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterIcon,
  FacebookIcon,
  LineIcon,
} from 'react-share';

const TweetButton = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '32px',
      }}
    >
      <TwitterShareButton
        title="Reactでサイト作りました。「AnimeGIGA」を見に来ませんか？"
        via="@Test"
        url="http://phptestp01.php.xdomain.jp/AnimeGIGA/index.html#/"
        hashtags={['AnimeGIGA']}
        style={{ width: '32px', height: '32px', marginRight: '10px' }}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton
        quote="Reactでサイト作りました。「AnimeGIGA」を見に来ませんか？"
        via="@Test"
        url="http://phptestp01.php.xdomain.jp/AnimeGIGA/index.html#/"
        hashtags={['AnimeGIGA']}
        style={{ width: '32px', height: '32px', marginRight: '10px' }}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LineShareButton
        title="Reactでサイト作りました。「AnimeGIGA」を見に来ませんか？"
        via="@Test"
        url="http://phptestp01.php.xdomain.jp/AnimeGIGA/index.html#/"
        hashtags={['AnimeGIGA']}
        style={{ width: '32px', height: '32px' }}
      >
        <LineIcon size={32} round />
      </LineShareButton>
    </div>
  );
};

export default TweetButton;
