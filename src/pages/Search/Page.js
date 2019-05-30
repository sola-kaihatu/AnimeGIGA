import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '../../components/Accordion';

const Page = props => {
  return (
    <div>
      <div style={{ margin: '30px 10px 10px 10px' }}>
        <h3 style={headerStyle}>{props.age}年代　邦楽ヒット曲 ランキング</h3>
      </div>
      <div style={{ marginLeft: '10px', marginRight: '10px' }}>
        <Accordion selectedAgeListData={props.selectedAgeListData} />
      </div>
    </div>
  );
};

const headerStyle = {
  padding: '0.4em 0.5em',
  color: '#494949',
  background: '#f4f4f4',
  borderLeft: 'solid 5px #7db4e6',
  borderBottom: 'solid 3px #d7d7d7',
};

Page.propTypes = {
  age: PropTypes.number,
  selectedAgeListData: PropTypes.array,
};

export default Page;
